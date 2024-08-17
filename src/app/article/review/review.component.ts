import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiDataService } from '../../Api-Data/api-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OurAuthService } from '../../auth.service';
import { empty, Observable, of, Subject,throwError } from 'rxjs';
import { map,debounceTime, distinctUntilChanged, switchMap, catchError, retryWhen, retry } from 'rxjs/operators';
import { ModalService } from 'src/app/_modal';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})

export class ReviewComponent implements OnInit {

  articlesForm : FormGroup;
  articles : any;
  isLoading : any;
  errorMessage : any;
  articlesFetched : any;
  arrayList : any;
  constructor(private dataService: ApiDataService,private route: ActivatedRoute, private router: Router,private authService : OurAuthService,public modalService:ModalService) {

    this.arrayList = [];
    this.articlesForm = new FormGroup({
      user_name: new FormControl(''),
      title:new FormControl(''),
      company:new FormControl(''),
      date :new FormControl(''),
      article_view_link:new FormControl(''),
    })

  }

  acceptReview(articleId){
        Swal.fire({
              title: 'Are you sure you want to approve?',
              text: 'This will make the article visible to everyone!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, Approve it!',
              cancelButtonText: 'No, don\'t approve it'
      }).then((result) => {
        if (result.isConfirmed) {
            this.dataService.postData("/approve-article",{articleId}).subscribe(data=>{
            console.log(data);
                Swal.fire(
                  'Approved!',
                  'This article is approved :)',
                  'success'
                )
        })
    }
    else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'The article is not Approved :(',
        'error'
      )
    }
})
  }

  rejectReview(articleId){
    Swal.fire({
        title: 'Are you sure you want to reject this article?',
        text: 'You will not be able approve it again!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, reject it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
      if (result.isConfirmed) {
            this.dataService.postData("/reject-article",{articleId}).subscribe(data=>{
          console.log(data);
              Swal.fire(
                'Rejected!',
                'This article has been rejected :(.',
                'success'
              )
        })
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
      'Cancelled',
      'The article is not rejected :)',
      'error'
    )
  }
})

  }


  public  articleSearched = new Subject<string>();


  public searchArticlesGeneric(){
    this.articleSearched.pipe(
      map((e:any)=>{
        console.log(e.target.value);
        return e.target.value
      }),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(word=>{
        this.isLoading= true;
        return this.searchArticle(word);
      }),
      catchError((err)=>{
        console.log(err);
        this.isLoading=false;
        this.errorMessage=err.message;
        return throwError(err);
      })
    ).subscribe(val=>{
      this.isLoading=false;
      console.log(this.isLoading);
      this.articlesFetched=val;
      // this.paginationElements=this.editorialsFetched;
      console.log("Articles Fetched ")
    })
  }

  public searchArticle(word):Observable<any>{
  word=word.trim();
  if(word===""){
    console.log("no word entered");
    // return empty()
    return of(null);
  }
  else{
    return this.dataService.getData("/articles/getArticlesByCompanyNotVerified/"+word).pipe(
      map(response =>{
          console.log(response);
          this.articlesFetched=response;
          // this.p=1;
          this.arrayList=this.articlesFetched.articles;

          console.log("Articles fetched ");
          console.log(this.arrayList);
      })
    )
  }
}

  ngOnInit(): void {
    this.searchArticlesGeneric();
      this.dataService.getData("/article/not-reviewed").subscribe(async data=>{
        console.log(data);
        this.arrayList = data;
      })
  }

    onSubmit(){
    console.log(this.articlesForm);
  }

}
