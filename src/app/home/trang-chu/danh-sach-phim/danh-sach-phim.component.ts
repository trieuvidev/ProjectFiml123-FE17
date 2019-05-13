import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayDanhSachPhimService } from 'src/app/Services/phim/lay-danh-sach-phim.service';

// import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit, OnDestroy {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  subService: Subscription;
  Subscription: any;
  DSPhim: any = [];

  constructor(private dsPhim: LayDanhSachPhimService) { }


  ngOnInit() {
    console.log(this.dsPhim);
    this.subService = this.dsPhim.LayDanhSachPhim().subscribe((result) => {
      this.DSPhim = result;
    }, (error) => {
      console.log(error);
    });
  }
  ngOnDestroy() {
    this.subService.unsubscribe(); // hủy theo doi bien observable
  }

}
