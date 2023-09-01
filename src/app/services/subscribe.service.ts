import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }

  OnSubscribeClicked(type: string){
    alert('Than You for your '+type+' Subscribing. You can access the service now.')
  }
}
