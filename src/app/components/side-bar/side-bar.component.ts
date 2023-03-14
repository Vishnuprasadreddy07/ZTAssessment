import { Component, OnInit } from '@angular/core';
import { OnserviceService } from 'src/app/onservice.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  opened: boolean = false;
  opened_tests: boolean = false;
  expanded:boolean=true
  expanded_tests: boolean = true;
  expandedSideBar: any;
  expandedSideBar_tests: any;
  commonIntrxn: boolean = false;
  inlineIntrxn: boolean = false;
  graphicIntrxn: boolean = false;
  customIntrxn: boolean = false;
  dropp:boolean=false
 

  mnustyle1:boolean=false
  mnustyle2:boolean=false
  mnustyle3:boolean=false
  mnustyle4:boolean=false
 
 
  source:any="assets/sideBarIcons/items-green.png"
  source2:any="assets/sideBarIcons/Tests.png"
  source3:any="assets/sideBarIcons/TestTakers.png"
  source4:any="assets/sideBarIcons/Groups.png"
  source5:any="assets/sideBarIcons/Deliveries.png"
  source6:any="assets/sideBarIcons/Results.png"


  newfolder:boolean=false
  dropDown:boolean=false
  newfolder1:boolean=false
  val!:string
  editItem:boolean=false
  pencilb:boolean=false
  pencilf:boolean=true
  choiceI:boolean=false
  ext:boolean=false
  file:boolean=false
  gap:boolean=false
  hot:boolean=false
  match:boolean=false
  order:boolean=false
  slider:boolean=false
  
  
  
  constructor(private service1:OnserviceService,
    private service2:OnserviceService,
    private service3:OnserviceService,
    private service4:OnserviceService,
    private service5:OnserviceService,
    private service6:OnserviceService,
    private service7:OnserviceService,
    private service8:OnserviceService,
    private service9:OnserviceService,
    private service10:OnserviceService,
    private service11:OnserviceService,
    private service12:OnserviceService,
    private service13:OnserviceService,
    private service14:OnserviceService,
    
    ) {}
    content3: any =  new Array(7); 

  ngOnInit() {
   
    this.service5.subject5.asObservable().subscribe((x:any)=>{
      this.pencilb=x
    })
    this.service6.subject6.asObservable().subscribe((x:any)=>{
      this.pencilf=x
      
    })
 
   
    
  
}

  menu() {
    this.opened = !this.opened;
    //const expanded = document.querySelector('.expanded');
    if (this.opened && (this.source="assets/sideBarIcons/items-green.png")) {
      this.source="assets/sideBarIcons/itemschange.png"
    
      this.expandedSideBar = {
        translate: '95%',
        transitionDuration: '600ms',
      
        // display: 'block',
      };
    } else {
      this.source="assets/sideBarIcons/items-green.png"
      this.expandedSideBar = {
        translate: '-80%',
        transitionDuration: '600ms',
      };
      // setTimeout(() => {
      //   this.expanded = !expanded;
      // }, 800);
    }
   
    

  }
 

  
  tests() {
    this.opened_tests = !this.opened_tests;
    //const expanded = document.querySelector('.expanded');

    if (this.opened_tests && (this.source2="assets/sideBarIcons/Tests.png")) {
      this.source2="assets/sideBarIcons/testschange.png"
  
      this.expandedSideBar_tests = {
        translate: '95%',
        transitionDuration: '600ms',

        // display: 'block',
      };
    } else {
      this.source2="assets/sideBarIcons/Tests.png"
      this.expandedSideBar_tests = {
        translate: '-80%',
        transitionDuration: '600ms',
      };
      // setTimeout(() => {
      //   this.expanded = !expanded;
      // }, 800);
    }
  }
  testtakers(e:any){
    this.mnustyle1=!this.mnustyle1
    if(this.mnustyle1 && (this.source3="assets/sideBarIcons/TestTakers.png") && (e==1)){
      this.source3="assets/sideBarIcons/testtakerschange.png"
      
    }
    else {
   
      this.source3="assets/sideBarIcons/TestTakers.png"
      
    }
    this.mnustyle2= !this.mnustyle2
    if(this.mnustyle2 && (this.source4="assets/sideBarIcons/Groups.png") && (e==2) ){
    
      this.source4="assets/sideBarIcons/groupschange.png"
    
    }
    else{
      this.source4="assets/sideBarIcons/Groups.png"
      
      
    }
  
  }
  groups(){
   
  
  }
  deliveries(){
    this.mnustyle3=!this.mnustyle3
    if(this.mnustyle3 && (this.source5="assets/sideBarIcons/Deliveries.png")){
      this.source5="assets/sideBarIcons/deliverieschange.png"
      
    }
    else{
      this.source5="assets/sideBarIcons/Deliveries.png"
    }
  
  }
  results(){
    this.mnustyle4=!this.mnustyle4
    if(this.mnustyle4 && (this.source6="assets/sideBarIcons/Results.png")){
      this.source6="assets/sideBarIcons/resultschange.png"
     
    }
    else{
      
      this.source6="assets/sideBarIcons/Results.png"
    }
  
  }

  openCommonInteraction() {
    console.log('Hello');
    //const interactions = document.querySelector('#commonInteraction');
    // const childs = document.createElement('p');
    // childs.innerText = 'Hello';
    // interactions?.appendChild(childs);

    this.commonIntrxn = !this.commonIntrxn;
    this.inlineIntrxn = false;
    this.graphicIntrxn = false;
    this.customIntrxn = false;
  }
  newclass(){
    this.newfolder=true
    this.service1.subject1.next(this.newfolder)
    this.newfolder1=true

  }
  delet(){
    this.newfolder=false
    this.service2.subject2.next(this.newfolder)
    this.newfolder1=false

  }
  drop(){
    this.dropp=!this.dropp

  }
  dropdow(){
    this.dropDown=!this.dropDown
    this.val="Choclate factory"
   
  }
  folderitem(){
   this.editItem=!this.editItem
    this.service4.subject4.next(this.editItem)
    this.service3.subject3.next(this.val)
  }
  choice(){
    this.choiceI=true
    this.service7.subject7.next(this.choiceI)
    this.file=false
    this.service9.subject9.next(this.file)
    this.ext=false
    this.service8.subject8.next(this.ext)
    this.gap=false
    this.service10.subject10.next(this.gap)
    this.hot=false
    this.service11.subject11.next(this.hot)
    this.match=false
    this.service12.subject12.next(this.match)
    this.order=false
    this.service13.subject13.next(this.order)
    this.slider=false
    this.service14.subject14.next(this.slider)

  }
  external(){
    this.ext=true
    this.service8.subject8.next(this.ext)
    this.choiceI=false
    this.service7.subject7.next(this.choiceI)
    this.file=false
    this.service9.subject9.next(this.file)
    this.gap=false
    this.service10.subject10.next(this.gap)
    this.hot=false
    this.service11.subject11.next(this.hot)
    this.match=false
    this.service12.subject12.next(this.match)
    this.order=false
    this.service13.subject13.next(this.order)
    this.slider=false
    this.service14.subject14.next(this.slider)
  }
  fileupload(){
    this.file=true
    this.service9.subject9.next(this.file)
    this.ext=false
    this.service8.subject8.next(this.ext)
    this.choiceI=false
    this.service7.subject7.next(this.choiceI)
    this.gap=false
    this.service10.subject10.next(this.gap)
    this.hot=false
    this.service11.subject11.next(this.hot)
    this.match=false
    this.service12.subject12.next(this.match)
    this.order=false
    this.service13.subject13.next(this.order)
    this.slider=false
    this.service14.subject14.next(this.slider)
    
  }
  gapMatch(){
    this.gap=true
    this.service10.subject10.next(this.gap)
    this.file=false
    this.service9.subject9.next(this.file)
    this.ext=false
    this.service8.subject8.next(this.ext)
    this.choiceI=false
    this.service7.subject7.next(this.choiceI)
    this.hot=false
    this.service11.subject11.next(this.hot)
    this.match=false
    this.service12.subject12.next(this.match)
    this.order=false
    this.service13.subject13.next(this.order)
    this.slider=false
    this.service14.subject14.next(this.slider)

  }
  hottext(){
    this.hot=true
    this.service11.subject11.next(this.hot)
    this.gap=false
    this.service10.subject10.next(this.gap)
    this.file=false
    this.service9.subject9.next(this.file)
    this.ext=false
    this.service8.subject8.next(this.ext)
    this.choiceI=false
    this.service7.subject7.next(this.choiceI)
    this.match=false
    this.service12.subject12.next(this.match)
    this.order=false
    this.service13.subject13.next(this.order)
    this.slider=false
    this.service14.subject14.next(this.slider)
  }
  matchint(){
    this.match=true
    this.service12.subject12.next(this.match)
    this.hot=false
    this.service11.subject11.next(this.hot)
    this.gap=false
    this.service10.subject10.next(this.gap)
    this.file=false
    this.service9.subject9.next(this.file)
    this.ext=false
    this.service8.subject8.next(this.ext)
    this.choiceI=false
    this.service7.subject7.next(this.choiceI)
    this.order=false
    this.service13.subject13.next(this.order)
    this.slider=false
    this.service14.subject14.next(this.slider)
    
  }
  orderint(){
    this.order=true
    this.service13.subject13.next(this.order)
    this.match=false
    this.service12.subject12.next(this.match)
    this.hot=false
    this.service11.subject11.next(this.hot)
    this.gap=false
    this.service10.subject10.next(this.gap)
    this.file=false
    this.service9.subject9.next(this.file)
    this.ext=false
    this.service8.subject8.next(this.ext)
    this.choiceI=false
    this.service7.subject7.next(this.choiceI)
    this.slider=false
    this.service14.subject14.next(this.slider)
  }
  sliderint(){
    this.slider=true
    this.service14.subject14.next(this.slider)
    this.order=false
    this.service13.subject13.next(this.order)
    this.match=false
    this.service12.subject12.next(this.match)
    this.hot=false
    this.service11.subject11.next(this.hot)
    this.gap=false
    this.service10.subject10.next(this.gap)
    this.file=false
    this.service9.subject9.next(this.file)
    this.ext=false
    this.service8.subject8.next(this.ext)
    this.choiceI=false
    this.service7.subject7.next(this.choiceI)
  }
  update(val:number,text=""){//nikhil
    console.log(this.content3);
      if(this.content3[val]==false)this.content3[val]=text;
      else this.content3[val]=false
      this.service1.check.next(this.content3);
   }
}
