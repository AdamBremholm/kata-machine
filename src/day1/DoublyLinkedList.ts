type ListNode<T> = {
  value: T,
  next?: ListNode<T>,
  prev?: ListNode<T>,
}


export default class DoublyLinkedList<T> {
  public length: number;
  private head?: ListNode<T>;


  constructor() {
    this.length = 0;
  }

  prepend(item: T): void {

    this.length++
    const node = { value: item } as ListNode<T>;
    if (!this.head) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error();
    }
    if (idx == this.length) {
      this.append(item);
      return
    }
    if (idx === 0) {
      this.prepend(item);
      return
    }

    this.length++
    const node = { value: item } as ListNode<T>;
    const old = this.getNode(idx)!;
    const prev = old?.prev!;
    prev.next = node;
    node.prev = prev
    node.next = old
    old.prev = node
  }
  append(item: T): void {
    this.length++
    const node = { value: item } as ListNode<T>;
    if (!this.head) {
      this.head = node;
      return;
    }
    const last = this.getNode(this.length - 2)
    if (last) {
      last.next = node;
      node.prev = last;
    }

  }
  remove(item: T): T | undefined {
    let node = this.head;
    while (node) {
      if (node.value === item) {
        break;
      }
      node = node.next;
    }
    if (!node) {
      return undefined;

    }
    this.length--;
    if (node && this.head && node == this.head) {
      this.head = node.next;
      return node?.value;
    }
    if (node && node.next && node.prev) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    return node?.value

  }
  get(idx: number): T | undefined {
    return this.getNode(idx)?.value
  }
  removeAt(idx: number): T | undefined {
    const node = this.getNode(idx)
    this.length--
    if (node && this.head && node == this.head) {
      this.head = node.next;
      return node?.value;
    }
    if (node && node.next && node.prev) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    return node?.value;
  }



  private getNode(idx: number): ListNode<T> | undefined {
    let curr = this.head;
    for (let i = 0; i < idx; i++) {
      curr = curr?.next;
    }
    return curr;

  }
}
