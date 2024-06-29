import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-helpcomponent',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,MatMenuModule,MatButtonModule,MatIconModule],
  templateUrl: './helpcomponent.component.html',
  styleUrl: './helpcomponent.component.css'
})
export class HelpcomponentComponent {

}
