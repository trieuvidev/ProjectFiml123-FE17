import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NguoiDung } from '../../Model/nguoi-dung';

@Injectable({
  providedIn: 'root'
})
export class QuanLyNguoiDungService {

  constructor(private http: HttpClient) { }

  public LayDanhSachNguoiDung(): Observable<NguoiDung[]> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09';
    return this.http.get<NguoiDung[]>(url);
  }

  public CapNhatNguoiDung(nguoiDung: NguoiDung): Observable<NguoiDung> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin';
    return this.http.post<NguoiDung>(url, nguoiDung, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  public XoaNguoiDung(nguoiDung: NguoiDung): Observable<{}> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${nguoiDung.TaiKhoan}`;
    return this.http.delete(url);
  }

  public LayDanhSachLoaiNguoiDung(): Observable<any> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung';
    return this.http.get(url);
  }
}
