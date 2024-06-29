import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { ForgetDialogComponent } from '../../forget-dialog/forget-dialog.component';
import { SignupDialogBoxComponent } from '../../signup-dialog-box/signup-dialog-box.component';
import { VfdialogoneComponent } from '../vfdialogone/vfdialogone.component';



@Component({
  selector: 'app-textdialog',
  standalone: true,
  imports: [MatButtonModule,FaIconComponent,MatRadioModule,MatFormFieldModule,MatSelectModule,CommonModule,MatInputModule],
  templateUrl: './textdialog.component.html',
  styleUrl: './textdialog.component.css'
})



export class TextdialogComponent {
  faXmark=faXmark;
  value: string[] = [];
  'Email': string= '';
  'Text Message(SMS)':string='';
  mobileNumber : string='';

  constructor(public dialog:MatDialog,public dialogRef:MatDialogRef<TextdialogComponent>){}
  
  selectedOption!: string;
  selectedCountry: any;
  countries = [
    { code: '+91', name: 'India', flagUrl: 'https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png' },
    { code: '+1', name: 'United States', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1235px-Flag_of_the_United_States.svg.png' },
    {code:'004',name:'United Kingdom',flagUrl:'https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png'},
    {code:'00 61',name:'Australia',flagUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1280px-Flag_of_Australia.svg.png'},
    {code:'00 81',name:'Japan',flagUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png'},
    // Add more countries as needed
  ];

  onCountryChange(countryCode: string) {
    this.selectedCountry = this.countries.find(country => country.code === countryCode);
  }
  
  goback(){
    this.dialogRef.close();
    this.dialog.open(ForgetDialogComponent)
  }

  close()
  {
    this.dialogRef.close();
  }
 
  goSignup()
  {
    this.dialogRef.close()
    this.dialog.open(SignupDialogBoxComponent)
  }

  //verification-dialog
  opentext(){
    this.dialogRef.close();
    this.dialog.open(VfdialogoneComponent,{})
  }
}


