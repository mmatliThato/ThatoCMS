import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from '../../environments/environment';
import * as firebase from 'firebase';
import { SnapShots } from '../../environments/environment';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
 
  storageRef = firebase.storage().ref();
  Rooms = [];
  ref = firebase.database().ref('rooms/');
  room : any = {};

  constructor(public alertCtrl:AlertController, public router:Router) {
    this.ref.on('value', res => {
     this.Rooms = SnapShots(res);
    })
   }

  ngOnInit() {
  }

  Delete(key){
     firebase.database().ref('rooms/'+key).remove();
  }


  async Update(key){
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          name: 'name',
          placeholder: 'Enter room name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if(data.name !== undefined && data.name.length > 0){
             firebase.database().ref('rooms/'+key).update({RoomType:data.name});
            }
          }
        }
      ]
    });
    await alert.present();
  }



}


