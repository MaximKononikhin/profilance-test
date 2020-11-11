import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { updateNews } from '../../Store/actions';
import { ActionTypes } from '../../Store/actionTypes';
import { ADMIN, USER } from '../../utils/constants';
import { IAppState, INews } from '../../utils/types';

import './NewsCard.scss';

type IProps = {
  article: INews
}

const NewsCard: React.FC<IProps> = ({article}) => {
  const userName = useSelector<IAppState, string>(state => state.userName);
  const dispatch = useDispatch<Dispatch<ActionTypes>>();

  return (
    <article className="news">
      <h4 className="news__title">{article.title}</h4>
      <p className="news__text">{article.text}</p>
      {userName !== 'Гость'
        && 
        <label className="news__switcher">
          Опубликовано
          <input type="checkbox" defaultChecked={article.isApproved} disabled={userName === USER.login} onClick={() => {
            userName === ADMIN.login && dispatch(updateNews({
              title: article.title,
              text: article.text,
              isApproved: !article.isApproved
            }));
          }}/>
        </label>
      }

    </article>
  )
}

export default NewsCard
