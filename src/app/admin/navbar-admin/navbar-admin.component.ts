import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {
  menuAdminComponent = 'ThongKe';
  constructor() { }
  chonMenu(val) {
    this.menuAdminComponent = val;
  }

  ngOnInit() {
  }

}
