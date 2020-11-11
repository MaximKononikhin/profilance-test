import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import NewsCard from '../../components/NewsCard/NewsCard';
import NewsForm from '../../components/NewsForm/NewsForm';
import { searchArticle } from '../../Store/actions';
import { IAppState, INews } from '../../utils/types';
import './News.scss';



const News: React.FC = () => {
  const news = useSelector<IAppState, INews[]>(state => state.news);
  const userName = useSelector<IAppState, string>(state => state.userName);
  const searchWord = useSelector<IAppState, string>(state => state.searchWord);
  const dispatch = useDispatch();
  
  return (
    <section className="news-page">
      <h1 className="news-page__heading">Новости</h1>
      <label className="news-page__search">
        Поиск
        <input type="text" onChange={(evt) => {
          dispatch(searchArticle(evt.target.value));
        }}/>
      </label>
      <div className="news-page__list">
        {
          userName === 'Гость'?
            news.filter(item => item.isApproved && item.title.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()))
            .map(item => <NewsCard key={item.title} article={item}/>)
            :
            news.filter(item => item.title.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()))
            .map(item => <NewsCard key={item.title} article={item}/>)
        }
      </div>
      {userName !== 'Гость' && <NewsForm/>}
    </section>
  )
}

export default News;
