import React, {useState, useEffect, useRef} from 'react';
import moment from 'moment';
import HeaderSection from '../../components/elements/HeaderSection';
import NewsCard from '../../components/elements/NewsCard';
import {LazyLoadComponent} from 'react-lazy-load-image-component';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Helmet} from 'react-helmet-async';

import '../../styles/views/news.scss';

const NewsContainer = () => {
  const [posts, setPosts] = useState(null);
  const [postNumber, setPostNumber] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  const FetchPosts = useRef(() => {});
  FetchPosts.current = () => {
    fetch(process.env.REACT_APP_WORDPRESS_API_URL + `/?number=${postNumber}`)
      .then(res => res.json())
      .then(res => {
        setPosts(res.posts);
        setPostNumber(postNumber + 5);
        setHasMore(false);
      });
  };

  useEffect(() => {
    FetchPosts.current();
  }, []);

  return (
    <div className="news-container px-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cadd9 新闻</title>
        <meta name="description" content="Cadd9 公司动态 新闻 媒体" />
      </Helmet>
      <HeaderSection title="新闻" borderRequired />
      <div className="news-section mt-8">
        {posts && (
          <InfiniteScroll
            dataLength={posts.length}
            next={() => FetchPosts.current()}
            hasMore={hasMore}
            className="flex flex-wrap flex-space-between flex-column-md-max"
          >
            {posts.map((post, index) => {
              const {featured_image, date, title, content, tags} = post;
              return (
                <LazyLoadComponent key={index}>
                  <NewsCard
                    image={featured_image}
                    date={moment(date).format('MM.DD.YY')}
                    title={title}
                    content={content}
                    url={Object.keys(tags)[0]}
                  />
                </LazyLoadComponent>
              );
            })}{' '}
          </InfiniteScroll>
        )}
        {hasMore ? (
          <p className="news-loading-text mb-0">加载中...</p>
        ) : (
          <p className="news-loading-text mb-0">已经是最底了</p>
        )}
      </div>
    </div>
  );
};

export default NewsContainer;
