import React, { useState, useEffect } from "react";
import moment from "moment";
import HeaderSection from "../../components/elements/HeaderSection";
import NewsCard from "../../components/elements/NewsCard";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import InfiniteScroll from "react-infinite-scroll-component";
import { Helmet } from "react-helmet-async";
import useContentful from "../../hooks/useContentful";

import "../../styles/views/news.scss";

const NewsContainer = () => {
  const [news, setNews] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const { getNews } = useContentful();

  useEffect(() => {
    getNews().then((news) => {
      if (news) {
        // Sort news by publish date
        news.sort(
          (n1, n2) => new Date(n2.publishDate) - new Date(n1.publishDate)
        );
        setNews(news);
      }
      setHasMore(false);
    });
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
        {news && (
          <InfiniteScroll
            dataLength={news.length}
            // next={() => FetchPosts.current()}
            hasMore={hasMore}
            className="flex flex-wrap flex-space-between flex-column-md-max"
          >
            {news.map((n, index) => {
              const { title, subtitle, image, url, publishDate } = n;
              return (
                <LazyLoadComponent key={index}>
                  <NewsCard
                    image={image}
                    date={moment(publishDate).format("MM.DD.YY")}
                    title={title}
                    content={subtitle}
                    url={url}
                  />
                </LazyLoadComponent>
              );
            })}
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
