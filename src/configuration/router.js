const routes = {
  home: '/',
  about: '/about',
  cases: '/cases',
  advantages: '/advantages',
  features: '/features',
  partners: '/partners',
  contact: '/contact',
  news: '/news',
};

export default routes;

export const steps = [
  {
    title: '主页',
    subTitle: 'Home',
    value: routes.home,
  },
  {
    title: '关于',
    subTitle: '我们',
    value: routes.about,
  },
  {
    title: '录取',
    subTitle: '案例',
    value: routes.cases,
  },
  {
    title: '我们的',
    subTitle: '优势',
    value: routes.advantages,
  },
  {
    title: '课程',
    subTitle: '特色',
    value: routes.features,
  },
  {
    title: '合作',
    subTitle: '伙伴',
    value: routes.partners,
  },
  {
    title: '联系',
    subTitle: '我们',
    value: routes.contact,
  },
  {
    title: '新闻',
    subTitle: 'News',
    value: routes.news,
  }
];
