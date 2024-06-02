import { Injectable, inject } from '@angular/core';
import type { ActivatedRouteSnapshot, Data } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import type { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private router = inject(Router);
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  private readonly _breadcrumbs$ = new BehaviorSubject<MenuItem[]>([]);
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((/* event */) => {
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs: MenuItem[] = [];
        this.addBreadcrumb(root, [], breadcrumbs);

        this._breadcrumbs$.next(breadcrumbs);
      });
  }

  private addBreadcrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: MenuItem[]
  ) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map((url) => url.path));
      if (route.data[BreadcrumbService.ROUTE_DATA_BREADCRUMB]) {
        const breadcrumb = {
          label: this.getLabel(route.data),
          url: `/${routeUrl.join('/')}`,
          routerLink: `/${routeUrl.join('/')}`
        };
        breadcrumbs.push(breadcrumb);
      }
      if (route.firstChild)
        this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }

  private getLabel(data: Data) {
    return typeof data[BreadcrumbService.ROUTE_DATA_BREADCRUMB] === 'function'
      ? data[BreadcrumbService.ROUTE_DATA_BREADCRUMB](data)
      : data[BreadcrumbService.ROUTE_DATA_BREADCRUMB];
  }
}
