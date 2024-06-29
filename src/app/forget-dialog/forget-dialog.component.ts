import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { SignupDialogBoxComponent } from '../signup-dialog-box/signup-dialog-box.component';
import { TextdialogComponent } from '../EmailorText/textdialog/textdialog.component';
import { VfdialogtwoComponent } from '../EmailorText/vfdialogtwo/vfdialogtwo.component';

@Component({
  selector: 'app-forget-dialog',
  standalone: true,
  imports: [MatDialogModule,MatRadioModule,FaIconComponent,MatButtonModule],
  templateUrl: './forget-dialog.component.html',
  styleUrl: './forget-dialog.component.css'
})
export class ForgetDialogComponent {
  faXmark=faXmark;
  value: string[] = [];
  'Email': string= '';
  'Text Message(SMS)':string='';


  
  constructor(public dialog:MatDialog,public dialogRef:MatDialogRef<ForgetDialogComponent>){}
  
  goBack():void{
    this.dialogRef.close();
    this.dialog.open(SignupDialogBoxComponent,)
  }
  
  opentext():void
  {
    this.dialogRef.close();
    this.dialog.open(TextdialogComponent)
  }

  // verification-Dialog
  openreset()
  {
    this.dialogRef.close();
    this.dialog.open(VfdialogtwoComponent,{})
  }
}
