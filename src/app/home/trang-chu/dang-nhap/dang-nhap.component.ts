import { Component, OnInit, ViewChild } from '@angular/core';
import { DangKyService } from 'src/app/Services/nguoi-dung/dang-ky.service';
import { Router } from '@angular/router';
import { $ } from 'jquery';
import { DangNhapService } from 'src/app/Services/nguoi-dung/dang-nhap.service';
import { NgForm } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';
declare var $: any;

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {
  @ViewChild('dangNhapForm') dangNhapForm: NgForm;
  @ViewChild('dangKyForm') dangKyForm: NgForm;
  @ViewChild(HeaderComponent) Header: HeaderComponent;
  isShowContent: string;
  constructor(private dangKyService: DangKyService, private router: Router, private dangNhapService: DangNhapService) { }
  ngOnInit() { }
  handelDangKy(nguoiDung: any) {
    nguoiDung.MaNhom = 'GP01';
    nguoiDung.MaLoaiNguoiDung = 'KhachHang';
    this.dangKyService.dangKyNguoiDung(nguoiDung)
      .subscribe((result) => {
        console.log(result);
        this.router.navigate(['/home']);
        $('#modalLRForm').modal('hide');
        this.dangKyForm.resetForm();
        $('div').removeClass('modal-backdrop');
      },
        (error) => {
          console.log(error);

        });
    console.log(nguoiDung);
  }

  handleDangNhap(nguoiDung: any) {
    this.dangNhapService.dangNhapNguoiDung(nguoiDung).subscribe(
      (res) => {
        if (typeof res !== 'string') {
          localStorage.setItem('loginUser', JSON.stringify(res));
          this.router.navigate(['/home']);
          $('#modalLRForm').modal('hide');
          this.dangNhapForm.resetForm();
          $('div').removeClass('modal-backdrop');
          console.log(nguoiDung);
          this.isShowContent = 'Đăng Xuất';
          // $('[class*=\'show\']').css('display', 'block');
          // console.log(this.Header.isShowName);
        } else {
          this.isShowContent = 'Đăng Nhập';
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
