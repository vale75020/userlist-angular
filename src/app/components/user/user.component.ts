import { Component, OnInit } from "@angular/core";
import { DonneesService } from '../../services/donnees.service';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  hobby: hobby;

  constructor(private donnees: DonneesService) {
    this.firstName = "John";
    this.lastName = "Doe";
    this.age = 25;
    this.email = "johndoe@gmail.com";
    this.hobby = {
      hobbyOne: "Basket",
      hobbyTwo: "Books",
      hobbyThree: "Cinema"
    };
  }

  ngOnInit() {}

  onClickInfo() {
    alert("no more informations still");
  }
}

interface hobby {
  hobbyOne: string;
  hobbyTwo: string;
  hobbyThree: string;
}
