import { Component, ViewChild } from '@angular/core';
import { AdminHoverCardComponent } from './components/admin-hover-card/admin-hover-card.component';
import { OnserviceService } from './onservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pencilb:boolean=false
  pencilf:boolean=false
  choiceI:boolean=false
  file:boolean=false
  ext:boolean=false
  gap:boolean=false
  hot:boolean=false
  match:boolean=false
  order:boolean=false
  slider:boolean=false
  hide:boolean=false

  title = 'ZTAssessment';
  screen=1;
  @ViewChild(AdminHoverCardComponent) adminPanel!: AdminHoverCardComponent;

  openBurgerMenu() {
    this.adminPanel.open = !this.adminPanel.open;
  }
  constructor(private service5:OnserviceService,
    private service6:OnserviceService,
    private service7:OnserviceService,
    private service8:OnserviceService,
    private service9:OnserviceService,
    private service10:OnserviceService,
    private service11:OnserviceService,
    private service12:OnserviceService,
    private service13:OnserviceService,
    private service14:OnserviceService,
    
    ){

  }
  pencil(){
    this.pencilb=true
    this.service5.subject5.next(this.pencilb)
    this.pencilf=false
    this.service6.subject6.next(this.pencilf)

  }
  ngOnInit(){
    this.service7.subject7.asObservable().subscribe((x:any)=>{
      this.choiceI=x
    })
    this.service8.subject8.asObservable().subscribe((x:any)=>{
      this.ext=x
    })
    this.service9.subject9.asObservable().subscribe((x:any)=>{
      this.file=x
    })
    this.service10.subject10.asObservable().subscribe((x:any)=>{
      this.gap=x
    })
    this.service11.subject11.asObservable().subscribe((x:any)=>{
      this.hot=x
    })
    this.service12.subject12.asObservable().subscribe((x:any)=>{
      this.match=x
    })
    this.service13.subject13.asObservable().subscribe((x:any)=>{
      this.order=x
    })
    this.service14.subject14.asObservable().subscribe((x:any)=>{
      this.slider=x
    })
  }
  hid(){
    this.hide=!this.hide
  }
  
 
}
