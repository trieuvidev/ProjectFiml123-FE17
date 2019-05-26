import { Component, OnInit, ViewChild } from '@angular/core';
import { DangNhapComponent } from '../trang-chu/dang-nhap/dang-nhap.component';
import { Router } from '@angular/router';
import { $ } from 'jquery';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ViewChild(DangNhapComponent) DNCom: DangNhapComponent;
  constructor(private router: Router) { }
  isShowName =  'Đăng Nhập';
  dangXuat() {
    localStorage.removeItem('loginUser');
    this.isShowName = 'Đăng Xuất';
    // $('[class*=\'modal-backdrop\']').css('display', 'none');
    // $('[class*=\'show\']').css('display', 'none');
    // $('[class*=\'fade\']').css('display', 'none');
    // $('div').removeClass('modal-backdrop');
    // $('#modalLRForm').modal('hide');
    // $('div').removeClass('fade');
    // this.router.navigate(['/home/trang-chu/']);
  }
  ngOnInit() {
    if (localStorage.getItem('loginUser')) {
      this.isShowName = 'Đăng Xuất';
    } else {
      this.isShowName = 'Đăng Nhập';
      return true;
    }
  }

}
