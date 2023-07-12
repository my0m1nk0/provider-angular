import { Component } from '@angular/core';
import {ComponentService, Message} from "../services/my-services";

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',

  providers:[
    ComponentService
  ]
})
export class AppPageComponent {
  constructor(private service:ComponentService) {
  }
  addMessage(message:string){
    this.service.add(message);
  }

  get list():Message[]{
    return this.service.getAll()
  }
}
