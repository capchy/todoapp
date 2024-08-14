import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodobarComponent } from './todobar.component';

describe('TodobarComponent', () => {
  let component: TodobarComponent;
  let fixture: ComponentFixture<TodobarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodobarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
