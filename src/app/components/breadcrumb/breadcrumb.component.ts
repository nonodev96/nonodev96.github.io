import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { BreadcrumbItemClickEvent, BreadcrumbModule } from 'primeng/breadcrumb';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'nn-breadcrumb',
  standalone: true,
  imports: [CommonModule, BreadcrumbModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  home: MenuItem | undefined;
  items: MenuItem[] | undefined;


  constructor(private router: Router, private route: ActivatedRoute) {
  }

  breadcrumbs: { label: string }[] = []

  ngOnInit() {
    this.router
      .events
      .pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      let currentRoute: ActivatedRoute | null = this.route.root
      const url = '';
      do {
        const childrenRoutes: ActivatedRoute[] = currentRoute.children;
        currentRoute = null;
        for (const route of childrenRoutes) {
          const routeSnapshot = route.snapshot;
          url.concat(`/${routeSnapshot.url.map((segment) => segment.path).join('/')}`)
          this.breadcrumbs.push({
            label: '',
          });
          currentRoute = route;
        }
      } while (currentRoute);
    });

    this.items = [
      { label: 'Computer', info: 'ok' },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  onItemClick($event: BreadcrumbItemClickEvent) {
    console.log('click', $event)
  }

}
