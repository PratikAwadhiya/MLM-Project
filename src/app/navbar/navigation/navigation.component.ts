import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyserviceService } from '../../myservice.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, CommonModule, MatButtonModule, MatDialogModule,RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  selectedCategory: string = 'Best Seller';
  box1Data: {links: string[]; images: string[]; texts: string[]} = {images:[], texts:[],links:[]};
  box2Data: {links:string[]; images: string[]; texts: string[] } = { images: [], texts: [],links:[]};
  
  


  constructor(private myService: MyserviceService, public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.myService.selectedCategory$.subscribe((category: string) => {
      this.selectedCategory = category;
      this.box1Data = this.myService.getBoxData(category, 'box1') || { images: [], texts: [], links: [] };
      this.box2Data = this.myService.getBoxData(category, 'box2') || { images: [], texts: [], links: [] };
      
    });
  }

  onCategoryClick(category: string) {
    this.myService.updateSelectedCategory(category);
  }

  // Dialog Login button
  openDialog() {
    this.dialog.open(DialogBoxComponent);
  }

  //route
  navigateToProduct(route: string) {
    this.router.navigate(['gems'])
  }

//route
onclickImage(route:string){
  this.router.navigate(['']);
}

}
