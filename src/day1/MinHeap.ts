export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

     const out = this.data[0];
     this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return out;
  }

  private heapifyDown(idx: number): void {
    const lIdx = this.leftChild(idx);
    const rIdx = this.rightChild(idx);
    if (idx >= this.length || lIdx >= this.length) {
      return;
    }
    const lV = this.data[lIdx];
    const rV = this.data[rIdx];
    const v = this.data[idx];

    const minValue = Math.min(lV, rV);
    const idxToSwap = minValue === lV ? lIdx : rIdx;
    if (v > minValue) {
      this.data[idx] = minValue;
      this.data[idxToSwap] = v;
      this.heapifyDown(idxToSwap);
    }
  }

  private heapifyUp(idx: number) {
    if (idx == 0) {
      return;
    }
    const p = this.parent(idx);
    const pV = this.data[p];
    const v = this.data[idx];
    if (pV > v) {
      this.data[idx] = pV;
      this.data[p] = v;
      this.heapifyUp(p);
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return 2 * idx + 1;
  }
  private rightChild(idx: number): number {
    return 2 * idx + 2;
  }

  /* private swap(idxA: number, idxB: number) { */
  /*   if (idxA >= this.length || idxA < 0 || idxB >= this.length || idxB < 0) { */
  /*     throw new Error('out of bounds bro'); */
  /*   } */
  /*   const tmp = this.data[idxA]; */
  /*   this.data[idxA] = this.data[idxB]; */
  /*   this.data[idxB] = tmp; */
  /* } */
}
