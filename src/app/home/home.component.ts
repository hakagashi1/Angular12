import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Thủy Tiên';
  public age = 21;

  public traiCay = ['Táo', 'Nho', 'Cam', 'Quýt', 'Ổi'];
  public traiCay2 = [
    { ten: 'Táo', gia: 12, haGia: true },
    { ten: 'Nho', gia: -3, haGia: false },
    { ten: 'Cam', gia: 5, haGia: true },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('trai cay = ', this.traiCay2);
  }
}
