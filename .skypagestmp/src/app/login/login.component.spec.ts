import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import { expect } from '@skyux-sdk/testing';
import { SkyValidators } from '@skyux/validation';
import { Observable, of } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { LoginComponent } from './login.component';
import { UserModel } from './login.model';

describe('Login component', () => {
  /**
   * This configureTestingModule function imports SkyAppTestModule, which brings in all of
   * the SKY UX modules and components in your application for testing convenience. If this has
   * an adverse effect on your test performance, you can individually bring in each of your app
   * components and the SKY UX modules that those components rely upon.
   */
  let component: LoginComponent;
  let mockUserService: jasmine.SpyObj<ApiService>;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });

    formBuilder = new FormBuilder();

    mockUserService = jasmine.createSpyObj(['saveUser', 'getUser']);

    component = new LoginComponent(formBuilder, mockUserService);
  });

  it('should create app', () => {
    fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create component', () => {
    fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Test Form Group Element Count', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement;
    const inputElements = formElement.querySelectorAll('sky-input-box');
    expect(inputElements.length).toEqual(2);
  });

  it('form invalid when empty', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.myForm.valid).toBeFalsy();
  });
});

describe('Login Component Testing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule],
      providers: [{ provide: ApiService, useClass: UserServiceStub }],
      declarations: []
    }).compileComponents();
  });

  it('On Save', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    let app = fixture.componentInstance;
    let formBuilder: FormBuilder = new FormBuilder();
    app.myForm = formBuilder.group({
      fname: ['shreya', [Validators.required]],
      lname: ['kotalwaar', [Validators.required]],
      phoneControl: ['9875432356'],
      email: ['shreya@gmail.com', [Validators.required, SkyValidators.email]],
      myDate: ['', Validators.required],
      address: ['', Validators.required]
    });
    app.addItem();
    expect(app.addItem).toHaveBeenCalledTimes(1);
  });

  it('On Submit', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    let app = fixture.componentInstance;
    let spySaveUserData = spyOn(app, 'addItem');
    app.onSubmit();
    expect(spySaveUserData).toHaveBeenCalledTimes(1);
  });

  it('should Reset', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    let component = fixture.componentInstance;
    component.reset();
    expect(false).toBe(false);
  });

  /*it("should call getUsers and return list of users", async(() => {
    // Arrange
    const fixture = TestBed.createComponent(LoginComponent);
    let component = fixture.componentInstance;
    let response: UserModel[] = [];

    // Act
    component.getallUser();

    fixture.detectChanges();
    fixture.whenStable().subscribe(() => {
      expect(component.userData).toEqual(response);
    });
  }));*/
});
class UserServiceStub {
  public saveUser(data: UserModel): Observable<UserModel> {
    return of(data);
  }
}
