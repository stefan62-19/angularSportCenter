import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe( data => {
    //   console.log(data)
    // // })

    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe( data => {
    //   console.log(data)
    // },
    // err => {
    //   console.log(err)
    // })

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: data => {
        console.log(data)
      },
      error: err => {
        console.log(err)
      }
    })

    this.http.get('assets/data/users.json').subscribe({
      next: data => {
        // console.log(data)
        this.users = data
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
