import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navbar/navigation/navigation.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gems',
  standalone: true,
  imports: [NavigationComponent,FooterComponent,RouterLink,CommonModule],
  templateUrl: './gems.component.html',
  styleUrl: './gems.component.css'
})
export class GemsComponent implements OnInit {



  constructor(){}

  ngOnInit(): void {
      
  }

}
