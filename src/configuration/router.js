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
    title: 'Home',
    value: routes.home,
  },
  {
    title: '关于我们',
    value: routes.about,
  },
  {
    title: '录取案例',
    value: routes.cases,
  },
  {
    title: '我们的优势',
    value: routes.advantages,
  },
  {
    title: '课程特色',
    value: routes.features,
  },
  {
    title: '合作伙伴',
    value: routes.partners,
  },
  {
    title: '联系我们',
    value: routes.contact,
  },
  {
    title: '新闻news',
    value: routes.news,
  }
];
