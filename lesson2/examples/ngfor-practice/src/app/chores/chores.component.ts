import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title:"Yesterday's Chores", tasks: ['Start LaunchCode prep work', 'Buy groceries', 'Empty dishwasher']},
      {title:"Today's Chores", tasks: ['Load dishwasher', 'Finish LaunchCode prep work','Buy groceries you forgot']},
      {title:"Tomorrow's Chores", tasks: ['Empty dishwasher','Play with LaunchCode practice code','Hardware store']}
      ]
   //todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores","Future Chores"];

   constructor() { }

   ngOnInit() {
   }

}
