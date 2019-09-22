import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoldStringPipe } from '../../pipes/bold-string-pipe.pipe';
import { TableStructureComponent } from './table-structure.component';

describe('TableStructureComponent', () => {
  let component: TableStructureComponent;
  let fixture: ComponentFixture<TableStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStructureComponent, BoldStringPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
