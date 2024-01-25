export interface User {
  isOnline?: boolean;
  id?: string;
  email: string;
  name: string;
  l_name: string;
  avatar: string;
  bio: string;
  last_connection?: {
    date: number,
    day: number,
    year: number,
    month: number,
    hours: number,
    minutes: number
  };
  device?: string;
  devices?: string[];
}
