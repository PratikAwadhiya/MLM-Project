import { Component } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
@Component({
  selector: 'app-joinppl',
  standalone: true,
  imports: [FooterComponent,NavigationComponent],
  templateUrl: './joinppl.component.html',
  styleUrl: './joinppl.component.css'
})
export class JoinpplComponent {

}
