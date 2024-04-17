import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Comic } from '../model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  private baseUrl = environment.baseUrl;
  private apiKey = environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  getComics(): Observable<Comic[]> {
    const url = `${this.baseUrl}/v1/public/comics?apikey=${this.apiKey}`;
    return this.httpClient.get<any>(url).pipe(
      map(response => response.data.results)

    );
  }

  getComicById(comicId: string): Observable<Comic> {
    const url = `${this.baseUrl}/v1/public/comics/${comicId}?apikey=${this.apiKey}`;
    return this.httpClient.get<Comic>(url);
  }
}
