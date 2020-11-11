export type IUser = {
  login: string,
  password: string
};

export type IAppState = {
  isAuthNeed: boolean,
  isAdmin: boolean,
  isLoginError: boolean,
  userName: string,
  isModalOpen: boolean,
  news: INews[],
  searchWord: string
}

export type INews = {
  title: string,
  text: string,
  isApproved: boolean
}