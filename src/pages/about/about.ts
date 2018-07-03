import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
display: number;
name: string;
  constructor(public navCtrl: NavController,public Nav: NavController) {
    
  }
  nextPage(){
    this.Nav.push(ContactPage);
   }
onClick(){
this.display=1;
}
seClick() {
  this.display = 0;
  this.name = "";
}

}