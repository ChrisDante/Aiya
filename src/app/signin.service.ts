import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

@Injectable()
export class SigninService {
  data: Object;
  loading: Boolean;
  constructor(private http: Http) { }
  makeRequest(req: Object): void {
    this.loading = true;
    this.http.post('/makesignin', req)
        .subscribe((res) => {
          this.data = res.json();
          this.loading = false;
        });
  }
}
