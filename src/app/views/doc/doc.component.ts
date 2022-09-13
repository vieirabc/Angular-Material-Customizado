import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
