import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
    // Yaha logout ka logic daalo, jaise localStorage.clear() ya navigate karna
    console.log('Logging out...');
  }
  
}
