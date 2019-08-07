import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from '../../environments/environment';
import * as firebase from 'firebase';
import { SnapShots } from '../../environments/environment';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {

  Rooms = [];
  ref = firebase.database().ref('rooms/');

  constructor(public alertCtrl:AlertController) {
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
          name: 'RoomName',
          placeholder: 'Enter room name'
        },
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
              firebase.database().ref('rooms/'+key).update({RoomType:data.name})
            }
     
          }
        }
      ]
    });
    await alert.present();
  }



}


