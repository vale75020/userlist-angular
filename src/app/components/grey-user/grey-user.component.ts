import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grey-user',
  templateUrl: './grey-user.component.html',
  styleUrls: ['./grey-user.component.css']
})
export class GreyUserComponent implements OnInit {
  
  firstName : string;
  lastName : string;
  age: number;
  email: string;
  hobby: hobby;

  constructor() { 
    this.firstName = "John";
    this.lastName = "Smith";
    this.age = 25;
    this.email = "johnsmith@gmail.com";
    this.hobby = {
      hobbyOne: "Basket",
      hobbyTwo: "Books",
      hobbyThree: "Cinema"
    }
  }

  ngOnInit() {}

  onClickInfo() {
    alert('look the console');
    console.log('no more info still')
  }

}

interface hobby {
  hobbyOne: string;
  hobbyTwo: string;
  hobbyThree: string;
}