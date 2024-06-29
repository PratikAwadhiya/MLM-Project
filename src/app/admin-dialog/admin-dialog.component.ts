import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ForgetDialogComponent } from '../forget-dialog/forget-dialog.component';
@Component({
  selector: 'app-admin-dialog',
  standalone: true,
  imports: [MatIconModule,MatRadioModule,MatButtonModule,MatDialogModule,FaIconComponent,ForgetDialogComponent],
  templateUrl: './admin-dialog.component.html',
  styleUrl: './admin-dialog.component.css'
})
export class AdminDialogComponent {
  faXmark =faXmark;
  constructor(public dialog:MatDialog,public dialogRef:MatDialogRef<AdminDialogComponent>){

}
  openuser(){
    this.dialogRef.close();
    this.dialog.open(DialogBoxComponent)
  }

  openforget(){
    this.dialogRef.close();
    this.dialog.open(ForgetDialogComponent,{

    });
  }
}
