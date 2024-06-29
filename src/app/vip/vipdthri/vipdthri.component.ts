import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-vipdthri',
  standalone: true,
  imports: [NavigationComponent,MatButtonModule,MatInputModule,MatIconModule],
  templateUrl: './vipdthri.component.html',
  styleUrl: './vipdthri.component.css'
})
export class VipdthriComponent {

}
