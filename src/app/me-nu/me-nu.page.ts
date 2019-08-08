import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me-nu',
  templateUrl: './me-nu.page.html',
  styleUrls: ['./me-nu.page.scss'],
})
export class MeNuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public appPages = [
  
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'rooms',
      url: '/rooms',
      icon: 'bed'
    },
    {
      title: 'feedback',
      url: '/feedback',
      icon: 'paper'
    },
   
  ];


}
