import { Component } from '@angular/core';

@Component({
  selector: 'app-export-section',
  templateUrl: './export-section.component.html',
  styleUrls: ['./export-section.component.css']
})
export class ExportSectionComponent {

  Screen1: boolean = true;
  Screen2: boolean = false;
  Screen3: boolean = false;
  selected: boolean = false;      
  exportFile: boolean = true; 
  textType:string = "";
  constructor() { }
  uploadFile(event: any) { }

  inputChange(){
    this.textType = this.textType;
  }
  clickSecond(){
    this.Screen1 = false;
    this.Screen2 = true;
  }
  clickThird(){
    this.Screen2 = false;
    this.Screen3 = true;
  }
}
