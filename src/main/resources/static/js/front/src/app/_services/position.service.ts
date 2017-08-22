import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Position } from './../_models/position';

@Injectable()
export class PositionService {
  // URL to the Web API
  private positionsUrl = 'api/positions';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getPositions(): Promise<Position[]> {
    return this.http.get(this.positionsUrl)
               .toPromise()
               .then(response => response.json().data as Position[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error has occured', error);
    return Promise.reject(error.message || error);
  }

  getposition(id: number): Promise<Position> {
    const url = `${this.positionsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Position)
      .catch(this.handleError);
  }

  update(position: Position): Promise<Position> {
    const url = `${this.positionsUrl}/${position.id}`;
    return this.http
      .put(url, JSON.stringify(position), {headers: this.headers})
      .toPromise()
      .then(() => position)
      .catch(this.handleError);
  }

  create(name: string): Promise<Position> {
    return this.http
      .post(this.positionsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Position)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.positionsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
