import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bestseller',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './bestseller.component.html',
  styleUrl: './bestseller.component.css'
})
export class BestsellerComponent implements OnInit{

  

  constructor(){}


  ngOnInit(): void {
    
  }

  

}
