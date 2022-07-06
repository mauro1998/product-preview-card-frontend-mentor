export class Product {
  constructor(
    public type: string,
    public title: string,
    public description: string,
    public price: number,
    public discountPrice: number,
    public desktopImage: string,
    public mobileImage: string,
  ) {}
}
