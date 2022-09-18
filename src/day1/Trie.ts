export default class Trie {
  private head: TrieNode;
  constructor() {
    this.head = this.createNode();
  }

  insert(item: string): void {
    let curr = this.head;
    for (const c of item) {
      if (curr.containsKey(c)) {
        curr = curr.get(c);
      } else {
        const node = this.createNode();
        curr.put(c, node);
        curr = node;
      }
    }
    curr.isWord = true;
  }
  delete(item: string): void {
    let stack: TrieNode[] = [];
    let curr = this.head;
    for (const c of item) {
      stack.push(curr);
      if (curr.containsKey(c)) {
        curr = curr.get(c);
      }
    }
    curr.isWord = false;
    if (!curr.hasChildren() && stack.length > 0) {
      let p = stack.pop() as TrieNode;
      while (stack.length > 0) {
        if (p.isWord || p.Count() > 1) {
          break;
        }
        p.resetChildren();
        p = stack.pop() as TrieNode;
      }
    }
  }

  find(partial: string): string[] {
    let res: string[] = [];
    let curr = this.head;
    for (const c of partial) {
      if(curr.containsKey(c)){
        curr = curr.get(c);
      }
      else {
        return res;
      }
    }
    this.findRecurse(curr, res, partial);
    return res;
  }

  private createNode(): TrieNode {
    return new TrieNode();
  }
  private findRecurse(node: TrieNode, res: string[], str: string): void {
    if(node.isWord){
      res.push(str)
    }
    for (let i = 0; i < node.children.length; i++) {
      if(node.children[i]){
        let tmp = str + toChar(i);
        this.findRecurse(node.children[i], res, tmp);
      }
    }

  }
}

export class TrieNode {
  constructor() {
    this.children = [];
  }
  public isWord: boolean;

  public children: TrieNode[];

  public containsKey(s: string): boolean {
    return this.children[idx(s)] !== undefined;
  }

  public get(s: string): TrieNode {
    return this.children[idx(s)];
  }

  public put(s: string, node: TrieNode): void {
    this.children[idx(s)] = node;
  }

  public hasChildren(): boolean {
    return this.children.length > 0;
  }

  public resetChildren(): void {
    this.children = [];
  }

  public Count(): number {
    return this.children.length;
  }
}

export function toChar(idx: number): string {
  const zero = 'a'.charCodeAt(0);
  return String.fromCharCode(idx + zero);
}

export function idx(input: string): number {
  const zero = 'a'.charCodeAt(0);
  return input.charCodeAt(0) - zero;
}
