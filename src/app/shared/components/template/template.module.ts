import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleComponent } from './article/article.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';

const Components = [
  ArticleComponent,
  SidenavMenuComponent,
];

@NgModule({
  declarations: [ Components ],
  imports: [ CommonModule ],
  exports: [ Components ]
})
export class TemplateModule { }
