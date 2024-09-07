import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  // This property will store the tags history
  private gifs: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = 'najGScJb5ALc331ju0rqyvP1xX86vDKB';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  // Getter for the tagsHistory property
  get tagsHistory(): string[] {
    return [...this._tagsHistory]; // Return a copy of the array
  }

  get gifsList(): Gif[] {
    return [...this.gifs];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('tagsHistory', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const history = localStorage.getItem('tagsHistory');
    if (history) {
      this._tagsHistory = JSON.parse(history);
      const firtTag = this._tagsHistory[0];
      this.searchTag(firtTag);
    }
  }

  // This method will be called from the search-box component
  searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    this.organizeTagsHistory(tag);

    // Create the params object
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    // Make the request
    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp: SearchResponse) => {
        this.gifs = resp.data;
      });
  }

  // This method will be called from the sidebar component
  private organizeTagsHistory(tag: string): void {
    tag = tag.trim().toLowerCase();

    // If the tag is already in the history, remove it
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((t) => t !== tag);
    }

    // Add the tag to the beginning of the array
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
    this.saveLocalStorage();
  }
}
