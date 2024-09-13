import { ComponentFixture, TestBed } from '@angular/core/testing';
import { question1 } from './question1.component';

describe('Question1Component.TsComponent', () => {
  let component: question1;
  let fixture: ComponentFixture<question1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [question1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(question1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
