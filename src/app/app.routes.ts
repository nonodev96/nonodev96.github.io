import { Routes } from '@angular/router';
import { PostComponent } from "@app/pages/post/post.component";
import { TestsComponent } from "@app/debug/tests/tests.component";
import { LoremComponent } from "@app/components/lorem/lorem.component";
import { Error404Component } from "@app/components/error404/error404.component";

export const routes: Routes = [
  {
    path: 'debug',
    component: TestsComponent,
  },
  {
    path: 'lorem',
    component: LoremComponent,
  },
  {
    path: 'post/:id',
    component: PostComponent,
  },
  {
    path: '404',
    component: Error404Component,
  }
];
