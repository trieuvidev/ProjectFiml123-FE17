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
  isShowName: string;
  isClass: string;
  isShow: string;
  dangXuat() {
    if (localStorage.getItem('loginUser')) {
      this.isShowName = 'Đăng Xuất';
    }
    localStorage.removeItem('loginUser');
    $('div').removeClass('isClass');
    this.router.navigate(['/home']);
    setTimeout(() => { $('#modalLRForm').modal(this.isShow); }, 400);
    console.log(this.isShow);
  }
  nameParent(name) {
    this.isShowName = name;
  }
  removeModal(classModal): any {
    console.log(classModal);
    setTimeout(() => {
      $('div').removeClass(classModal); if (localStorage.getItem('loginUser')) {
        this.isShowName = 'Đăng Xuất';
      } else {
        this.isShowName = 'Đăng Nhập';
      }
    }, 2000);

  }

  showModal(show) {
    this.isShow = show;
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
