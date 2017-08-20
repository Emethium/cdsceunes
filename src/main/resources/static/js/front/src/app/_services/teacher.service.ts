import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Teacher } from '../_models/teacher';

@Injectable()
export class TeacherService {
  // URL to the Web API
  private teachersUrl = 'api/teachers';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getTeachers(): Promise<Teacher[]> {
    return this.http.get(this.teachersUrl)
               .toPromise()
               .then(response => response.json().data as Teacher[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error has occured', error);
    return Promise.reject(error.message || error);
  }

  getTeacher(id: number): Promise<Teacher> {
    const url = `${this.teachersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Teacher)
      .catch(this.handleError);
  }

  update(Teacher: Teacher): Promise<Teacher> {
    const url = `${this.teachersUrl}/${Teacher.id}`;
    return this.http
      .put(url, JSON.stringify(Teacher), {headers: this.headers})
      .toPromise()
      .then(() => Teacher)
      .catch(this.handleError);
  }

  create(name: string): Promise<Teacher> {
    return this.http
      .post(this.teachersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Teacher)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.teachersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
