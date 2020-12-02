import { Injectable } from '@angular/core';
import Course from './components/course/course.types';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesImplementationService  implements CoursesService{
  private courseCreation = false;
  private courses: Array<Course> = [
    {
      id: 1,
      title: 'Introduction to Biological Anthropology',
      creationDate: '2020-10-21',
      duration: '200',
      description: 'Anthropological perspective on biological variation in human and non-human primates in the past and the present; examines the interaction between biology and culture in the evolution of human society. Evolution and behavior of non-human primates are examined for what they reveal about the human condition.',
      topRated: true,
    },
    {
      id: 2,
      title: 'Forms and Ideas in Humanities',
      creationDate: '2020-11-05',
      duration: '20',
      description: 'Prerequisite: Multiple Measures Placement in GE-level writing or completion of the lower division writing requirement. Introductory course provides instruction in the interdisciplinary analysis and interpretation of meaning in art, music and literature ,and in the understanding of philosophical ideas in their own right and as they influence styles and themes in works of art. ',
      topRated: false,
    },
    {
      id: 3,
      title: 'Ethical, Professional and Legal Standards in Psychology ',
      creationDate: '2020-12-06',
      duration: '700',
      description: 'Ethical issues relevant to teaching, research, and application of psychology are reviewed, with an emphasis on the principles of the American Psychological Associations ethics code and related professional standards and guidelines.',
      topRated: true,
    },
  ];

  get list(): Array<Course> {
    return this.courses;
  }

  createCourse(course): void {
    course.id = this.courses.length + 1;
    this.courses.push(course);
  }

  getItemById(id): Course {
    return this.courses.find(course => course.id === id);
  }

  updateItem(course): void {
    const index = this.courses.findIndex(item => item.id === course.id);
    if (index !== -1) {
      this.courses[index] = course;
    }
  }

  removeItem(id): void {
    this.courses = this.courses.filter(item => item.id !== id);
  }
}
