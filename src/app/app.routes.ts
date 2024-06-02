import type { Data, Routes } from '@angular/router';

import { TestsComponent } from '@app/debug/tests/tests.component';
import { LoremComponent } from '@app/components/lorem/lorem.component';
import { Error404Component } from '@app/layouts/error404/error404.component';
import { LayoutMainComponent } from '@app/layouts/main/layout-main.component';
import { DashboardComponent } from '@app/pages/dashboard/dashboard.component';
import { LayoutArticleComponent } from '@app/layouts/article/layout-article.component';

import { HomeComponent } from '@app/pages/home/home.component';
import { Spline3dTestComponent } from '@app/debug/spline-3d-test/spline-3d-test.component';

import { ListArticlesPage } from '@app/pages/list-articles/list-articles.page';
import { PostPage } from '@app/pages/post/post.page';
import { PomodoroPage } from '@app/pages/pomodoro/pomodoro.page';
import { PostResolverService } from '@app/shared/resolver/post-resolver.service';

export const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: '',
        data: { breadcrumb: 'home' },
        component: HomeComponent
      },
      {
        path: 'pomodoro',
        data: { breadcrumb: 'Pomodoro' },
        component: PomodoroPage
      },
      {
        path: 'dashboard',
        data: { breadcrumb: 'Dashboard' },
        component: DashboardComponent
      },
      {
        path: 'debug',
        data: { breadcrumb: 'debug' },
        component: TestsComponent
      },
      {
        path: 'lorem',
        data: { breadcrumb: 'lorem' },
        component: LoremComponent
      }
    ]
  },
  {
    path: 'article',
    component: LayoutArticleComponent,
    data: { breadcrumb: 'Articles' },
    children: [
      {
        path: '',
        data: { breadcrumb: 'List' },
        component: ListArticlesPage
      },
      {
        path: ':slug',
        data: {
          breadcrumb: (data: Data) => {
            if (data?.['post']) return `Post | ${data['post'].title}`;
            return 'Post';
          }
        },
        resolve: { post: PostResolverService },
        component: PostPage
      }
    ]
  },
  { path: 'splide', component: Spline3dTestComponent },
  { path: 'error404', component: Error404Component },
  { path: '**', redirectTo: '/error404' }
];
