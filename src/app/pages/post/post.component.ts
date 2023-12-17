import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownComponent} from "ngx-markdown";
import matter from "front-matter";
import {CardComponent} from "@app/components/card/card.component";
import {BlogService} from "@app/services/blog/blog.service";
import {Matter_t, Post_t} from "@app/types";

@Component({
  selector: 'nn-post',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, CardComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  post = signal<Post_t>({
    title: "",
    cover: "",
    chips: [],
    authors: [],
    summary: "",
    content: ""
  });

  constructor(public blogService: BlogService) {

  }


  ngOnInit(): void {
    this.blogService
      .getPost("template.md")
      .subscribe((post) => {
        const {attributes, body} = matter(post) as Matter_t
        this.post.set({
          title: attributes.title,
          authors: attributes.authors,
          cover: attributes.cover,
          chips: attributes.chips,
          summary: attributes.summary,
          content: body
        })
      })
  }


}
