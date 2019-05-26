import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyLichChieuComponent } from './quan-ly-lich-chieu/quan-ly-lich-chieu.component';
import { AdminRoutingModule } from './admin-routing.module';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { AdminComponent } from './admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { MaterialAngularModule } from '../Share/material-angular.module';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [QuanLyNguoiDungComponent, QuanLyPhimComponent, QuanLyLichChieuComponent, AdminComponent, HeaderAdminComponent, NavbarAdminComponent, ThongKeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialAngularModule
  ],
  exports: [
     QuanLyNguoiDungComponent, QuanLyPhimComponent, QuanLyLichChieuComponent
  ]
})
export class AdminModule { }
