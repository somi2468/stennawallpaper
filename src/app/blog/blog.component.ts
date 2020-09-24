import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogapi;
  blogdata;
  newsdata
  constructor(private http:DataService) { }

  ngOnInit(): void {
    this.http.getdata()
    .subscribe
    (
       data=>
       {
         this.blogdata =data.BlogApi;
         console.log(this.blogdata); 
       }
    ) 
  }

}
