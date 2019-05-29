import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminGuardService } from '../Share/guard/admin-guard';
import { from } from 'rxjs';


const routesAdmin: Routes = [
  {path: '', component: AdminComponent, canActivate: [AdminGuardService], children: [
    {path: 'admin', component: AdminComponent},
    // {path: 'quan-ly-lich-chieu', component: QuanLyLichChieuComponent},
    // {path: 'quan-ly-nguoi-dung', component: QuanLyNguoiDungComponent},
    // {path: 'quan-ly-phim', component: QuanLyPhimComponent},
    // {path: 'thong-ke', component: ThongKeComponent},
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
