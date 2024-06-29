import { Component } from '@angular/core';
import { NavigationComponent } from '../navbar/navigation/navigation.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-platinum',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,RouterLink],
  templateUrl: './platinum.component.html',
  styleUrl: './platinum.component.css'
})
export class PlatinumComponent {
  constructor() {}

}
