export const wsHost = 'ws://localhost:3000'
export const host = 'http://localhost:3000/api/';

export const environment = {
  signIn: host + 'login',
  signUp: host + 'reg',
  getUser: host + 'client_info',
  search: host + 'search-user',
  getUserById: host + 'get-user-by-id',
  getUserByToken: host + 'get-user-by-token',
  checkChat: host + 'chat/check',
  chat: host + 'chat',
  getChat: host + 'chat/get',
  getActiveChats: host + 'chat/get-active-chats',
  userEdit: host + 'user/edit',
  userLogout: host + 'user/logout',
  ai: host + 'ai',
  aiGetChat: host + 'ai/chat/get'
}
