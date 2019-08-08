import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit {

  storageRef = firebase.storage().ref();
  Rooms = [];
  ref = firebase.database().ref('rooms/');
  room : any = {};
  

  constructor( public router:Router) { }

  ngOnInit() {
  }


  
  featuredPhotoSelected(event: any){
    const i = event.target.files[0];
   console.log(i);
   const upload = this.storageRef.child(i.name).put(i);
   upload.on('state_changed', snapshot => {
     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     console.log('upload is: ', progress , '% done.');
   }, err => {
   }, () => {
     upload.snapshot.ref.getDownloadURL().then(dwnURL => {
       console.log('File avail at: ', dwnURL);
       this.room.pic = dwnURL;
     
     });
   });
   }

addRoom(room){
   //this.upload()
  //this.featuredPhotoSelected(event);
      let newUser = this.ref.push();
    newUser.set({
      RoomType: room.type,
      Price: room.price,
      Description : room.description,
      Location : room.location,
      image: room.pic
    })
    this.room = {};
    //  this.room.name = '';
    //  this.room.hotelName = '';
    //  this.room.feautures = '';
    //  this.room.description = '';
    //  this.room.room_size = null,
    //  this.room.location = '',
    //  this.room.price = null;
    //  this.room.pic = 0;
     this.router.navigateByUrl("/home");
    }
}
