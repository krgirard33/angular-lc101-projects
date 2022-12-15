import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if(result) {
      this.color='blue';
      this.height=10000;
      this.width=0;
      this.message='Shuttle in flight';
      this.takeOffEnabled = false;
    }
  }

  handleLanding(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color='green';
    this.height=0;
    this.width=0;
    this.message="The shuttle has landed.";
    rocketImage.style.bottom = "0px";
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you wish to Abort?');
    if(result) {
      this.color='red';
      this.height=0;
      this.width=0;
      this.message="Mission aborted.";
      rocketImage.style.bottom = "0px";
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    if(this.height>310000 || this.width>420000 || this.width<10000) {
      this.color = 'orange';
      console.log(this.height, this.width)
    }
    else {
      this.color = 'blue';
    }
    if(direction === 'right'){
      let movement = parseInt(rocketImage.style.left) + 10 +'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    else if(direction === 'left'){
      let movement = parseInt(rocketImage.style.left) - 10 +'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    else if(direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    else if(direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 +'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }    
  }
}
