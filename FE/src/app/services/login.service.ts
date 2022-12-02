import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  URL_AUTHCA = environment.url_bases.AUTHCA

  login(user: any) {
    const data = {
      username: user.value.account,
      password: user.value.password,
      grant_type: 'password',
      client_id: environment.client_id,
      client_secret: environment.client_secret,
      scope: ""
    }
    console.log('/oauth/token')
    return this.http.post('/authca/oauth/token', data)
  }
}
