import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-vipone',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,MatButtonModule],
  templateUrl: './vipone.component.html',
  styleUrl: './vipone.component.css'
})
export class ViponeComponent {

}
