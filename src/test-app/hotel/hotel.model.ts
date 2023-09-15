export class HotelModel {
  hotelName?: string;
  hotelImage?: string;
  star?: number;
  pricing?: HotelPricing[];
}

export class HotelPricing {
  board?: string;
  price?: number;
  roomName?: string;
}
