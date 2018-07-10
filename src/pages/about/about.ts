
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
display: number;
name: string;
total:number;

  constructor(public navCtrl: NavController,public Nav: NavController) {
    this.total=0;
    this.display=0;
  }
  nextPage(){
    this.Nav.push(ContactPage);
   }

onClick(){
   this.display=1;
// console.log(this.total)
this.total==1;
}
seClick() {
  this.display = 0;
  this.name = "";
}
score(){
  console.log(this.total)
}

answerr(){
  ++this.total;
}


}