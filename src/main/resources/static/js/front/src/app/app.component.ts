import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'This app works!';
  private apiUrl = 'http://localhost:8080/api/v1/teachers';
  data: any = {};

  constructor(private http: Http) {
    console.log('Greetings, Gentleman');
    this.getTeachers();
    this.getData();
  }

  getTeachers() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
    console.log('Grabbed teachers data!');
  }

  getData() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json());
  }
}
