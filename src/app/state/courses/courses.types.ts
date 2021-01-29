export default class Course {
  id: number;
  name: string;
  date: string;
  length: string;
  description: string;
  isTopRated?: boolean;
  authors?: any;
}

export interface QueryParams {
  filter: string;
  start: string;
  count: string;
}
