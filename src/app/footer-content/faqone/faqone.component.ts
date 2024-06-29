import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
@Component({
  selector: 'app-faqone',
  standalone: true,
  imports: [MatIconModule,NavigationComponent,FooterComponent],
  templateUrl: './faqone.component.html',
  styleUrl: './faqone.component.css'
})
export class FaqoneComponent {

}
