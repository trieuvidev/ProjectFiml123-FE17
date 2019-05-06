import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './layout-home/trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './layout-home/trang-chu/danh-sach-phim/danh-sach-phim.component';
import { LichChieuComponent } from './layout-home/trang-chu/lich-chieu/lich-chieu.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';

const routesHome: Routes = [
  {path: '', component: LayoutHomeComponent, children: [
    {path: '', component: TrangChuComponent},
    {path: 'trang-chu', component: TrangChuComponent},
    {path: 'danh-sach-phim', component: DanhSachPhimComponent},
    {path: 'lich-chieu', component: LichChieuComponent},
  ]}
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
