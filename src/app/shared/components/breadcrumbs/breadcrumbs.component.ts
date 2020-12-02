import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, distinctUntilChanged } from 'rxjs/operators';
import { IBreadCrumb } from './breadcrumbs.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})

export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs$: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.breadcrumbs$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(event => this.buildBreadCrumb(this.activatedRoute.root)),
    );
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '',
                  breadcrumbs: Array<IBreadCrumb> = []): Array<IBreadCrumb> {

    // If no routeConfig is avalailable we are on the root path
    const newBreadcrumbs = [...breadcrumbs];
    let nextUrl;

    const label = this.isDynamicRoute(route)
      ? localStorage.getItem(route.routeConfig?.data?.params.routeName)
      : route.routeConfig?.data?.breadcrumb;
    if (label) {
      const path = route.routeConfig?.path;
      // In the routeConfig the complete path is not available,
      // so we rebuild it each time
      nextUrl = `${url}${path}/`;
      const breadcrumb = {
        label,
        url: nextUrl,
      };
      newBreadcrumbs.push(breadcrumb);
    }

    if (route.firstChild) {
      // If we are not on our current path yet,
      // there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }

  isDynamicRoute(route): boolean {
    return route.routeConfig?.data?.params?.isDynamicRoute;
  }
}
