import { Component } from '@angular/core';
import {  NavigationComponent} from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
@Component({
  selector: 'app-goldlvl',
  standalone: true,
  imports: [NavigationComponent,FooterComponent],
  templateUrl: './goldlvl.component.html',
  styleUrl: './goldlvl.component.css'
})
export class GoldlvlComponent {

}
