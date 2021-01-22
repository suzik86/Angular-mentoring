export default interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  login: string;
  fakeToken: string;
}
