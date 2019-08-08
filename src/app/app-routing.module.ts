import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },

  { path: 'rooms', loadChildren: './rooms/rooms.module#RoomsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },

  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'me-nu', loadChildren: './me-nu/me-nu.module#MeNuPageModule' },
  { path: 'add-room', loadChildren: './add-room/add-room.module#AddRoomPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
}


