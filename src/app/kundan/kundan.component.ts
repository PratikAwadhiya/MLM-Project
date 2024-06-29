import { Component } from '@angular/core';
import { NavigationComponent } from '../navbar/navigation/navigation.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-kundan',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,RouterLink],
  templateUrl: './kundan.component.html',
  styleUrl: './kundan.component.css'
})
export class KundanComponent {

  constructor(){}
}
