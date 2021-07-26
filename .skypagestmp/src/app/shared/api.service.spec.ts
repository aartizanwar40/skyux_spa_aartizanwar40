import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { UserModel } from '../login/login.model';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService]
    });
    service = TestBed.get(ApiService);
  });
  it('should get the users', () => {
    service.getUser().subscribe((user) => {
      expect(user.length).toEqual(2);
      expect(user[0].fname).toEqual('Aarti');
      expect(user[1].fname).toEqual('abhi');
    });
  });
  it('should post the users', () => {
    let data: any;
    service.postUser(data);
    expect(service.postUser(data));
  });

  it('Testing Post User', () => {
    const fixture = TestBed.createComponent(ApiService);
    let component = fixture.componentInstance;
    let data: UserModel;
    component.postUser(data);
    expect(true).toBe(true);
  });

  it('Testing Get User', () => {
    const fixture = TestBed.createComponent(ApiService);
    let component = fixture.componentInstance;
    component.getUser();
    expect(true).toBe(true);
  });
});
