import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/components/material/material.module';
import { TemplateModule } from '../shared/components/template/template.module';
import { AboutComponent } from './about/about.component';
import { DocComponent } from './doc/doc.component';
import { HomeComponent } from './home/home.component';
import { ViewsRoutingModule } from './views-routing.module';


@NgModule({
  declarations: [
    AboutComponent,
    DocComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,

    ViewsRoutingModule,
    MaterialModule,
    TemplateModule,
  ],
  exports: [
    AboutComponent,
    HomeComponent
  ]
})
export class ViewsModule { }
