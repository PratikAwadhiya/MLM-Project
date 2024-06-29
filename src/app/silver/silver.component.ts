import { Component } from '@angular/core';
import { NavigationComponent } from '../navbar/navigation/navigation.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-silver',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,RouterLink],
  templateUrl: './silver.component.html',
  styleUrl: './silver.component.css'
})
export class SilverComponent {

}
