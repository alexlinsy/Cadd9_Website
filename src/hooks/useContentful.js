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

  const getCases = async () => {
    const caseEntries = await client.getEntries({
      content_type: "detailedCases",
      select: "fields",
    });
    const sanitizedCaseEntries = caseEntries.items.map((item) => {
      const offerImage = item.fields.offerImage.fields.file.url;
      const description = item.fields.description.content[0].content[0].value;
      return {
        ...item.fields,
        description,
        offerImage,
      };
    });

    const imageEntries = await client.getEntries({
      content_type: "caseImages",
      select: "fields",
    });

    const sanitizedImageEntries = imageEntries.items.map((item) => {
      const offerImage = item.fields.offerImage.fields.file.url;

      return {
        offerImage,
      };
    });
    return {
      detailedCases: sanitizedCaseEntries,
      caseImages: sanitizedImageEntries,
    };
  };

  const getPartners = async () => {
    //in contentful dashboard the the name of the content models have been changed to businessPartner and educationPartner
    // but the api identifers remains "businessPartnerLogos" and "educationPartnerLogos"
    const businessPartnerEntries = await client.getEntries({
      content_type: "businessPartnerLogos",
      select: "fields",
    });
    const sanitizedBusinessPartnerEntries = businessPartnerEntries.items.map(
      (item) => {
        const logo = item.fields.logo.fields.file.url;
        return {
          logo,
        };
      }
    );
    console.log(sanitizedBusinessPartnerEntries);

    const eduPartnerEntries = await client.getEntries({
      content_type: "educationPartnerLogos",
      select: "fields",
    });
    const sanitizedEduPartnerEntries = eduPartnerEntries.items.map((item) => {
      const logo = item.fields.logo.fields.file.url;
      return {
        logo,
      };
    });
    console.log(sanitizedEduPartnerEntries);

    return {
      bussinessPartners: sanitizedBusinessPartnerEntries,
      eduPartnerEntries: sanitizedEduPartnerEntries,
    };
  };
  return { getNews, getTeamMembers, getCases, getPartners };
};

export default useContentful;
