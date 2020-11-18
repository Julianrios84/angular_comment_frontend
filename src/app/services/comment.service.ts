import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  URI_APP = 'https://localhost:44394/';
  URI_API = 'api/comment/';

  HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getListComment(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.URI_APP + this.URI_API);
  }

  deleteComment(id: number): Observable<Comment> {
    return this.http.delete<Comment>(this.URI_APP + this.URI_API + id);
  }

  insertComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.URI_APP + this.URI_API, comment, this.HTTP_OPTIONS);
  }

  loadComment(id: number): Observable<Comment> {
    return this.http.get<Comment>(this.URI_APP + this.URI_API + id);
  }

  updateComment(id: number, comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(this.URI_APP + this.URI_API + id, comment, this.HTTP_OPTIONS);
  }
}

