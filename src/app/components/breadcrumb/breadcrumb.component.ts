import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from "primeng/api";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from "@angular/router";
import { filter } from "rxjs";

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

  breadcrumbs: Object[] = []

  ngOnInit() {
    this.router
      .events
      .pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      let currentRoute: ActivatedRoute | null = this.route.root
      let url = "";
      console.log(currentRoute)
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach((route) => {
          const routeSnapshot = route.snapshot;
          url += "/" + routeSnapshot.url.map((segment) => segment.path).join("/");
          this.breadcrumbs.push({
            label: '',
          });
          currentRoute = route;
        });
      } while (currentRoute);
    });

    console.log({r: this.breadcrumbs})
    this.items = [
      {label: 'Computer', info: "ok"},
      {label: 'Notebook'},
      {label: 'Accessories'},
      {label: 'Backpacks'},
      {label: 'Item'}
    ];

    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  onItemClick($event: any) {
    console.log("click", $event)
  }

}
