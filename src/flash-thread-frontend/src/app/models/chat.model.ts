export interface ChatInterface {
  id?: string;
  _id?: string;

  usersId: string[];

  messages: {
      message: string;
      userId: string;
      id?: string;
      emoji?: boolean;
      date: {
        day: number;
        month: number;
        year: number;
        hours: number;
        minutes: number;
        date: number;
      }
    }[]
}
