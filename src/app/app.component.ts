import { Component } from '@angular/core';

interface Route {
  path: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <div class="container">
        <nav class="nav">
          <a
            *ngFor="let route of routes"
            class="nav__link"
            [routerLink]="route.path"
            routerLinkActive="nav__link--active"
            [routerLinkActiveOptions]="{ exact: route.exact }">
            {{ route.name }}
            </a>
        </nav>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routes: Route[] = [
    {
      path: '/',
      name: 'Home',
      exact: true,
    },
    {
      path: '/page-not-exists',
      name: '404',
      exact: false,
    },
    {
      path: '/todo',
      name: 'App',
      exact: true,
    },
  ];
}
