import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './layout-home/trang-chu/trang-chu.component';
import { HeaderComponent } from './layout-home/header/header.component';
import { FooterComponent } from './layout-home/footer/footer.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { TrangChiTietComponent } from './layout-home/trang-chi-tiet/trang-chi-tiet.component';
import { SliderComponent } from './layout-home/trang-chu/slider/slider.component';
import { DanhSachPhimComponent } from './layout-home/trang-chu/danh-sach-phim/danh-sach-phim.component';
import { ItemPhimComponent } from './layout-home/trang-chu/danh-sach-phim/item-phim/item-phim.component';
import { LichChieuComponent } from './layout-home/trang-chu/lich-chieu/lich-chieu.component';
import { ThongTinPhimComponent } from './layout-home/trang-chi-tiet/thong-tin-phim/thong-tin-phim.component';
import { DanhGiaPhimComponent } from './layout-home/trang-chi-tiet/danh-gia-phim/danh-gia-phim.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [TrangChuComponent, HeaderComponent, FooterComponent, LayoutHomeComponent, TrangChiTietComponent, SliderComponent, DanhSachPhimComponent, ItemPhimComponent, LichChieuComponent, ThongTinPhimComponent, DanhGiaPhimComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    // tslint:disable-next-line:max-line-length
    TrangChuComponent, HeaderComponent, FooterComponent, LayoutHomeComponent, TrangChiTietComponent, SliderComponent, DanhSachPhimComponent, ItemPhimComponent, LichChieuComponent, ThongTinPhimComponent, DanhGiaPhimComponent
  ]
})
export class HomeModule { }
