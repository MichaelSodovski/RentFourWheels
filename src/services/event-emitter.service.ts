import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

    invokeCarid = new EventEmitter();
   // carID: Subscription;



  constructor() { }

  getCarId(id: any) {
    this.invokeCarid.emit(id);
  }

 
}  
