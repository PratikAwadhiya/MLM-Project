import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [NavigationComponent,MatIconModule,FooterComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

}
