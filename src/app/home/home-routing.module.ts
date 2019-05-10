import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './trang-chu/danh-sach-phim/danh-sach-phim.component';
import { LichChieuComponent } from './trang-chu/lich-chieu/lich-chieu.component';
import { HomeComponent } from './home.component';
import { TrangChiTietComponent } from './trang-chi-tiet/trang-chi-tiet.component';

const routesHome: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: TrangChuComponent },
      {
        path: 'trang-chu', component: TrangChuComponent, children: [
        ]
      },
      { path: 'chi-tiet', component: TrangChiTietComponent },
      { path: 'lich-chieu', component: LichChieuComponent },
      { path: 'danh-sach-phim', component: DanhSachPhimComponent }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routesHome)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }

// Nhan dep trai
