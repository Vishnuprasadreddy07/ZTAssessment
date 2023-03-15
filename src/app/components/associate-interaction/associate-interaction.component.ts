import { Component } from '@angular/core';

@Component({
  selector: 'app-associate-interaction',
  templateUrl: './associate-interaction.component.html',
  styleUrls: ['./associate-interaction.component.css']
})
export class AssociateInteractionComponent {
  savebtn: boolean = true;
  savebtn1: boolean = false;
  Condition1: boolean = true;
  autosave: boolean = true;
  bottomSymbol: boolean = true;
  delete1: boolean = true;
  delete2: boolean = true;
  delete3: boolean = true;
  choicebox: boolean = true;
  delete4: boolean = false;
  Condition2: boolean = false;
  Condition3: boolean = false;
  choice1: boolean = true;
  choice2: boolean = true;
  choice3: boolean = true;
  choice4: boolean = false;
  styleOne: boolean = false;
  styleTwo: boolean = false;
  styleThree: boolean = false;
  styleFour: boolean = false;
  styleFive: boolean = false;
  choices = [{
    selected: true,
    name: "choice1",
    id: 1
  }, {
    selected: false,
    name: "choice2",
    id: 2
  }];

  screen2() {
    this.Condition1 = false;
    this.autosave = false;
    this.delete1 = false;
    this.delete2 = false;
    this.delete3 = false;
    this.bottomSymbol = false;
    this.Condition2 = true;
    this.savebtn = false;
    this.savebtn1 = true;
  }

  screen3() {
    this.Condition2 = false;
    this.Condition3 = true;
    this.savebtn = false;
    this.savebtn1 = true;
  }

  invisiblebox() {
    this.Condition2 = false;
  }

  deleteicon1() {
    this.delete1 = false;
    this.choice1 = false;
  }

  deleteicon2() {
    this.delete2 = false;
    this.choice2 = false;
  }

  deleteicon3() {
    this.delete3 = false;
    this.choice3 = false;
  }

  deleteicon4() {
    this.delete4 = false;
    this.choice4 = false;
  }

  dismiss() {
    this.bottomSymbol = false;
  }

  dismissbox() {
    this.Condition1 = false;
    this.autosave = false;
  }

  addChoice() {
    let last: any = this.choices[this.choices.length - 1];
    if (last) {
      if (last.id <= 3) {
        this.choices.push({
          selected: false,
          name: "choice" + (last.id + 1),
          id: last.id + 1
        })
      }
    }
    else
    {
      this.choices.push({
        selected: true,
        name: "choice1",
        id: 1
      })
    }
  } 

  boldText() {
    this.styleOne = true;
  }

  italicText() {
    this.styleTwo = true;
    this.styleOne = false;
  }

  underlineText() {
    this.styleThree = true;
    this.styleTwo = false;
    this.styleOne = false;
  }

  Dash1() {
    this.styleFour = true;
    this.styleThree = false;
    this.styleTwo = false;
    this.styleOne = false;
  }

  Dash2() {
    this.styleFive = true;
    this.styleFour = false;
    this.styleThree = false;
    this.styleTwo = false;
    this.styleOne = false;
  }

  deleteChoice(id: any) {
    this.choices = this.choices.filter(item => item.id !== id)
  }

  radioChecked(id:any){
    this.choices.forEach( element => {
      if(element.id != id){
        element.selected = false;
      } else {
        element.selected = true;
      }
    });
  }
}
