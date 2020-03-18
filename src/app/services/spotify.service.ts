import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify services listo!!!');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBOWKY5aYY1kZ0TLIIxeChan3o_vQnFx4Kuish1je3h9IHMKU0cFO1GSEt3zCtiroQnckv8XORfc_dIAG4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=40', {headers});
  }

}
