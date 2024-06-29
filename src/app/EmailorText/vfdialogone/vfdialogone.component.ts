import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import { faXTwitter,faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignupDialogBoxComponent } from '../../signup-dialog-box/signup-dialog-box.component';

@Component({
  selector: 'app-vfdialogone',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,FaIconComponent,MatCardModule,],
  templateUrl: './vfdialogone.component.html',
  styleUrl: './vfdialogone.component.css'
})
export class VfdialogoneComponent {
  faXmark= faXmark;
  faXTwitter= faXTwitter;
  faGoogle = faGoogle;
  faFacebook = faFacebook

  constructor(public dialog:MatDialog,public dialogRef:MatDialogRef<VfdialogoneComponent>){}
 
  opensignup()
  {
    this.dialogRef.close();
    this.dialog.open(SignupDialogBoxComponent,{})
  }

}
