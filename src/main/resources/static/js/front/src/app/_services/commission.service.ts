import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Commission } from './../_models/commission';

@Injectable()
export class CommissionService {
  // URL to the Web API
  private commissionsUrl = 'api/commissions';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getCommissions(): Promise<Commission[]> {
    return this.http.get(this.commissionsUrl)
               .toPromise()
               .then(response => response.json().data as Commission[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error has occured', error);
    return Promise.reject(error.message || error);
  }

  getCommission(id: number): Promise<Commission> {
    const url = `${this.commissionsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Commission)
      .catch(this.handleError);
  }

  update(commission: Commission): Promise<Commission> {
    const url = `${this.commissionsUrl}/${commission.id}`;
    return this.http
      .put(url, JSON.stringify(commission), {headers: this.headers})
      .toPromise()
      .then(() => commission)
      .catch(this.handleError);
  }

  create(name: string): Promise<Commission> {
    return this.http
      .post(this.commissionsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Commission)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.commissionsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
