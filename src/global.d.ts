enum Country {
  "US",
  "UK",
  "EURO"
}

export {};

declare global {
 
  type DisplayShoes = {
    shoesid: number,
    name: string,
    type: string,
    brand: string,
    country: Country,
    number: number,
    colour: string,
    miscellaneous: string,
    costprice: number,
    picture: any,
  }[];

  type UploadShoe = {
    name: string,
    typeid: number,
    brandid: number,
    sizeid: number,
    colour: string,
    miscellaneous: string,
    costprice: number,
    picture: boolean,
  };
}