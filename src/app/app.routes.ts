import { Routes } from '@angular/router';
import { PostComponent } from "@app/pages/post/post.component";
import { TestsComponent } from "@app/debug/tests/tests.component";

export const routes: Routes = [
  {
    path: 'debug',
    component: TestsComponent,
  },
  {
    path: 'post/:id',
    component: PostComponent,
  }
];
