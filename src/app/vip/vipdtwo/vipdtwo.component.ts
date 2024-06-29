import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-vipdtwo',
  standalone: true,
  imports: [NavigationComponent,MatButtonModule,MatInputModule,MatIconModule,MatTableModule],
  templateUrl: './vipdtwo.component.html',
  styleUrl: './vipdtwo.component.css'
})
export class VipdtwoComponent {

}
