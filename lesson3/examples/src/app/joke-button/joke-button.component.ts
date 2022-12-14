import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-joke-button",
  templateUrl: "./joke-button.component.html",
  styleUrls: ["./joke-button.component.css"],
})
export class JokeButtonComponent implements OnInit {
  location = "center"; // sets & holds location
  specialFactor: boolean = false;

  constructor() {}

  ngOnInit() {}

  shiftLocation(oldLocation: string) {
    while (this.location === oldLocation) {
      this.location = ["left", "right", "center"][
        Math.floor(Math.random() * 3)
      ];
    }
    return this.location;
  }
}
