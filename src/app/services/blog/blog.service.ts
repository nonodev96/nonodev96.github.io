import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoBlog_t } from '@app/types';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl_ListArticles = '/assets/blog/list-articles.json';
  private apiUrl_Post = '/assets/blog/';

  constructor(private http: HttpClient) {
  }

  getListPosts(): Observable<InfoBlog_t> {
    return this.http.get<InfoBlog_t>(this.apiUrl_ListArticles);
  }

  getPost(name: string): Observable<string> {
    return this.http.get(this.apiUrl_Post + name, {
      responseType: 'text'
    });
  }
}
