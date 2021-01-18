export default class Author {
  constructor(author: Author = null) {
    if (author) {
      Object.assign(this, author);
    }
  }
  id: number;
  name: string;
}
