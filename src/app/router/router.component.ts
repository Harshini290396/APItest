import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  // constructor() { }
  constructor(private router: Router) {}

  // tslint:disable-next-line:typedef
  gotoHome(){
    this.router.navigate(['/first']);  // define your component where you want to go
  }
  ngOnInit(): void {
  }

}
