import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { BreadcrumbItemClickEvent, BreadcrumbModule } from 'primeng/breadcrumb';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'nn-breadcrumb',
  standalone: true,
  imports: [CommonModule, BreadcrumbModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';

  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [];


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.router
      .events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.items = this.createBreadcrumbs(this.activatedRoute.root)
        console.log('items', this.items);
      });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
    const childrens: ActivatedRoute[] = route.children;
    for (const children of childrens) {
      const routeURL: string = children.snapshot.url.map(segment => segment.path).join('/');
      const label: string = children.snapshot.data[BreadcrumbComponent.ROUTE_DATA_BREADCRUMB]
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }
      breadcrumbs.push({ label, url, routerLink: url });
      return this.createBreadcrumbs(children, url, breadcrumbs);
    }
    return breadcrumbs
  }

  onItemClick($event: BreadcrumbItemClickEvent) {
    console.log('click', $event)
  }

}
