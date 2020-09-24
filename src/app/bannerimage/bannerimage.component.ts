import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Blog } from '../blog';

@Component({
  selector: 'app-bannerimage',
  templateUrl: './bannerimage.component.html',
  styleUrls: ['./bannerimage.component.css']
})
export class BannerimageComponent implements OnInit {
 
  resData;
  collection;
  BlogID: number;
  post: Blog;
 
  constructor(private DataService:DataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const BlogID = this.route.snapshot.paramMap.get('BlogID');
    // console.log(id);
    this.DataService.getBlog(+BlogID).subscribe((result)=>{
      this.resData=result;
      this.collection=this.resData.Blog;
     // console.log(result);
     })
  }

}
