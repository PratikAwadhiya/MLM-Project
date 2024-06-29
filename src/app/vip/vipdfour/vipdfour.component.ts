import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-vipdfour',
  standalone: true,
  imports: [NavigationComponent,MatButtonModule,MatInputModule,MatIconModule],
  templateUrl: './vipdfour.component.html',
  styleUrl: './vipdfour.component.css'
})
export class VipdfourComponent {

}
