export interface ChatInterface {
  id?: number

  usersId: string[];

  messages: {
      message: string;
      userId: string;
      id?: string;
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
