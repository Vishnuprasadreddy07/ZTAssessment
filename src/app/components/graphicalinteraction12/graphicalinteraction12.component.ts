import { Component } from '@angular/core';
import { OnserviceService } from '../../onservice.service';
@Component({
  selector: 'app-graphicalinteraction12',
  templateUrl: './graphicalinteraction12.component.html',
  styleUrls: ['./graphicalinteraction12.component.css']
})
export class Graphicalinteraction12Component {
  content:any;
  temp:any;
  arr:any[][][]=[[[]]];//contains all data
  ngOnInit() {
    this.appService.check.asObservable().subscribe(msg => this.content= msg);//nikhil
    }
  constructor(private appService:OnserviceService) { }
  addItem(k1:number,k2:number){
    for (let i = 0; i < this.content.length; i++)if(this.content[i]!=false && this.arr[k1][k2].indexOf(this.content[i])<0)this.arr[k1][k2].push(this.content[i]);
  }
  addScene(k1:number){
      this.arr[k1].push([]);
  }
  addtest(){
    this.arr.push([[]]);
  }
  deletetest(val:number){
    if(this.arr.length==1)return;
    this.arr.splice(val,1);
  }
  deletescene(val:number,index:number){
    if(this.arr[val].length==1)return;
    this.arr[val].splice(index,1);
  }
  deletetext(val:number,index:number,text:number){
    this.arr[val][index].splice(text,1);
  }
  uptext(val:number,index:number,text:number){
    if(text!=0){
      this.temp=this.arr[val][index][text];
      this.arr[val][index][text]=this.arr[val][index][text-1];
      this.arr[val][index][text-1]=this.temp;
    }
  }
  downtext(val:number,index:number,text:number){
    if(text!=this.arr[val][index].length-1){
      this.temp=this.arr[val][index][text];
      this.arr[val][index][text]=this.arr[val][index][text+1];
      this.arr[val][index][text+1]=this.temp;
    }
  }
  upscene(val:number,index:number){
    if(index!=0){
      this.temp=this.arr[val][index];
      this.arr[val][index]=this.arr[val][index-1];
      this.arr[val][index-1]=this.temp;
    }
  }
  downscene(val:number,index:number){
    if(index!=this.arr[val].length-1){
      this.temp=this.arr[val][index];
      this.arr[val][index]=this.arr[val][index+1];
      this.arr[val][index+1]=this.temp;
    }
  }
  uppart(val:number){
    if(val!=0){
      this.temp=this.arr[val];
      this.arr[val]=this.arr[val-1];
      this.arr[val-1]=this.temp;
    }
  }
  downpart(val:number){
    if(val!=this.arr.length-1){
      this.temp=this.arr[val];
      this.arr[val]=this.arr[val+1];
      this.arr[val+1]=this.temp;
    }
  }
}
