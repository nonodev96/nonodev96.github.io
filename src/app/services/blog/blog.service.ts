import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import matter from 'front-matter';

import { InfoBlog_t, FileBlog_t, Matter_t } from '@app/types';
import { Post_t } from '@app/models/Posts';
import { Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { toPost } from '@app/shared/utils';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl_ListArticles = '/assets/blog/list-articles.json';
  private apiUrl_Post = '/assets/blog/';

  constructor(private http: HttpClient,
    private firestore: Firestore) {
  }

  async getListPosts(): Promise<InfoBlog_t> {
    const response = await fetch(this.apiUrl_ListArticles);
    const data: InfoBlog_t = await response.json();
    return data;
  }

  async getPostById(id: number): Promise<string> {
    const listPosts: InfoBlog_t = await this.getListPosts();
    const itemPost: FileBlog_t = listPosts.data.filter((item) => item.id === id)[0]
    return this.getPostByFilename(itemPost.filename)
  }

  async getPostBySlug(slug: string): Promise<string> {
    const listPosts: InfoBlog_t = await this.getListPosts();
    const itemPost: FileBlog_t = listPosts.data.filter((item) => item.slug === slug)[0]
    return this.getPostByFilename(itemPost.filename)
  }

  async getPostByFilename(filename: string): Promise<string> {
    const response = await fetch(this.apiUrl_Post + filename);
    const data: string = await response.text();
    return data;
  }

  async getPostMatterByFilename(filename: string): Promise<Post_t> {
    const post: string = await this.getPostByFilename(filename);
    const { attributes, body } = matter(post) as Matter_t;
    return toPost(attributes, body);
  }

  async getPostMatterById(id: number): Promise<Post_t> {
    const listPosts: InfoBlog_t = await this.getListPosts();
    const itemPost: FileBlog_t = listPosts.data.filter(item => item.id === parseInt(id.toString()))[0]
    const { filename } = itemPost
    return await this.getPostMatterByFilename(filename)
  }

  async getPostMatterBySlug(slug: string): Promise<Post_t> {
    const listPosts: InfoBlog_t = await this.getListPosts();
    const itemPost: FileBlog_t = listPosts.data.filter(item => item.slug === slug)[0]
    const { filename } = itemPost
    return await this.getPostMatterByFilename(filename)
  }



  getAllPosts(): Observable<Post_t[]> {
    const postsRef = collection(this.firestore, 'posts')
    return collectionData(postsRef, { idField: 'refId' }) as Observable<Post_t[]>
  }

  async getPostsByRefId(refId: string): Promise<Post_t> {
    const postsRef = doc(this.firestore, 'posts', refId)
    const docSnap = await getDoc(postsRef)
    return docSnap.data() as Post_t
  }
}
