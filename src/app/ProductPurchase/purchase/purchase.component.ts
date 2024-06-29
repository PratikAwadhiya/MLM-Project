import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [FooterComponent,NavigationComponent,FaIconComponent,MatButtonModule,MatCheckboxModule,MatIconModule],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {
  faStar = faStar;
  faTag = faTag;
}
