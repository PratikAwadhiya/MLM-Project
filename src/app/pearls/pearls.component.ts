import { Component } from '@angular/core';
import { NavigationComponent } from '../navbar/navigation/navigation.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-pearls',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,RouterLink],
  templateUrl: './pearls.component.html',
  styleUrl: './pearls.component.css'
})
export class PearlsComponent {

  constructor(){}

}
