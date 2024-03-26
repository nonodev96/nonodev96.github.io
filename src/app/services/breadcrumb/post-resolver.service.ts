import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Post_t } from '@app/types';
import { BlogService } from '@app/services/blog/blog.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService {

  constructor(private readonly blogService: BlogService) { }

  async resolve(route: ActivatedRouteSnapshot): Promise<Post_t> {
    const id = route.params['id'];
    return await this.blogService.getPostMatterById(id);
  }

}
