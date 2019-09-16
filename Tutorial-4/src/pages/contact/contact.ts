import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import any = jasmine.any;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  link: string;
  //url1: string='https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dleopt__ATR0%0A';
  todo: string;
  // @ts-ignore
  comments = [];
  public output;
  encode  =encodeURIComponent(this.link);
   //encoded : string = encodeURI(this.link);
  constructor(public navCtrl: NavController, public http: HttpClient) {

  }
  extract() {
    console.log(this.link);
    console.log(this.encode);
    console.log("method entered");
    +this.http.get('https://api.diffbot.com/v3/discussion?token=f105472d42803bca68eea6472c932d0b&url=https%3A%2F%2Ftwitter.com%2Fsearch%3Fq%3D%2523DragonBallSuper%26src%3Dtrend_click',
    ).subscribe((data: any) => {
      this.output = data;
      console.log(data);
      for (var i = 0; i < 10; i++) {
        this.comments[i] = {
          "comment": data.objects[0].posts[i].text,
        };
        console.log(this.comments);
      }
    })
  }
      analysis() {
        this.http.get("Https://cors-anywhere.herokuapp.com/https://api.uclassify.com/v1/uClassify/Sentiment/classify/?readKey=loR9jSP87ow7&text=This+is+the+text+to+classify").subscribe((data: any) => {
          {
            console.log(data);
          }

        })
      }
  }
