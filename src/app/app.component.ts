import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ServiceListComponent } from './components/service-list/service-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems = [
    { title: 'Ajout Service', route: '/add-service' },
    { title: 'Services', route: '/services' },
    
  ];
}