import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public linkWhatsApp: String = "https://wa.me/5511970456444";

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToElement($element: string): void {
    this.viewportScroller.scrollToAnchor($element);
  }

}
