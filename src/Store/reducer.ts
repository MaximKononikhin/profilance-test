import { ADMIN, USER } from "../utils/constants";
import { IAppState, INews } from "../utils/types";
import { ActionTypes, ADD_NEW_ARTICLE, SEARCH_ARTICLE, SIGN_IN_USER, SIGN_OUT, SWITCH_MODAL, UPDATE_NEWS } from "./actionTypes";

const news: INews[] = [
  {
    title: 'Убийство',
    text: 'LorermakjkfkafafafaLorermakjkfkafafafaLorermakjkfkafafafa',
    isApproved: true
  },
  {
    title: 'Кража',
    text: 'LorermakjkfkafafafaLorermakjkfkafafafaLorermakjkfkafafafa',
    isApproved: false
  },
  {
    title: 'Рождение',
    text: 'LorermakjkfkafafafaLorermakjkfkafafafaLorermakjkfkafafafa',
    isApproved: true
  },
  {
    title: 'Смерть',
    text: 'LorermakjkfkafafafaLorermakjkfkafafafaLorermakjkfkafafafa',
    isApproved: false
  },
]

const updateArticle = (news: INews[], article: INews): INews[]  => {
  const index = news.findIndex((it) => it.title === article.title);
  if (index === -1) {
    return news;
  }
  return Array<INews>().concat(news.slice(0, index), article, news.slice(index + 1));
  
}

const initialState: IAppState = {
  isAuthNeed: true,
  isAdmin: false,
  isLoginError: false,
  userName: 'Гость',
  isModalOpen: false,
  news,
  searchWord: ''
}

export const reducer = (state = initialState, action: ActionTypes): IAppState => {
  switch (action.type) {

    case SIGN_IN_USER:
      if (action.payload.login === ADMIN.login && action.payload.password === ADMIN.password) {
        return {
          ...state,
          isAdmin: true,
          isAuthNeed: false,
          isLoginError: false,
          userName: ADMIN.login,
          isModalOpen: false,
        }
      } else if (action.payload.login === USER.login && action.payload.password === USER.password) {
        return {
          ...state,
          isAdmin: false,
          isAuthNeed: false,
          isLoginError: false,
          userName: USER.login,
          isModalOpen: false,
        }
      }
      return {
        ...state,
        isAdmin: false,
        isAuthNeed: true,
        isLoginError: true,
        userName: 'Гость'
      }
    
    case SWITCH_MODAL: {
      return {
        ...state,
        isModalOpen: action.payload
      }
    }

    case SIGN_OUT: {
      return {
        ...state,
        isAdmin: false,
        isAuthNeed: true,
        isLoginError: false,
        userName: 'Гость',
        isModalOpen: false
      }
    }

    case UPDATE_NEWS: {
      return {
        ...state,
        news: updateArticle(state.news, action.payload)
      }
    }

    case ADD_NEW_ARTICLE: {
      return {
        ...state,
        news: [...state.news, action.payload]
      }
    }

    case SEARCH_ARTICLE: {
      return {
        ...state,
        searchWord: action.payload
      }
    }

    default: return state;
  }
}