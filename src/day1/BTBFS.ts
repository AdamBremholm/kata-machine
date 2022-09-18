export default function bfs(head: BinaryNode<number>, needle: number): boolean {

  const q: (BinaryNode<number> | undefined | null)[] = [];

  q.push(head);
  while (q.length) {

    const curr = q.shift();
    if (!curr) {
      continue;
    }

    if(curr.value === needle){
      return true;
    }

    q.push(curr.left);
    q.push(curr.right);

  }
  return false;
}
