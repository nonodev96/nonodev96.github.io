import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { BreadcrumbItemClickEvent, BreadcrumbModule } from 'primeng/breadcrumb';

import { BreadcrumbService } from '@app/services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'nn-breadcrumb',
  standalone: true,
  imports: [CommonModule, BreadcrumbModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs$: Observable<MenuItem[]>;

  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [];

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }

  ngOnInit() {
    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs) => {
      this.items = breadcrumbs
    })
  }

  onItemClick($event: BreadcrumbItemClickEvent) {
    console.log('click', $event)
  }
}
