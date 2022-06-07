import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.scss']
})
export class IntegrantesComponent {

  public vini: String   = "/assets/vini.png";
  public gabs: String   = "/assets/gabs.jpg";
  public robert: String = "/assets/robert.jpg";
  public githubIcon: String = "/assets/git.png";
  public linkedinIcon: String = "/assets/linkedin.png"

  constructor() { }

}
