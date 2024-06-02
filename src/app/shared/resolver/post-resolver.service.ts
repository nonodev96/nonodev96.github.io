import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import type { Post_t } from '@app/models/Posts';
import { BlogService } from '@app/services/blog/blog.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService {
  private route = inject(ActivatedRouteSnapshot)
  private readonly blogService = inject(BlogService)

  async resolve(): Promise<Post_t> {
    const slug = this.route.params['slug'];
    return await this.blogService.getPostMatterBySlug(slug);
  }

}
