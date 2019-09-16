import { Component } from '@angular/core';
import {AlertController} from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public alertCtrl: AlertController) {

  }

  Signup() {
    var alert = this.alertCtrl.create({
      title: "Registered Successfully",
      subTitle: "Account is Created",
      buttons: ['ok']
    });
    alert.present();
  }
}
