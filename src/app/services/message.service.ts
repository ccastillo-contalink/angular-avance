import { Injectable } from '@angular/core';
import {Message} from '../model/message';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  notify: Subject<Message>= new Subject<Message>();

  constructor() {

   }

   public notifyAlert(message: Message){
     this.notify.next(message);
   }

}
