import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
faUserCircle = faUserCircle;
 showMenu = false;
 @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.sidebarToggle.emit();
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  

   logout() {
    localStorage.removeItem('token'); // ✅ Token hatao
    this.router.navigate(['/login']); // ✅ Login page pe bhejo
  }

  
}
