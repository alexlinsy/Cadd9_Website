import React, {useState, useEffect} from 'react';
import moment from 'moment';
import HeaderSection from '../../components/elements/HeaderSection'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import '../../styles/views/news.scss';
import NewsCard from '../../components/elements/NewsCard';


const NewsContainer = () => {
  console.log(process.env.REACT_APP_WORDPRESS_API_URL);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_WORDPRESS_API_URL
    )
      .then(res => res.json())
      .then(res => setPosts(res.posts));
  }, []);

  return (
    <div className="news-container px-10">
      <HeaderSection title="新闻" borderRequired />
      <div className="news-section mt-8 flex flex-wrap flex-space-between flex-column-md-max">
        {posts && posts.map((post, index) => {
           const {featured_image, date, title, content, tags} = post;
          return (
            <LazyLoadComponent key={index}>
              <NewsCard image={featured_image} date={moment(date).format("MM.DD.YY")} title={title} content={content} url={Object.keys(tags)[0]} />
            </LazyLoadComponent>
          );
       })}
      </div>
    </div>
  );
};

export default NewsContainer;
