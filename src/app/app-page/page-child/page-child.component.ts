import { Component } from '@angular/core';
import {ComponentService, Message} from "../../services/my-services";

@Component({
  selector: 'app-page-child',
  templateUrl: './page-child.component.html',

})
export class PageChildComponent {
  constructor(private service:ComponentService) {
  }

  get messageList():Message[]{

    return this.service.getAll();

  }

}
