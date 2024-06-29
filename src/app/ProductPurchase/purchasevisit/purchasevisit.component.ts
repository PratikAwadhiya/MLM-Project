import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-purchasevisit',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,MatIconModule,MatButtonModule,FaIconComponent,MatMenuModule],
  templateUrl: './purchasevisit.component.html',
  styleUrl: './purchasevisit.component.css'
})
export class PurchasevisitComponent {
  faSearchLocation =faSearchLocation;
}
