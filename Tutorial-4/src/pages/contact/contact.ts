import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import any = jasmine.any;
import {replaceAll} from "@ionic/app-scripts";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  link: string;
  todo: string;
  comments = [];
  public scores = [];
  text = [];
  public output;
  encode = encodeURIComponent(this.link);

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  extract() {
    console.log(this.link);
    console.log(this.encode);
    console.log("method entered");
    +this.http.get('https://api.diffbot.com/v3/discussion?token=f105472d42803bca68eea6472c932d0b&url='+ this.encode).subscribe((data: any) => {
        this.output = data;
        console.log(data);
        for (var i = 0; i < 10; i++) {
          this.comments[i] = {
            "comment": data.objects[0].posts[i].text,
          };
        }
      }
    )
  }

  analysis() {
    for (let j=0; j < 10; j++) {
    this.http.get("Https://cors-anywhere.herokuapp.com/https://api.uclassify.com/v1/uClassify/Sentiment/classify/?readKey=loR9jSP87ow7&text=" + this.comments[j]).subscribe((data: any) => {
      {
        this.output = data;
        for (let j = 0; j < 10; j++) {
          this.scores[j] = {
            "textpositive": data.positive,
            "textnegative": data.negative
          }
        }
      }
      })
    }
  }

    }




