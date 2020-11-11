import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addNewArticle } from '../../Store/actions';
import { ActionTypes } from '../../Store/actionTypes';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './NewsForm.scss';

const NewsForm: React.FC = () => {
  const dispatch = useDispatch<Dispatch<ActionTypes>>();
  const [isError, switchError] = useState(false);
  const onSignInHandler = useCallback((evt) => {
    evt.preventDefault();
    const {title, text} = evt.target.elements;
    if (title.value.length < 3 || text.value.length < 3) {
      console.log(title.value.length)
      switchError(true);
    } else {
      dispatch(addNewArticle({
        title: title.value,
        text: text.value,
        isApproved: false
      }));
      switchError(false);
      title.value = '';
      text.value = '';
    }

  }, [])

  return (
    <form className="news-form" onSubmit={onSignInHandler}>
      {isError && <ErrorMessage text='Проверьте поля'/>}
      <label className="news-form__input">
        Название новости
        <input name="title" type="text"/>
      </label>
      <label className="news-form__textarea">
        Текст новости
        <textarea name="text"/>
      </label>
      <button className="news-form__sumbit-btn">Создать</button>
    </form>
  )
}

export default NewsForm
