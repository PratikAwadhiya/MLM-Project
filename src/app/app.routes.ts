import {  Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProductComponent } from './product/product/product.component';
import { GemsComponent } from './gems/gems.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { SignupDialogBoxComponent } from './signup-dialog-box/signup-dialog-box.component';
import { Productpage1Component } from './productpage/productpage1/productpage1.component';
import { DiamondComponent } from './diamond/diamond.component';
import { KundanComponent } from './kundan/kundan.component';
import { PearlsComponent } from './pearls/pearls.component';
import { SilverComponent } from './silver/silver.component';
import { PlatinumComponent } from './platinum/platinum.component';




export const routes: Routes = [
    {'path':'',component:HomeComponent},
    {'path':'product',component:ProductComponent},
    {'path':'gems',component:GemsComponent},
    {'path': 'bestSeller', component : BestsellerComponent},
    {'path':'signup',component:SignupDialogBoxComponent},
    {'path':'productpage1',component:Productpage1Component},
    {'path':'diamond',component:DiamondComponent},
    {'path':'kundan',component:KundanComponent},
    {'path':'pearls',component:PearlsComponent},
    {'path':'silver',component:SilverComponent},
    {'path':'platinum',component:PlatinumComponent},
    
   
    
 ];

