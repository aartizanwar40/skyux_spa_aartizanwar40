import {
  Component, OnInit

} from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { UserModel } from './login.model';
import { ApiService } from '../shared/api.service';
import { SkyValidators } from '@skyux/validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public myForm!: FormGroup;
  public userModelObj: UserModel =  new UserModel();
  public userData: any;

  public phoneControl: FormControl;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  public ngOnInit(): void {
    this.phoneControl = new FormControl();
    this.myForm = new FormGroup({
      'phoneControl': this.phoneControl
    });
    this.myForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phoneControl: ['', Validators.required ],
      email: new FormControl('', [Validators.required, SkyValidators.email]),
      myDate: new FormControl(new Date(1999, 10, 5)),
      address: ['', Validators.required]
    });
    this.getallUser();

  }
  public get emailControl(): AbstractControl {
    return this.myForm.get('email');
  }

  public addItem() {
    this.userModelObj.fname = this.myForm.value.fname;
    this.userModelObj.lname = this.myForm.value.lname;
    this.userModelObj.phoneControl = this.myForm.value.phoneControl;
    this.userModelObj.email = this.myForm.value.email;
    this.userModelObj.myDate = this.myForm.value.myDate;
    this.userModelObj.address = this.myForm.value.address;
    console.log(this.userModelObj);
    this.api.postUser(this.userModelObj)
    .subscribe (res => {
      console.log(res);
      alert('User added successfully');
      this.myForm.reset();
      this.getallUser();
    },
      (err) => {
      console.log(err);
      alert('Something went wrong');
    });
    }

  public reset() {
    this.myForm.reset();
  }

  public getallUser() {
    this.api.getUser()
    .subscribe(res => {
      this.userData = res;
    });
  }
}
