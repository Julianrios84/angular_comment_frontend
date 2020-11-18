import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  id: number;
  loading: boolean;
  comment: Comment;

  constructor(private commentService: CommentService, private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadComment();
  }

  loadComment(): void {
    this.loading = true;
    this.commentService.loadComment(this.id).subscribe(data => {
      this.comment = data;
      this.loading = false;
    });
  }

}
