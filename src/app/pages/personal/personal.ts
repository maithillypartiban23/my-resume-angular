import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME } from '../../data/resume-data';

@Component({
  selector: 'app-personal',
  imports: [CommonModule],
  templateUrl: './personal.html',
  styleUrl: './personal.css'
})
export class Personal {
  protected readonly resume = RESUME;
}

