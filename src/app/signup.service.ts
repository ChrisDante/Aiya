import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {
  data: Object;
  loading: Boolean;
  constructor(private http: HttpClient) { }
  makeRequest(req: Object): void {
    this.loading = true;
    this.http.post('/makesignup', JSON.stringify(req))
        .subscribe((res) => {
          this.data = res;
          this.loading = false;
        });
  }
}
