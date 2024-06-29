import { Component } from '@angular/core';
import {  NavigationComponent} from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
@Component({
  selector: 'app-platiinum',
  standalone: true,
  imports: [NavigationComponent,FooterComponent],
  templateUrl: './platiinum.component.html',
  styleUrl: './platiinum.component.css'
})
export class PlatiinumComponent {

}
