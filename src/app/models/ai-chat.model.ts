export interface AiChatInterface {
  userId: string

  messages: [
    {
      message: string,
      sender: 'ai' | 'user',
      date: {
        day: number,
        month: number,
        year: number,
        date: number,
        hours: number,
        minutes: number
      }
    }
  ]
}