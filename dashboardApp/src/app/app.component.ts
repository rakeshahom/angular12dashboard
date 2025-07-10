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
  isSidebarCollapsed = false;
  isLoginPage = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isLoginPage = event.url === '/login'; // ✅ If on login route
    });
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
