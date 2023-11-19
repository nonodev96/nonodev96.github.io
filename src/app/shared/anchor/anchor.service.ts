import { LocationStrategy, ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AnchorService {

  constructor(
    private locationStrategy: LocationStrategy,
    private route: ActivatedRoute,
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) { }

  interceptClick(event: Event): void {
    const element = event.target;
    if (!(element instanceof HTMLAnchorElement)) {
      return;
    }
    const href = element.getAttribute('href') || '';
    if (this.isExternalUrl(href) || this.isRouterLink(element)) {
      return;
    }
    this.navigate(href);
    event.preventDefault();
  }

  navigate(url: string, replaceUrl = false): void {
    const urlTree = this.getUrlTree(url);
    this.router.navigated = false;
    void this.router.navigateByUrl(urlTree, { replaceUrl });
  }

  normalizeExternalUrl(url: string): string {
    if (this.isExternalUrl(url)) {
      return url;
    }
    const urlTree = this.getUrlTree(url);
    const serializedUrl = this.router.serializeUrl(urlTree);
    return this.locationStrategy.prepareExternalUrl(serializedUrl);
  }

  scrollToAnchor(): void {
    const url = this.router.parseUrl(this.router.url);
    if (url.fragment) {
      this.navigate(this.router.url, true);
    }
  }
  setOffset(...params: Parameters<ViewportScroller['setOffset']>): void {
    this.viewportScroller.setOffset(...params);
  }

  private getUrlTree(url: string): UrlTree {
    const urlPath = this.stripFragment(url) || this.stripFragment(this.router.url);
    const urlFragment = this.router.parseUrl(url).fragment || undefined;
    return this.router.createUrlTree([urlPath], { relativeTo: this.route, fragment: urlFragment });
  }

  private isExternalUrl(url: string): boolean {
    return /^(?!http(s?):\/\/).+$/.exec(url) == null;
  }

  private isRouterLink(element: HTMLAnchorElement): boolean {
    return element.getAttributeNames().some(n => n.startsWith('_ngcontent'));
  }

  private stripFragment(url: string): string {
    return /[^#]*/.exec(url)![0];
  }
}