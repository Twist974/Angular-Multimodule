import { PlaylistRoutingModule } from './playlist-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists/playlists.component';



@NgModule({
  declarations: [PlaylistsComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }