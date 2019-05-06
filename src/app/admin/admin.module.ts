import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayOutAdminComponent } from './lay-out-admin/lay-out-admin.component';
import { QuanLyNguoiDungComponent } from './lay-out-admin/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './lay-out-admin/quan-ly-phim/quan-ly-phim.component';
import { QuanLyLichChieuComponent } from './lay-out-admin/quan-ly-lich-chieu/quan-ly-lich-chieu.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [LayOutAdminComponent, QuanLyNguoiDungComponent, QuanLyPhimComponent, QuanLyLichChieuComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    LayOutAdminComponent, QuanLyNguoiDungComponent, QuanLyPhimComponent, QuanLyLichChieuComponent
  ]
})
export class AdminModule { }
