import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HotelComponent } from '../hotel/hotel.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  standalone: true,
  imports: [MatButtonModule, HotelComponent],
})
export class DisplayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
