import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
@Component({
  selector: 'app-faqfour',
  standalone: true,
  imports: [MatIconModule,NavigationComponent,FooterComponent],
  templateUrl: './faqfour.component.html',
  styleUrl: './faqfour.component.css'
})
export class FaqfourComponent {

}
