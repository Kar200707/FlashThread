export interface User {
  isOnline: boolean;
  id: string;
  email: string;
  password: string;
  name: string;
  l_name: string;
  avatar: string;
  last_connection: {
    date: number,
    day: number,
    year: number,
    month: number,
    hours: number,
    minutes: number
  };
  bio: string;
  __v?: string;
  _id?: string;
}