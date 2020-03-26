import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify services listo!!!');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDBRvlX-qPAH1xqz34s11OMMuaG_0nRHQnaxUN7mR_ccz7h69dPrHldy36AgEcI4N-bREhChh-KxVDsGIc'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=40', {headers});
  }

}
