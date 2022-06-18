import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  backToHome(): void{
    // radi samo sa apsolutnim putanjama
    // this.router.navigateByUrl("home")

    // radi i sa apsolutnim i sa relativnim putanjama
    this.router.navigate(["../../home"], { relativeTo: this.activatedRoute})
  }

  backToUser(): void{
    this.router.navigate(["../../users", 5], {relativeTo: this.activatedRoute})
  }

}
