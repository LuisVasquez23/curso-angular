import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput') tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    // Get the value from the input
    const newTag = this.tagInput.nativeElement.value;

    // Call the searchTag method from the gifsService
    this.gifsService.searchTag(newTag);

    // Clear the input
    this.tagInput.nativeElement.value = '';
  }
}
