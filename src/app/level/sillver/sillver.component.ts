import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
@Component({
  selector: 'app-sillver',
  standalone: true,
  imports: [NavigationComponent,FooterComponent],
  templateUrl: './sillver.component.html',
  styleUrl: './sillver.component.css'
})
export class SillverComponent {

}
