import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
@Component({
  selector: 'app-faqthre',
  standalone: true,
  imports: [MatIconModule,NavigationComponent,FooterComponent],
  templateUrl: './faqthre.component.html',
  styleUrl: './faqthre.component.css'
})
export class FaqthreComponent {

}
