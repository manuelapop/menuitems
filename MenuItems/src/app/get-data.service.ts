import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  apiURL: string = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';

  constructor(private httpClient: HttpClient) { }

  public getData(searchData: string) {
    let apiUrl = this.apiURL + searchData;
    return this.httpClient.get<any>(apiUrl);
  }
}
