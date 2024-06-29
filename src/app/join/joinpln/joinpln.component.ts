import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-joinpln',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,MatButtonModule],
  templateUrl: './joinpln.component.html',
  styleUrl: './joinpln.component.css'
})
export class JoinplnComponent {

}
