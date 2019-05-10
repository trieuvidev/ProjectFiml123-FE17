import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrangChiTietComponent } from './trang-chi-tiet/trang-chi-tiet.component';
import { SliderComponent } from './trang-chu/slider/slider.component';
import { DanhSachPhimComponent } from './trang-chu/danh-sach-phim/danh-sach-phim.component';
import { ItemPhimComponent } from './trang-chu/danh-sach-phim/item-phim/item-phim.component';
import { LichChieuComponent } from './trang-chu/lich-chieu/lich-chieu.component';
import { ThongTinPhimComponent } from './trang-chi-tiet/thong-tin-phim/thong-tin-phim.component';
import { DanhGiaPhimComponent } from './trang-chi-tiet/danh-gia-phim/danh-gia-phim.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialAngularModule } from '../Share/material-angular.module';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [TrangChuComponent, HeaderComponent, FooterComponent, TrangChiTietComponent, SliderComponent, DanhSachPhimComponent, ItemPhimComponent, LichChieuComponent, ThongTinPhimComponent, DanhGiaPhimComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialAngularModule,
    FormsModule
  ],
  exports: [
    // tslint:disable-next-line:max-line-length
    TrangChuComponent, HeaderComponent, FooterComponent, TrangChiTietComponent, SliderComponent, DanhSachPhimComponent, ItemPhimComponent, LichChieuComponent, ThongTinPhimComponent, DanhGiaPhimComponent
  ]
})
export class HomeModule { }
