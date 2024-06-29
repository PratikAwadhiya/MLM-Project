import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NavigationComponent,FooterComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  
})
export class ProductComponent {

}
