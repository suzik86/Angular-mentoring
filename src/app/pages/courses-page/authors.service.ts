import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Author from './components/course/author.types';

const AUTHORS_ENDPOINT = 'authors';
const BACKEND_URL = 'http://localhost:3004/';


@Injectable({
  providedIn: 'root',
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  findAuthors(textFragment): Observable<Author[]> {
    const params = new HttpParams()
                .set('textFragment', textFragment);

    return this.http.get<Author[]>(BACKEND_URL + AUTHORS_ENDPOINT, {params});
  }
}
