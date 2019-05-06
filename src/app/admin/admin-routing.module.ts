import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayOutAdminComponent } from './lay-out-admin/lay-out-admin.component';
import { LichChieuComponent } from '../home/layout-home/trang-chu/lich-chieu/lich-chieu.component';
import { QuanLyNguoiDungComponent } from './lay-out-admin/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './lay-out-admin/quan-ly-phim/quan-ly-phim.component';
import { QuanLyLichChieuComponent } from './lay-out-admin/quan-ly-lich-chieu/quan-ly-lich-chieu.component';


const routesAdmin: Routes = [
  {path: '', component: LayOutAdminComponent, children: [
    {path: 'admin', component: LayOutAdminComponent},
    {path: 'quan-ly-lich-chieu', component: QuanLyLichChieuComponent},
    {path: 'quan-ly-nguoi-dung', component: QuanLyNguoiDungComponent},
    {path: 'quan-ly-phim', component: QuanLyPhimComponent}
  ]}
];
@NgModule({
  imports: [
    RouterModule.forChild(routesAdmin)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
