import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo-shop',
  templateUrl: './logo-shop.component.html',
  styleUrls: ['./logo-shop.component.scss']
})
export class LogoShopComponent implements OnInit {
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
