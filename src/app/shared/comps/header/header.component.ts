import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navListOpen: boolean = false;
  @Output() openNav = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  showNav() {
    this.openNav.emit('');
  }
}
