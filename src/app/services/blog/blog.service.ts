import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import matter from 'front-matter';

import { InfoBlog_t, FileBlog_t, Post_t, Matter_t } from '@app/types';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl_ListArticles = '/assets/blog/list-articles.json';
  private apiUrl_Post = '/assets/blog/';

  constructor(private http: HttpClient) {
  }

  async getListPosts(): Promise<InfoBlog_t> {
    return fetch(this.apiUrl_ListArticles)
      .then(response => response.json())
      .then((response: InfoBlog_t) => {
        return response;
      })
  }

  async getPostById(id: number): Promise<string> {
    const listPosts: InfoBlog_t = await this.getListPosts();
    const itemPost: FileBlog_t = listPosts.data.filter(item => item.id === id)[0]
    return this.getPostByFilename(itemPost.filename)
  }

  async getPostByFilename(filename: string): Promise<string> {
    return fetch(this.apiUrl_Post + filename)
      .then(response => response.text())
      .then((data: string) => {
        return data
      })
  }


  async getPostMatterById(id: number): Promise<Post_t> {
    const listPosts: InfoBlog_t = await this.getListPosts();
    const itemPost: FileBlog_t = listPosts.data.filter(item => item.id === parseInt(id.toString()))[0]

    return this.getPostByFilename(itemPost.filename)
      .then((post: string) => {
        const { attributes, body } = matter(post) as Matter_t
        return {
          postId: attributes.postId,
          filename: attributes.filename,
          title: attributes.title,
          authors: attributes.authors,
          cover: attributes.cover,
          chips: attributes.chips,
          categories: attributes.categories,
          keywords: attributes.keywords,
          summary: attributes.summary,
          content: body
        }
      })
  }

  async getPostMatterByFilename(filename: string): Promise<Post_t> {
    return this.getPostByFilename(filename)
      .then((post: string) => {
        const { attributes, body } = matter(post) as Matter_t
        return {
          postId: attributes.postId,
          filename: attributes.filename,
          title: attributes.title,
          authors: attributes.authors,
          cover: attributes.cover,
          chips: attributes.chips,
          categories: attributes.categories,
          keywords: attributes.keywords,
          summary: attributes.summary,
          content: body
        }
      })
  }
}
