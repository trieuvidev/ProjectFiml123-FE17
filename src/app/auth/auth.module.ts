import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { DangNhapAdminComponent } from './dang-nhap-admin/dang-nhap-admin.component';
import { MaterialAngularModule } from '../Share/material-angular.module';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthComponent, DangNhapAdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialAngularModule,
    AuthRoutingModule
  ],
  exports: [AuthComponent, DangNhapAdminComponent]
})
export class AuthModule { }
