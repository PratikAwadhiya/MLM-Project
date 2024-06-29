import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dashboardImages: string[] = [];

  // You can add a method to fetch and display images for the dashboard
  // For now, it's just a placeholder
  loadDashboardImages(): void {
    this.dashboardImages = [
      'dashboard_image1.jpg',
      'dashboard_image2.jpg',
      'dashboard_image3.jpg'
    ];
  }

  // Call the method when the component is initialized
  ngOnInit(): void {
    this.loadDashboardImages();
  }
}
