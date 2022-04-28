import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public linkWhatsApp: String = "https://wa.me/5511945206557";

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToElement($element: string): void {
    this.viewportScroller.scrollToAnchor($element);
  }

}
