import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../data.service';
import { HotelModel } from './hotel.model';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  standalone: true,
  imports: [MatButtonModule, CommonModule],
})
export class HotelComponent implements OnInit {
  hotelData?: HotelModel[];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getHotels().subscribe({
      next: (res) => (this.hotelData = res),
    });
  }
}
