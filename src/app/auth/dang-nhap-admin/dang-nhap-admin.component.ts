import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DangNhapService } from '../../Services/nguoi-dung/dang-nhap.service';
import { Router } from '@angular/router';
import { HeaderAdminComponent } from 'src/app/admin/header-admin/header-admin.component';

@Component({
  selector: 'app-dang-nhap-admin',
  templateUrl: './dang-nhap-admin.component.html',
  styleUrls: ['./dang-nhap-admin.component.scss']
})
export class DangNhapAdminComponent implements OnInit {
  @ViewChild('dangNhapAdmin') dangNhapAdmin: NgForm;

  constructor(private routes: Router, private dangNhapService: DangNhapService) { }

  ngOnInit() {
  }
  handelDangNhapAdmin(nguoiDung: any) {
    this.dangNhapService.dangNhapNguoiDung(nguoiDung).subscribe(
      (res) => {
        if (typeof res !== 'string') {
          localStorage.setItem('loginUser', JSON.stringify(res));
          this.dangNhapAdmin.resetForm();
          const loginAdmin = JSON.parse(localStorage.getItem('loginUser'));
          console.log(loginAdmin);
          if (loginAdmin.MaLoaiNguoiDung === 'QuanTri') {
            console.log(loginAdmin);
            this.routes.navigate(['/admin']);
          }
          console.log(nguoiDung);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

