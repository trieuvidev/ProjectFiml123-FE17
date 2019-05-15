import { Component, OnInit } from '@angular/core';
import { DangKyService } from 'src/app/Services/nguoi-dung/dang-ky.service';
import { Router } from '@angular/router';
import { $ } from 'jquery';
declare var $: any;

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {
  status = true;
  dangKyForm: any;
  constructor(private dangKyService: DangKyService, private router: Router ) { }

  ngOnInit() { }
  handelDangKy(nguoiDung: any) {
    nguoiDung.MaNhom = 'GP01';
    nguoiDung.MaLoaiNguoiDung = 'KhachHang';
    this.dangKyService.dangKyNguoiDung(nguoiDung)
    .subscribe((result) => {
      console.log(result);
      $('#modalLRForm').modal('hide');      // this.router.navigate(['/home/trang-chu/']);
    },
    (error) => {
      console.log(error);

    });
    console.log(nguoiDung);
  }
  // closeSubmit(value: boolean) {
  //   console.log(value);
  //   this.status = value;
  //   console.log(this.status);
  // }

}
