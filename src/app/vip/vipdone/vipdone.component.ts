import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-vipdone',
  standalone: true,
  imports: [NavigationComponent,MatButtonModule,MatIconModule,MatInputModule],
  templateUrl: './vipdone.component.html',
  styleUrl: './vipdone.component.css'
})
export class VipdoneComponent {

}
