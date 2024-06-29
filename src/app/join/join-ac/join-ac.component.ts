import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
@Component({
  selector: 'app-join-ac',
  standalone: true,
  imports: [NavigationComponent,FooterComponent],
  templateUrl: './join-ac.component.html',
  styleUrl: './join-ac.component.css'
})
export class JoinAcComponent {

}
