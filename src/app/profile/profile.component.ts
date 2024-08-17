import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ApiDataService } from '../Api-Data/api-data.service';
import { OurAuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
updateForm:FormGroup;
userName:any;
language:any;
mentor:any;
profilePictureUrl:any;
data:any;
batchs:any;
  constructor(private apiDataService: ApiDataService,
    private apiAuth: OurAuthService) { 
    this.profilePictureUrl= apiAuth.getProfileUrl();
    this.language=[
      'C',
      'C++',
      'C#',
      'Java',
      'Python',
      'Javascript (NodeJS)',
      'Other'
    ]
    this.updateForm = new FormGroup({
      name: new FormControl('', { validators: Validators.required  }),
      email: new FormControl({value: '', disabled: true},),
      phone_number: new FormControl('',),
      most_comfortable_coding_language: new FormControl('',),
      linkedin_user_handle: new FormControl('',),
      github_user_handle: new FormControl('',),
      facebook_user_handle: new FormControl('',),
      insta_user_handle: new FormControl('',),
      twitter_user_handle: new FormControl('',),
    })

    this.getUserDetails();

  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.updateForm.value);

    this.apiDataService.postData('/profile/detail/update',this.updateForm.value).subscribe(d=>{
      alert(d['msg']);
      this.getUserDetails();
    },(error)=>{
      // alert(error.error.msg);
      console.log(error['msg']);
    })
  }

  getUserDetails(){
    this.apiDataService.getData('/user/detail').subscribe(d=>{
      console.log(d);
      this.updateForm.patchValue({
        name: d['data'].google.name,
        email: d['data'].google.email,
        phone_number: d['data'].phoneNumber,
        most_comfortable_coding_language: d['data'].most_comfortable_coding_language,
        linkedin_user_handle: d['linkedin_user_handle'],
        github_user_handle: d['github_user_handle'],
        facebook_user_handle: d['facebook_user_handle'],
        insta_user_handle: d['insta_user_handle'],
        twitter_user_handle: d['twitter_user_handle'],
      });
    })
  }

}

