import { Component, OnInit } from '@angular/core';
import { $ } from 'jquery';
declare var $: any;
import { from } from 'rxjs';
@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
