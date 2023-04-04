export class Pagination {

  private page: number = 0;
  private size: number = 10;

  constructor(page: number, size: number) {
    this.page = (page - 1) * size;
    if (size) {
      this.size = size;
    }
  }
  public getPage(): number {
    return this.page;
  }
  public getSize(): number{
    return this.size;
  }
}