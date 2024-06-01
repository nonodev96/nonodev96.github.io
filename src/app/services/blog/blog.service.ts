import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import matter from 'front-matter';

import { InfoBlog_t, FileBlog_t, Matter_t } from '@app/types';
import { Post_t } from '@app/models/Posts';
import { Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


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

        const _post = {
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
        console.log({ _post })
        return _post
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
