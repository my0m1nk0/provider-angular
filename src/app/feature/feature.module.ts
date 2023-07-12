import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatureComponent} from "./feature.component";
import {FeaturePageComponent} from "./feature-page/feature-page.component";
import {RootPageComponent} from "./root-page/root-page.component";
import {OtherPageComponent} from "./other-page/other-page.component";
import {FeatureRoutingModule} from "./feature-routing.module";
import {WidgetsModule} from "../widgets/widgets.module";



@NgModule({
  declarations: [
    FeatureComponent,
    FeaturePageComponent,
    RootPageComponent,
    OtherPageComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    WidgetsModule
  ],
  providers:[

  ]
})
export class FeatureModule { }
