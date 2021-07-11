import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'create', component: CreatePlaylistComponent },
  { path: 'details', component: PlaylistDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'playlists' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule {}