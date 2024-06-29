import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
@Component({
  selector: 'app-bronze',
  standalone: true,
  imports: [NavigationComponent,FooterComponent],
  templateUrl: './bronze.component.html',
  styleUrl: './bronze.component.css'
})
export class BronzeComponent {

}
