import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { DangKyService } from 'src/app/Services/nguoi-dung/dang-ky.service';
import { Router } from '@angular/router';
import { $ } from 'jquery';
import { DangNhapService } from 'src/app/Services/nguoi-dung/dang-nhap.service';
import { NgForm } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';
import { NguoiDung } from 'src/app/Model/nguoi-dung';
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
  @Output() emitName = new EventEmitter();
  @Output() emitClass = new EventEmitter();
  @Output() emitShowModal = new EventEmitter();
  isShowContent: string;
  isShowModal = 'show';
  nameClass = 'modal-backdrop';
  MaLoaiNguoiDung: 'KhachHang';
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
        $('div').removeClass('modal-backdrop');
        this.dangKyForm.resetForm();
        this.emitClass.emit(this.nameClass);
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
          const userDNKhachHang = JSON.parse(localStorage.getItem('loginUser'));
          if (userDNKhachHang.MaLoaiNguoiDung === 'KhachHang') {
            this.router.navigate(['/home']);
            $('#modalLRForm').modal('hide');
            $('div').removeClass('modal-backdrop');
          }
          $('#modalLRForm').modal('hide');
          this.dangNhapForm.resetForm();
          $('div').removeClass('modal-backdrop');
          console.log(nguoiDung);
          if (localStorage.getItem('loginUser')) {
            this.emitName.emit(this.isShowContent = 'Đăng Xuất');
            this.emitClass.emit(this.nameClass);
            this.emitShowModal.emit(this.isShowModal);
          }
        } else {
          this.emitName.emit(this.isShowContent = 'Đăng Nhập');
          console.log(this.isShowContent);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
