import { Component, OnInit } from '@angular/core';
import { AuthorModel } from './author.model';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-author-list',
    templateUrl: './author-list.component.html',
    styleUrls: ['./author-list.component.css']
  })

  export class AuthorListComponent implements OnInit {

  title:String ="Author List";
  
  authors: AuthorModel[];
  //image properties
  imageWidth:number = 50;
  imageMargin:number = 2;

  showImage: boolean = false;
  //creating service object for calling getAuthors()
  

  toggleImage():void{
    this.showImage =!this.showImage; 
  }
  constructor(private router:Router,private authorService:AuthorService,public _auth:AuthService ) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data:any)=>{
      this.authors = JSON.parse(JSON.stringify(data));
    })
  }

  onedit(author:any)
  {
    this.authorService.selectedAuthor = author;
    console.log(this.authorService.selectedAuthor);
    this.router.navigate(['/updatead']);
  }

  ondlt(author:any)
  {
    this.authorService.deleteAuthor(author._id);
    alert("Author deleted");
    window.location.reload();
  }
}
