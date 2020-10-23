import { Component } from '@angular/core';
import Course from '../course/course.types';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  courses: Course[] = [
    {
      id: 1,
      title: 'Introduction to Biological Anthropology',
      creationDate: '01/02/2020',
      duration: '2 weeks',
      description: 'Anthropological perspective on biological variation in human and non-human primates in the past and the present; examines the interaction between biology and culture in the evolution of human society. Evolution and behavior of non-human primates are examined for what they reveal about the human condition.',
    },
    {
      id: 2,
      title: 'Forms and Ideas in Humanities',
      creationDate: '08/05/2020',
      duration: '4 weeks',
      description: 'Prerequisite: Multiple Measures Placement in GE-level writing or completion of the lower division writing requirement. Introductory course provides instruction in the interdisciplinary analysis and interpretation of meaning in art, music and literature ,and in the understanding of philosophical ideas in their own right and as they influence styles and themes in works of art. ',
    },
    {
      id: 3,
      title: 'Ethical, Professional and Legal Standards in Psychology ',
      creationDate: '12/02/2020',
      duration: '3 weeks',
      description: 'Ethical issues relevant to teaching, research, and application of psychology are reviewed, with an emphasis on the principles of the American Psychological Associations ethics code and related professional standards and guidelines.',
    },

  ];

  constructor() { }

  onDeleteCourse(id): void {
    console.log(id);
  }

}
