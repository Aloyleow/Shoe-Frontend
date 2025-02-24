export {};

declare global {

  type DisplayShoes = {
    shoesid: number,
    name: string,
    type: string,
    brand: string,
    country: string,
    number: number,
    colour: string,
    miscellaneous: string,
    costprice: number,
    picture: string,
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

  type DisplayShoeType = {
    typeid: number,
    typename: string,
  }[];

  type DisplayShoeBrand = {
    brandid: number,
    brandname: string,
  }[]

  type DisplayShoeSize = {
    sizeid: number,
    sizecountry: Country,
    sizenumber: number
  }[]
}