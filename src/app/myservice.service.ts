import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private categoryData = new Map<string, { [key: string]: { images: string[]; texts: string[]; links:string[] } }>();

  private selectedCategorySubject =  new BehaviorSubject<string>('Best Seller');
  selectedCategory$ = this.selectedCategorySubject.asObservable();
  

   


  constructor() {
    this.categoryData.set('Best Seller',{
      box1:{
        images:[
          'assets/img/a1.png',
          'assets/img/coin.jpg',
          'assets/img/e15.png',
          'assets/img/r5.jpg',
        ],
        texts:[
          'Earrings',
          'Coins',
          'Pendants',
          'Gold Earrings',
        ],
        links:['/','/','/','/'],   //here,write to path name for routing '/gems' 
      },

      box2:{
        images: [
          'assets/img/r5.jpg',
          'assets/img/g5.jpg',
          'assets/img/g1.jpg',
          'assets/img/gemstone.png',
        ],
        texts: [
          'Best seller',
          'Silver Jewellery',
          'Gold Jewellery',
          'Gems Stones',
        ],
        links:['/','/','/','/'],
      }

    });

    this.categoryData.set('Gems',{
     box1:{
       images: [
         'assets/img/gring.jpg',
         'assets/img/gemspendants.jpg',
         'assets/img/gemsearrings.png',
         'assets/img/gemsnacklace.jpg',
       ],
       texts: [
         ' Rings',
         ' Necklace',
         ' Earrings',
         ' Pendants',
       ],
       links: ['/','/','/','/']
     }
    });

    this.categoryData.set('Earrings',{
      box1:{
        images: [
          'assets/img/goldearrings.jpg',
         'assets/img/silverearrings.jpg',
         'assets/img/platinumearrings.jpg',
         'assets/img/diamondearrings.jpg',
        ],
        texts: [
          ' Gold Earrings',
         ' Silver Earrings',
         'Platinum Earrings',
         ' Diamond Earrings',
        ],
        links: ['/','/','/','/']
      }
    });

    this.categoryData.set('Pendants',{
      box1:{
        images: [
          'assets/img/goldpendants.jpeg',
          'assets/img/silverpendant.jpg',
          'assets/img/paltinumpendant.jpg',
          'assets/img/diamondpendant.jpg',
        ],
        texts: [
          ' Gold Pendant',
          ' Silver Pendant',
          ' Platinum Pendant',
          'Diamond Pendant',
        ],
        links: ['/','/','/','/']
      }
    });

    this.categoryData.set('Finger Rings',{
      box1:{
        images: [
          'assets/img/goldring.jpg',
          'assets/img/silverring.jpg',
          'assets/img/platinumring.jpg',
          'assets/img/diamondring.jpeg',
        ],
        texts: [
          ' Gold Ring',
          ' Silver Ring',
          ' Platinum Ring',
          ' Diamond Ring',
        ],
        links: ['/','/','/','/']
      }
    });

    this.categoryData.set('Nose Pin',{
      box1:{
        images: [
          'assets/img/goldpin.jpg',
          'assets/img/silverpin.jpg',
          'assets/img/platinumpin.jpg',
          'assets/img/diamondpin.jpg',
        ],
        texts: [
          ' Gold Nose Pin',
          ' Silver Nose Pin',
          ' Platinum Nose Pin',
          ' Diamond Nose Pin',
        ],
        links: ['/','/','/','/']
      }
    });

    this.categoryData.set('Necklace Set',{
      box1:{
        images: [
          'assets/img/goldnecklace.jpg',
          'assets/img/silvernecklace.jpeg',
          'assets/img/platinumnecklace.jpg',
          'assets/img/diamondnecklace.jpg',
        ],
        texts: [
          'Gold Necklace',
          'Silver Necklace',
          'Platinum Necklace',
          'Diamond Necklace',
        ],
        links: ['/','/','/','/']
      }
    });
   }

  updateSelectedCategory(category:string){
    this.selectedCategorySubject.next(category)
  }

  getBoxData(category: string, box: string) {
    return this.categoryData.get(category)?.[box] || null;
  }
}
