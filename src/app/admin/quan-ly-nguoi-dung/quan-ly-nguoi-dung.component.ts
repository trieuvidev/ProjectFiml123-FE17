import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DangKyService } from 'src/app/Services/nguoi-dung/dang-ky.service';
import { QuanLyNguoiDungService } from 'src/app/Services/nguoi-dung/quan-ly-nguoi-dung.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { $ } from 'jquery';
declare var $: any;
@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.scss']
})
export class QuanLyNguoiDungComponent implements OnInit {
  DanhSachNguoiDung: any = [];
  @ViewChild('themNguoiDungForm') themND: NgForm;
  constructor(private themNguoiDung: DangKyService, private router: Router, private layDSND: QuanLyNguoiDungService) { }
  ngOnInit() {
    this.layDSND.LayDanhSachNguoiDung().subscribe((res) => {
      this.DanhSachNguoiDung = res;
    },
      (err) => {
        console.log(err);
      });
    }
  handelThemNguoiDung(nguoiDung: any) {
        nguoiDung.MaNhom = 'GP09';
        this.themNguoiDung.dangKyNguoiDung(nguoiDung).subscribe((res) => {
          console.log(res);
          this.DanhSachNguoiDung.push(res);
          this.layDSND.LayDanhSachNguoiDung().subscribe((result) => {
            this.DanhSachNguoiDung = result; // pussh xong render
          },
            (err) => {
              console.log(err);
            });
        },
          (err) => {
            console.log(err);
          });
      }
      applyFilter(filterValue: string) {
        this.DanhSachNguoiDung.filter = filterValue.trim().toLowerCase();
      }
}
