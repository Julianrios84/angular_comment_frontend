import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  list: Comment[];
  loading: boolean;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    this.loading = true;
    this.commentService.getListComment().subscribe(data => {
      this.list = data;
      this.loading = false;
    });
  }

  delete(id: number): void {
    this.loading = true;
    this.commentService.deleteComment(id).subscribe(data => {
      this.loadComments();
      this.loading = false;
    });
  }

}
