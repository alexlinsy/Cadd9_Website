import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSS_TOKEN,
    host: process.env.REACT_APP_CONTENTFUL_HOST,
  });

  const getNews = async () => {
    const entries = await client.getEntries({
      content_type: "news",
      select: "fields",
    });
    const sanitizedEntries = entries.items.map((item) => {
      const image = item.fields.image.fields.file.url;
      return {
        ...item.fields,
        image,
      };
    });
    console.log(sanitizedEntries);
    return sanitizedEntries;
  };

  const getTeamMembers = async () => {
    const entries = await client.getEntries({
      content_type: "teamMembers",
      select: "fields",
    });
    console.log(entries);
    const sanitizedEntries = entries.items.map((item) => {
      const image = item.fields.image.fields.file.url;
      const introduction = item.fields.introduction.content[0].content[0].value;
      return {
        ...item.fields,
        introduction,
        image,
      };
    });
    console.log(sanitizedEntries);
    return sanitizedEntries;
  };
  return { getNews, getTeamMembers };
};

export default useContentful;
