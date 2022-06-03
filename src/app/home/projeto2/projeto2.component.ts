import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto2',
  templateUrl: './projeto2.component.html',
  styleUrls: ['./projeto2.component.scss']
})
export class Projeto2Component implements OnInit {

  linkArtigo: String = "https://docs.google.com/document/d/1hytrvAoVCx0iRcza2x-kw5wxTQCaWOXyyPAiwERnIuA/edit?usp=sharing";

  constructor() { }

  ngOnInit(): void {
  }

}
