import { INews, IUser } from "../utils/types";

export const SIGN_IN_USER = 'sign-in-user';
export const SWITCH_MODAL = 'switch-modal';
export const SIGN_OUT = 'sign-out';
export const UPDATE_NEWS = 'update-news';
export const ADD_NEW_ARTICLE = 'add-new-article';
export const SEARCH_ARTICLE = 'search-article';

type SignInUserType = {
  type: typeof SIGN_IN_USER,
  payload: IUser
}

type SwitchModalType = {
  type: typeof SWITCH_MODAL,
  payload: boolean
}

type SignOutType = {
  type: typeof SIGN_OUT
}


type UpdatenewsType = {
  type: typeof UPDATE_NEWS,
  payload: INews
}

type AddNewArticle = {
  type: typeof ADD_NEW_ARTICLE,
  payload: INews
}

type SearchArticleType = {
  type: typeof SEARCH_ARTICLE,
  payload: string
}

export type ActionTypes = SignInUserType | SwitchModalType |
 SignOutType | UpdatenewsType | AddNewArticle | SearchArticleType;