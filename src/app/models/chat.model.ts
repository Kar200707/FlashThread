export interface ChatInterface {
  clientToken?: string;

  usersId: string[];

  messages: [
    {
      emoji: boolean;
      message: string;
      userId: string;
      date: {
        day: number;
        month: number;
        year: number;
        date: number;
        hours: number;
        minutes: number;
      }
    }
  ]
}