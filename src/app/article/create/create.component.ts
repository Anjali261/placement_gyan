import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiDataService } from '../../Api-Data/api-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OurAuthService } from '../../auth.service';
import { Observable, of, Subject, throwError } from 'rxjs';
import { map,debounceTime, distinctUntilChanged, switchMap, catchError, retryWhen, retry } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  editorialForm : FormGroup;
  problemsForm : FormGroup;
  problem_code:any;
  site_name:any;
  siteName:any;
  editorial:any;
  problem_name:any;
  problem_link:any;
  languageList:any;
  problems_selected : any;
  arrayList: any;
  errorMessage : any;
  problemsFetched: any;
  current_problem : any;
  isLoading : boolean;

  public items = [
    {display: 'Pizza', value: 1},
    {display: 'Pasta', value: 2},
    {display: 'Parmesan', value: 3},
  ];


  constructor(private dataService: ApiDataService,private route: ActivatedRoute, private router: Router,private authService : OurAuthService) {

    this.problems_selected = [];
    this.isLoading = false
    this.editorialForm = new FormGroup({
      title: new FormControl('', { validators: Validators.required }),
      company: new FormControl('', { validators: Validators.required }),
      // tags: new FormControl('', { validators: Validators.required }),
      date : new FormControl('', { validators: Validators.required }),
      content: new FormControl(`
      <h3><strong style="color: rgb(0, 102, 204);">Summary of Test and Questions:</strong></h3><p><br></p><p><br></p><p><br></p><h3><strong style="color: rgb(0, 102, 204);">Concepts covered in the coding section of the test:</strong></h3><h3><br></h3><p><br></p><p><br></p><h3><strong style="color: rgb(0, 102, 204);">Concepts covered in the MCQ section of the test:</strong></h3><h3><br></h3><p><br></p><h3><br></h3><h3><strong style="color: rgb(0, 102, 204);">Concepts that were given more weightage:</strong></h3><h3><br></h3><p><br></p><p><br></p><h3><strong style="color: rgb(0, 102, 204);">Additional remarks/resources to help your junior batches from your experience today:</strong></h3><h3><br></h3><p><br></p><p><br></p>
      `,{validators: Validators.required}),
    })

      this.problemsForm = new FormGroup({
      problem_name  : new FormControl("")
    })
}

 options = {
   toolbar:[
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      [ 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      // [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': ["white"] }],          // dropdown with defaults from theme
      [{ 'align': [] }],

      ['link', 'image', 'video']
   ],
   syntax:true
  }



onSubmit(){
  let dataToSubmit = this.editorialForm.value;
  let problemIds = [];
  for(let i=0;i<this.problems_selected.length;i++){
    problemIds.push(this.problems_selected[i]._id);
  }
  dataToSubmit.problemIds = problemIds;
  console.log(dataToSubmit);
  this.dataService.postData('/article/create',this.editorialForm.value).subscribe(async d=>{
    console.log(d);
    console.log("added");
    alert('Added Successfully');
  })
}


  public problemNameSearched = new Subject<string> ();

  // Searching for problem based on problem name using a subject

  public searchByProblemName() {
    this.problemNameSearched.pipe(
      map((e:any)=>{
        console.log(e.target.value);
        return e.target.value
      }),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(word=>{
        word.trim();
        return this.searchProblem(word);
      }),
      catchError((err)=>{
        console.log(err);
        this.errorMessage = err.message;
        return throwError(err);
      })
    ).subscribe(val=>{
      this.problemsFetched = val;
      console.log(`problems fetched based on problem name`)
    })
  }

  // Observing the changes recieved when subject is used

  public searchProblem(word):Observable<any>{
    word = word.trim();
    if(word===""){
      console.log("no word entered");
      return of(null);
    }
    else{
      return this.dataService.getData(`/problems/getProblemByName/${word}`).pipe(
        map(response =>{
          console.log(response);
          this.problemsFetched = response;
          this.arrayList = this.problemsFetched.problems;
          for(let i=0;i<this.arrayList.length;i++)
          {
          this.arrayList[i].selected = "no";

            // console.log(this.arrayList[i]);
            if(this.arrayList[i].createdAt!=null)
            {
              let d = new Date(this.arrayList[i].createdAt);
              this.arrayList[i].createdAt = (d.getFullYear()+"/"+d.getMonth()+"/"+d.getDate());
            }
            // this.arrayList[i].createdAt=  this.arrayList[i].createdAt.slice(0,10)

          }
          console.log("Problems fetched based on problem Name");
          console.log(this.arrayList);
        })
      )
    }
  }



ngOnInit(){

    this.arrayList = [];
    this.searchByProblemName();


}

  addProblem(position){
    this.problems_selected.push(this.arrayList[position]);
    this.arrayList[position].selected = "yes";
    console.log(this.problems_selected);
  }

  removeTag(position){
    this.current_problem = this.problems_selected[position];
    let fg=0;
    for(let i=0;i<this.arrayList.length;i++){
      if(this.current_problem==this.arrayList[i]){
          fg=1;
        this.problems_selected.splice(position,1);
        this.arrayList[i].selected = "no";
        break;
      }
    }

    if(!fg){
      console.log(`problem not in array list removing from default`);
      this.problems_selected.splice(position,1);
    }
    console.log("tag removed");
  }

  removeProblem(position){
    this.current_problem = this.arrayList[position];
    let fg=0;
    for(let i=0;i<this.problems_selected.length;i++){
      if(this.current_problem===this.problems_selected[i]){
        // delete this.problems_selected[i];
        fg=1;
        this.problems_selected.splice(i,1);
        this.arrayList[position].selected = "no";
        break;
      }
    }
    if(!fg){
      console.log(`problem not in array list removing from default`);
      this.problems_selected.splice(position,1);
    }
    console.log(this.problems_selected);

  }

}
