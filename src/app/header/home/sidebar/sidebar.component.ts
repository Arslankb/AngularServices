import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private subService:SubscribeService){}

  OnSubscribe(){
    this.subService.OnSubscribeClicked('Quarterly');
  }
}
