import { Component, Input, OnInit } from '@angular/core';

interface Section {
  id: string;
  name: string;
  html: string;
  section?: Section[];
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() sect: Section;

  constructor() { }

  ngOnInit(): void {
    this.sect.html.replace(/class="code-txt"/g, `code`);
  }

}
