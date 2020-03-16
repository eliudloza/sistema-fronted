import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']
})
export class ConocenosComponent {

  nuevasCanciones: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data.albums.items);
      this.nuevasCanciones = data.albums.items;
    });
  }

}
