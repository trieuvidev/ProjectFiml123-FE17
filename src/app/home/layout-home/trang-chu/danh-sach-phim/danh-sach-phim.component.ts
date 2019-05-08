import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DSPhim } from 'src/app/Services/phim/phim';
import { LayDanhSachPhimService } from 'src/app/Services/phim/lay-danh-sach-phim.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit, OnDestroy {


  subService: Subscription;
  Subscription: any;
  DSPhim: any = [];
  // mangPhim: DSPhim [] = [];

  constructor(private dsPhim: LayDanhSachPhimService) { }


  ngOnInit() {
    this.Subscription = this.dsPhim.LayDanhSachPhim().subscribe((ketqua) => {
      console.log(ketqua);
      this.DSPhim = ketqua;
    }, (loi) => {
      console.log(loi);
    });
  }


// tslint:disable-next-line:use-life-cycle-interface
ngOnDestroy() {
  this.subService.unsubscribe(); // hủy theo doi bien observable
}

}
