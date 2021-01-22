export default class Course {
  constructor(course: Course = null) {
    if (course) {
      Object.assign(this, course);
    }
  }
  id: number;
  name: string;
  date: string;
  length: string;
  description: string;
  isTopRated?: boolean;
  authors?: any;
}
