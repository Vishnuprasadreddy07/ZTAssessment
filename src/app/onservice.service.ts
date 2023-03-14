import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnserviceService {
val!:any
  constructor() { }

  public subject1=new BehaviorSubject<Boolean>(false)
  public subject2=new BehaviorSubject<Boolean>(false)
  public subject3=new BehaviorSubject<any>(this.val)
  public subject4=new BehaviorSubject<Boolean>(false)
  public subject5=new BehaviorSubject<Boolean>(false)
  public subject6=new BehaviorSubject<Boolean>(true)

  public subject7=new BehaviorSubject<Boolean>(false)
  public subject8=new BehaviorSubject<Boolean>(false)
  public subject9=new BehaviorSubject<Boolean>(false)
  public subject10=new BehaviorSubject<Boolean>(false)
  public subject11=new BehaviorSubject<Boolean>(false)
  public subject12=new BehaviorSubject<Boolean>(false)
  public subject13=new BehaviorSubject<Boolean>(false)
  public subject14=new BehaviorSubject<Boolean>(false)
  public check=new BehaviorSubject<any>([])
}
