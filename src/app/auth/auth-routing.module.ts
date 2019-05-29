import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DangNhapAdminComponent } from './dang-nhap-admin/dang-nhap-admin.component';

const routerDangNhapAdmin: Routes = [
  {path: '', component: DangNhapAdminComponent, children: [
    {path: 'login', component: DangNhapAdminComponent}
    // {path: 'admin', component: DangNhapAdminComponent}
  ] }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routerDangNhapAdmin)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
