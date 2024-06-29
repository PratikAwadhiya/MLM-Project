import { Component } from '@angular/core';
import { NavigationComponent } from '../navbar/navigation/navigation.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-diamond',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,RouterLink,RouterModule],
  templateUrl: './diamond.component.html',
  styleUrl: './diamond.component.css'
})
export class DiamondComponent {


  constructor(){}
}
