import { Component } from '@angular/core';
import {  NavigationComponent} from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
@Component({
  selector: 'app-diiamond',
  standalone: true,
  imports: [NavigationComponent,FooterComponent],
  templateUrl: './diiamond.component.html',
  styleUrl: './diiamond.component.css'
})
export class DiiamondComponent {

}
