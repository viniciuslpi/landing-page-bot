import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public linkWhatsApp: String = "https://wa.me/5511992906137";
  constructor(private viewportScroller: ViewportScroller) { }

  scrollToElement($element: string): void {
    this.viewportScroller.scrollToAnchor($element);
  }

}


