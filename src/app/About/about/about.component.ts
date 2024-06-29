import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavigationComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
