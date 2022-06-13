import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Thủy Tiên';
  public age = 21;

  constructor() { }

  ngOnInit(): void {
  }

  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }

}
