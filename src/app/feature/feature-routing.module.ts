import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RootPageComponent} from "./root-page/root-page.component";
import {FeaturePageComponent} from "./feature-page/feature-page.component";
import {FeatureComponent} from "./feature.component";


const routes: Routes = [
  { path: 'other', component: RootPageComponent },
  { path: 'root', component: RootPageComponent },
  { path: 'page', component: FeaturePageComponent },
  { path: '', component: FeatureComponent },
];
@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers:[]
})
export class FeatureRoutingModule { }
