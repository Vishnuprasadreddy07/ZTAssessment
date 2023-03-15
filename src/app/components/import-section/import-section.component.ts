import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-import-section',
  templateUrl: './import-section.component.html',
  styleUrls: ['./import-section.component.css']
})
export class ImportSectionComponent {

  fileUpload = "";
  filesAdd = "";
  selected: boolean = false;
  exportFile: boolean = false;
  icons: boolean = false;

  Screen1: boolean = true;
  Screen2: boolean = false;
  Screen3: boolean = false;
  Screen4: boolean = false;
  Screen5: boolean = false;

  uploadFile(event: any) {
    this.fileUpload = event.target.files[0].name;
    this.icons = true;
    this.Screen1 = false;
    this.Screen2 = true;
    this.exportFile = true;
  }
  // screen 4 and 5
  uploadedFile(event: any) {
    this.filesAdd = event.target.files[0].name;
    this.Screen4 = false;
    this.Screen5 = true;
  }
  secondShow() {
    this.Screen2 = false;
    this.Screen3 = true;
  }
  importForth(){
    this.Screen3 = false;
    this.Screen4 = true;
  }
}
