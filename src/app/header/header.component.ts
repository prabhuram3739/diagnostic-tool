import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
myimage1 = 'assets/images/model-search-white-transparent-64.png';
  constructor() { }

  ngOnInit(): void {
  }

}
