import React from 'react';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

import '../../styles/elements/news-card.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
const NewsCard = ({image, date, title, content, url, scrollPosition}) => {
  const openInNewTab = url => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div
      className="flex flex-column news-card mb-10"
      onClick={() => openInNewTab(url)}
    >
      <LazyLoadImage
        src={image}
        alt="cadd9 新闻 news"
        className="full-width"
        effect="blur"
        scrollPosition={scrollPosition}
      />
      <p className="font-heading mt-5 mb-3 f-24">{date}</p>
      <p className="font-heading mb-0 f-24">{title}</p>
      <div
        className="font-heading mb-0 mt-5 leading-normal news-content"
        dangerouslySetInnerHTML={{__html: content}}
      ></div>
    </div>
  );
};

export default trackWindowScroll(NewsCard);
