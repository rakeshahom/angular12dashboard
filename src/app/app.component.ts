import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // ✅ Required imports
import { filter } from 'rxjs/operators'; // ✅ Optional for cleaner subscription

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboardApp';
   isLoginPage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url === '/login';
      }
    });
  }

  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
