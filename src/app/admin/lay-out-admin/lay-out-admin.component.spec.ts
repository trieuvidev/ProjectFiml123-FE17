import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayOutAdminComponent } from './lay-out-admin.component';

describe('LayOutAdminComponent', () => {
  let component: LayOutAdminComponent;
  let fixture: ComponentFixture<LayOutAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayOutAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayOutAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
