import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
@Component({
  selector: 'app-faqtwo',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,MatIconModule],
  templateUrl: './faqtwo.component.html',
  styleUrl: './faqtwo.component.css'
})
export class FaqtwoComponent {

}
