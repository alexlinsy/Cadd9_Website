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
    console.log(entries);
    console.log(sanitizedEntries);
  };
  return { getNews };
};

export default useContentful;
