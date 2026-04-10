import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RESUME } from '../../data/resume-data';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected readonly resume = RESUME;

  protected assetUrl(path: string): string {
    const normalized = path.startsWith('/') ? path.slice(1) : path;
    return new URL(normalized, document.baseURI).toString();
  }
}
