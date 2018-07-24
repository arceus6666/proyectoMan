import { Author } from './author';
export class Libro {
  constructor(
    public name: string,
    public author: Author,
    public edition: number,
    public publishing: Date,
    public editorial: string,
    public area: string,
    public borrowed: boolean,
    public dateBorrowed: Date,
    public borrowerID: number,
    public onDate: boolean
  ){ }
}
