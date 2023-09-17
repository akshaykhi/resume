import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Response } from './Response';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit{


  public response: Response[] | undefined;
  public getJsonValue:any;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
this.getMethod();
this.getBulkData();
  }

  public getBulkData() {
    this.http.get<Response[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((data: any[]) => {
          // Map the incoming data to an array of Response objects
          return data.map(item => new Response(item.userId, item.id, item.title, item.body));
        })
      )
      .subscribe((response: Response[]) => {
        // Filter data to include only titles containing "dolorem"
        this.response = response.filter(post => post.title.includes('dolorem')).slice(0, 10);
      });
  }
  
  public getMethod() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data)=>{
      console.log(data);
      this.getJsonValue = data;
    });
  }



}
