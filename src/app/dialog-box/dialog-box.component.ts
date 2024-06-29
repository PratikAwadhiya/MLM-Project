import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { faXTwitter,faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { RouterLink } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { SignupDialogBoxComponent } from '../signup-dialog-box/signup-dialog-box.component';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { ForgetDialogComponent } from '../forget-dialog/forget-dialog.component';
@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule,MatCardModule,FaIconComponent,MatIconModule,MatInputModule,RouterLink,MatRadioModule],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css'
})
export class DialogBoxComponent {
  hide: boolean = false; 
  faXTwitter = faXTwitter;
  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faXmark = faXmark;


  constructor(public dialog:MatDialog, public dialogRef:MatDialogRef<DialogBoxComponent>){}

  openSignupDialog(){
    this.dialogRef.close();
     this.dialog.open(SignupDialogBoxComponent,{

     });
  }

 
  openAdmin()
  {
    this.dialogRef.close()
    this.dialog.open(AdminDialogComponent,{
      
    })
  }

  openforget()
  {
    this.dialogRef.close()
    this.dialog.open(ForgetDialogComponent,{
      
    })
  }
}
