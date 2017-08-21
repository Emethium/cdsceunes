import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Discipline } from './../_models/discipline';

@Injectable()
export class DisciplineService {
  // URL to the Web API
  private disciplinesUrl = 'api/disciplines';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getDisciplines(): Promise<Discipline[]> {
    return this.http.get(this.disciplinesUrl)
               .toPromise()
               .then(response => response.json().data as Discipline[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error has occured', error);
    return Promise.reject(error.message || error);
  }

  getDiscipline(id: number): Promise<Discipline> {
    const url = `${this.disciplinesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Discipline)
      .catch(this.handleError);
  }

  update(discipline: Discipline): Promise<Discipline> {
    const url = `${this.disciplinesUrl}/${discipline.id}`;
    return this.http
      .put(url, JSON.stringify(discipline), {headers: this.headers})
      .toPromise()
      .then(() => discipline)
      .catch(this.handleError);
  }

  create(name: string): Promise<Discipline> {
    return this.http
      .post(this.disciplinesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Discipline)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.disciplinesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
