import {Routes} from '@angular/router';
import {PostComponent} from "@app/pages/post/post.component";
import {TestsComponent} from "@app/debug/tests/tests.component";
import {LoremComponent} from "@app/components/lorem/lorem.component";
import {Error404Component} from "@app/layouts/error404/error404.component";
import {LayoutMainComponent} from "@app/layouts/main/layout-main.component";
import {DashboardComponent} from "@app/pages/dashboard/dashboard.component";
import {LayoutArticle} from "@app/layouts/article/layout-article.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'debug', component: TestsComponent},
      {path: 'lorem', component: LoremComponent},
      {path: 'post/:id', component: PostComponent},
    ]
  },
  {
    path: 'article',
    component: LayoutArticle,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'debug', component: TestsComponent},
      {path: 'lorem', component: LoremComponent},
      {path: 'post/:id', component: PostComponent},
    ]
  },
  {path: 'error404', component: Error404Component},
  {path: '**', redirectTo: '/error404'},
];
