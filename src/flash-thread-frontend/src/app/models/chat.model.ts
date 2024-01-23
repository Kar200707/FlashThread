export interface ChatInterface {
  id?: number

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
