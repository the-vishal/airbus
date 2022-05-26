import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class CommunicationComponent {
  onSubmit(uname: string, pwd: string) {
    const url = 'http://localhost:8080/authenticate/user';
    const body = '{"username": "' + username + '", "password": "' + password + '"}';
    const headers = new Headers(
        {
            'Content-Type': 'application/json'
        });
    return this.http.post(url, body, {headers: headers});
  }
}