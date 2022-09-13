import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';

const Components = [
  SidenavMenuComponent,
];

@NgModule({
  declarations: [ Components ],
  imports: [ CommonModule ],
  exports: [ Components ]
})
export class TemplateModule { }
