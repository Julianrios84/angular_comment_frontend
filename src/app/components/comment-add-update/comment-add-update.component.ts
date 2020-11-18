import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timeStamp } from 'console';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-add-update',
  templateUrl: './comment-add-update.component.html',
  styleUrls: ['./comment-add-update.component.css']
})
export class CommentAddUpdateComponent implements OnInit {

  form: FormGroup;
  id = 0;
  titleAction = 'Add comment';
  action = 'Create';
  loading: boolean;
  comment: Comment;

  constructor(
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private commentService: CommentService,
    private router: Router
  ) {
      this.form = this.formbuilder.group({
        title: ['', Validators.required],
        creator: ['', Validators.required],
        description: ['', Validators.required]
      });

      if (+this.route.snapshot.paramMap.get('id') > 0) {
        this.id = +this.route.snapshot.paramMap.get('id');
      }
    }

  ngOnInit(): void {
    this.isUpdate();
  }

  saveComment(): void{
    if (this.action === 'Create') {
      const comment: Comment = {
        dateCreation: new Date(),
        creator: this.form.get('creator').value,
        title: this.form.get('title').value,
        description: this.form.get('description').value,
      };
      this.commentService.insertComment(comment).subscribe(data => {
        this.router.navigate(['/']);
      });
    } else {
      const comment: Comment = {
        id: this.comment.id,
        dateCreation: this.comment.dateCreation,
        creator: this.form.get('creator').value,
        title: this.form.get('title').value,
        description: this.form.get('description').value,
      };
      this.commentService.updateComment(this.id, comment).subscribe(data => {
        this.router.navigate(['/']);
      });
    }
  }

  isUpdate(): void {
    if (this.id > 0) {
      this.loading = true;
      this.action = 'Update';
      this.titleAction = 'Update comment';
      this.commentService.loadComment(this.id).subscribe(data => {
        this.comment = data;
        this.form.patchValue({
          title: data.title,
          creator: data.creator,
          description: data.description
        });
      });
      this.loading = false;
    }
  }

}
