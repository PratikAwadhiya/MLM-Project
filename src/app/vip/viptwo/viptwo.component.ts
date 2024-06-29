import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-viptwo',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,MatButtonModule],
  templateUrl: './viptwo.component.html',
  styleUrl: './viptwo.component.css'
})
export class ViptwoComponent {

}
