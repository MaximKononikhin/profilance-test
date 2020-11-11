import { INews, IUser } from "../utils/types";
import { ActionTypes, ADD_NEW_ARTICLE, SEARCH_ARTICLE, SIGN_IN_USER, SIGN_OUT, SWITCH_MODAL, UPDATE_NEWS } from "./actionTypes";

export const signIn = (userInfo: IUser): ActionTypes => {
  return {
    type: SIGN_IN_USER,
    payload: userInfo
  }
};

export const switchModal = (flag: boolean): ActionTypes => {
  return {
    type: SWITCH_MODAL,
    payload: flag
  }
};

export const signOut = (): ActionTypes => {
  return {
    type: SIGN_OUT
  }
};

export const updateNews = (item: INews): ActionTypes => {
  return {
    type: UPDATE_NEWS,
    payload: item
  }
};

export const addNewArticle = (article: INews): ActionTypes => {
  return {
    type: ADD_NEW_ARTICLE,
    payload: article
  }
};

export const searchArticle = (word: string): ActionTypes => {
  return {
    type: SEARCH_ARTICLE,
    payload: word
  }
}
