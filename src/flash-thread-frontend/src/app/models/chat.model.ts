export interface ChatInterface {
  usersId: {
    user: string
  }

  messages: [
    {
      message: string,
      userId: string,
      date: {
        day: number,
        month: number,
        year: number,
      }
    }
  ]
}