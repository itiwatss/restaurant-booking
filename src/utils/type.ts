// File for manage type interface that use in this project
export interface RestaurantType {
  name: string;
  description: string;
  photos: string[];
}

export interface BookingType {
  name: string;
  size: number;
  dateTime: Date;
}

export interface UserType {
  booking: BookingType[]
}
