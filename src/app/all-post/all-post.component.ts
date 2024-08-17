import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../Api-Data/api-data.service';
import { ModalService } from '../_modal';
import { Observable, of, Subject, throwError } from 'rxjs';
import { map,debounceTime, distinctUntilChanged, switchMap, catchError, retryWhen, retry } from 'rxjs/operators';
declare var google: any;

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit {
 dropdownSettings:any;
 all_company:any;
 all_year:any;
 selected_all_year:any;
 selected_all_company:any;
 all_posts:any;
 placed_count:any;
 p:any;
 total:any;
 pageSize:any;
 arrayList : any;
 errorMessage: any;
 isLoading: any;
 articlesFetched : any;

  constructor( private dataService: ApiDataService,public modalService:ModalService) {
    this.all_company=["GOOGLE","ADOBE","JUNIPER NETWORKS","MICROSOFT","INTEL","CISCO","HONEYWELL","TCS","INFOSYS","AMAZON"];
    this.all_year=["2021",'2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008','2007','2006','2005','2004','2003','2002'];
    this.p = 1;
    this.total =100;
    this.pageSize=10;
  }

  public articleTitleSearched = new Subject<string>();

    public searchByArticleTitle() {
    this.articleTitleSearched.pipe(
      map((e:any)=>{
        console.log(e.target.value);
        return e.target.value
      }),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(word=>{
        word.trim();
        return this.searchArticle(word);
      }),
      catchError((err)=>{
        console.log(err);
        this.errorMessage = err.message;
        return throwError(err);
      })
    ).subscribe(val=>{
      this.articlesFetched = val;
      console.log(`Articles fetched based on Titlee`)
    })
  }

  // Observing the changes recieved when subject is used

  public searchArticle(word):Observable<any>{
    word = word.trim();
    if(word===""){
      console.log("no word entered");
      return of(null);
    }
    else{
      return this.dataService.getData("/articles/getArticlesByCompanyVerified/"+word).pipe(
        map(response =>{
          console.log(response);
          this.articlesFetched = response;
          this.arrayList = this.articlesFetched.articles;
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
          console.log("Articles fetched based on company Name");
          this.all_posts = this.arrayList;
          console.log(this.arrayList);
        })
      )
    }
  }


  ngOnInit(): void {

  this.searchByArticleTitle();
  this.dropdownSettings  = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
   this.dataService.postData('/get/articles',{page:this.p,limit:this.pageSize}).subscribe(data =>{
     console.log(data);
     this.all_posts = data['data'];
     this.total = data['total'];
   })
   google.charts.load('current', {'packages':['corechart']});


   this.dataService.getData('/pie/stats').subscribe(d=>{
     this.placed_count = d;
      google.charts.setOnLoadCallback(this.initPieGraph());
  
   })




  }

  onStatusSelect(item:any){
    this.getProfileData()
  }

  onStatusAll(item:any){
    this.getProfileData()
  }

  onStatusDeSelect(item:any){
    this.getProfileData()
  }

  onStatusDeSelectAll(item:any){
    this.getProfileData();
    console.log("selected all");

  }

  onChange(page:any){
    this.p=page;
    this.dataService.postData('/get/articles',{page:this.p,limit:this.pageSize}).subscribe(data =>{
      console.log(data);
      this.all_posts = data['data'];
      this.total = data['total'];

    })
  }

  getProfileData(){

  }

  initPieGraph(){
 
    var data = google.visualization.arrayToDataTable([
      ['Status', 'Total'],
      ['Rejected',   this.placed_count['rejected']],
      ['Placed',     this.placed_count['accepted']],

    ]);

    var options = {
      title: 'Placement Stats',
      //is3D: true,
      pieHole: 0.4,
      colors: ['#EC6F19', 'green', '#7D06D3']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);

  }


}
