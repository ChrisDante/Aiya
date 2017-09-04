import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

@Injectable()
export class SignupService {
  data: Object;
  loading: Boolean;
  constructor(private http: Http) { }
  makeRequest(req: Object): void {
    this.loading = true;
    this.http.request('/makesignup', req)
        .subscribe((res) => {
          this.data = res.json();
          this.loading = false;
        });
  }
}
