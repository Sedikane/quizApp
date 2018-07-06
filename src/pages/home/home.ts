import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public Nav: NavController) {

  }
 nextPage(){
   this.Nav.push(AboutPage);
  }
  
}
