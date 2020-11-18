import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAddUpdateComponent } from './comment-add-update.component';

describe('CommentAddUpdateComponent', () => {
  let component: CommentAddUpdateComponent;
  let fixture: ComponentFixture<CommentAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentAddUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
