import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent implements OnInit {
  @Input() src!: string;
  @Input() alt: string = '';
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.src) throw new Error('Src is required');
  }

  onLoad(): void {
    this.hasLoaded = true;
  }
}
