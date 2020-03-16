import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify services listo!!!');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBRk-qOBU7vsH5yoD33aU1jULeMdCYs-PgqQUG1msDAarIVVgQ1x8Z-oKDZ2zxLKn_tg8qJeCuh3cF_Zpc'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=40', {headers});
  }

}
