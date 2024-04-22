// File for manage type interface that use in this project
export interface RestaurantType {
  id: string
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
  name: string
  booking: BookingType
}

export interface FormType {
  name: string,
  tableSize: string,
  date: Date,
  time: string,
}

export const initialList = [
  {
    id: '1',
    name: "Tasty Bites",
    description: "A cozy restaurant serving delicious dishes.",
    photos: ["https://picsum.photos/300", "https://picsum.photos/300"],
  },
  {
    id: '2',
    name: "Sizzle Grill",
    description: "An upscale steakhouse with a lively atmosphere.",
    photos: ["https://picsum.photos/300", "https://picsum.photos/300"],
  },
];
