import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myimaage1:string="../../../assets/img/cv/Daniel_Vaskevic_CV.png";

  constructor() { }

  ngOnInit(): void {
  }

}
