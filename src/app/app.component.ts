import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navbar/navigation/navigation.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ProductComponent } from "./product/product/product.component";
import { Productpage1Component } from './productpage/productpage1/productpage1.component';
import { DiamondComponent } from './diamond/diamond.component';
import { KundanComponent } from './kundan/kundan.component';
import { PearlsComponent } from './pearls/pearls.component';
import { SilverComponent } from './silver/silver.component';
import { GemsComponent } from './gems/gems.component';
import { PlatinumComponent } from './platinum/platinum.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { SignupDialogBoxComponent } from './signup-dialog-box/signup-dialog-box.component';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import { ForgetDialogComponent } from './forget-dialog/forget-dialog.component';
import { JoinAcComponent } from './join/join-ac/join-ac.component';
import { JoinplnComponent } from './join/joinpln/joinpln.component';
import { JoinpplComponent } from './join/joinppl/joinppl.component';
import { ViponeComponent } from './vip/vipone/vipone.component';
import { ViptwoComponent } from './vip/viptwo/viptwo.component';
import { VipdoneComponent } from './vip/vipdone/vipdone.component';
import { VipdtwoComponent } from './vip/vipdtwo/vipdtwo.component';
import { VipdthriComponent } from './vip/vipdthri/vipdthri.component';
import { VipdfourComponent } from './vip/vipdfour/vipdfour.component';
import { VipfiveComponent } from './vip/vipfive/vipfive.component';
import { BronzeComponent } from './level/bronze/bronze.component';
import { SillverComponent } from "./level/sillver/sillver.component";
import { DiiamondComponent } from "./level/diiamond/diiamond.component";
import { GoldlvlComponent } from "./level/goldlvl/goldlvl.component";
import { PlatiinumComponent } from "./level/platiinum/platiinum.component";
import { PurchaseComponent } from "./ProductPurchase/purchase/purchase.component";
import { PurchasevisitComponent } from './ProductPurchase/purchasevisit/purchasevisit.component';
import { CartComponent } from './ProductPurchase/cart/cart.component';
import { AboutComponent } from './About/about/about.component';
import { AboutusComponent } from './About/aboutus/aboutus.component';
import { HelpcomponentComponent } from './footer-content/helpcomponent/helpcomponent.component';
import { CareersComponent } from './footer-content/careers/careers.component';
import { FaqoneComponent } from './footer-content/faqone/faqone.component';
import { FaqtwoComponent } from './footer-content/faqtwo/faqtwo.component';
import { FaqthreComponent } from './footer-content/faqthre/faqthre.component';
import { FaqfourComponent } from './footer-content/faqfour/faqfour.component';
import { TextdialogComponent } from './EmailorText/textdialog/textdialog.component';
import { VfdialogoneComponent } from './EmailorText/vfdialogone/vfdialogone.component';
import { VfdialogtwoComponent } from './EmailorText/vfdialogtwo/vfdialogtwo.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,
        HomeComponent,
        NavigationComponent,
        FooterComponent,
        ProductComponent,
        Productpage1Component,
        DiamondComponent,
        KundanComponent,
        PearlsComponent,
        SilverComponent,
        GemsComponent,
        PlatinumComponent,
        DialogBoxComponent,
        SignupDialogBoxComponent,
        AdminDialogComponent,
        ForgetDialogComponent,
        VfdialogoneComponent,
        VfdialogtwoComponent,
        TextdialogComponent,
        DashboardComponent,
        BestsellerComponent,
        BlogComponent,
        JoinAcComponent,
        JoinplnComponent,
        JoinpplComponent,
        AboutComponent,
        AboutusComponent,
        ViponeComponent,
        ViptwoComponent,
        VipdoneComponent,
        VipdtwoComponent,
        VipdthriComponent,
        VipdfourComponent,
        VipfiveComponent,
        BronzeComponent,
        SillverComponent,
        DiiamondComponent,
        GoldlvlComponent,
        PlatiinumComponent,
        PurchaseComponent,
        PurchasevisitComponent,
        CartComponent,
        HelpcomponentComponent,
        CareersComponent,
        FaqoneComponent,
        FaqtwoComponent ,
        FaqthreComponent,
        FaqfourComponent,
        RouterOutlet, 
      ]
})
export class AppComponent {
  title = 'MLM-website';
}
