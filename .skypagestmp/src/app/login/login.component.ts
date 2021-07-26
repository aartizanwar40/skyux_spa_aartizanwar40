import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { SkyValidators } from '@skyux/validation';
import { ApiService } from '../shared/api.service';
import { UserModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public myForm!: FormGroup;
  public userModelObj: UserModel = new UserModel();
  public userData: any;

  public phoneControl: FormControl;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  public ngOnInit(): void {
    this.phoneControl = new FormControl();
    this.myForm = new FormGroup({
      phoneControl: this.phoneControl
    });
    this.myForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phoneControl: ['', Validators.required],
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
    return this.api.postUser(this.userModelObj);
  }
  public onSubmit(): void {
    this.addItem();
  }
  public reset() {
    this.myForm.reset();
  }

  public getallUser() {
    let res = this.userData;
    this.api.getUser();
    return res;
  }
}
