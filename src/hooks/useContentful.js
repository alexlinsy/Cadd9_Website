import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSS_TOKEN,
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
    return sanitizedEntries;
  };

  const getTeamMembers = async () => {
    const entries = await client.getEntries({
      content_type: "teamMembers",
      select: "fields",
    });
    const sanitizedEntries = entries.items.map((item) => {
      const image = item.fields.image.fields.file.url;
      const introduction = item.fields.introduction.content[0].content[0].value;
      return {
        ...item.fields,
        introduction,
        image,
      };
    });
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

    return {
      bussinessPartners: sanitizedBusinessPartnerEntries,
      eduPartnerEntries: sanitizedEduPartnerEntries,
    };
  };

  const getAboutUsData = async () => {
    const aboutEntry = await client.getEntry("4omtKhTXMjzflu3Tshhcay");
    const introImage = aboutEntry.fields.introImage.fields.file.url;
    const introText = aboutEntry.fields.introText.content[0].content[0].value;
    const bodyImageOne = aboutEntry.fields.bodyImageOne.fields.file.url;
    const bodyTextOne = aboutEntry.fields.bodyTextOne.content.map(
      (c) => c.content[0].value
    );
    const bodyImageTwo = aboutEntry.fields.bodyImageTwo.fields.file.url;
    const bodyTextTwo = aboutEntry.fields.bodyTextTwo.content.map(
      (c) => c.content[0].value
    );
    const bannerImageOne = aboutEntry.fields.bannerImageOne.fields.file.url;
    const bannerImageTwo = aboutEntry.fields.bannerImageTwo.fields.file.url;

    const sanitizedData = {
      introImage,
      introText,
      bodyImageOne,
      bodyTextOne,
      bodyImageTwo,
      bodyTextTwo,
      bannerImageOne,
      bannerImageTwo,
    };
    return sanitizedData;
  };

  const getAdvantages = async () => {
    const entries = await client.getEntries({
      content_type: "advantages",
      select: "fields",
    });

    const sanitizedEntries = entries.items.map((item) => {
      const id = item.fields.id;
      const bannerImage = item.fields.bannerImage.fields.file.url;
      const descriptionArr = item.fields.description.content[0].content.map(
        (c) => {
          return { value: c.value, isBold: c.marks.length !== 0 };
        }
      );

      return {
        id,
        bannerImage,
        descriptionArr,
      };
    });
    return sanitizedEntries;
  };

  const getAddresses = async () => {
    const entries = await client.getEntries({
      content_type: "addresses",
      select: "fields",
    });

    const sanitizedEntries = entries.items.map((item) => {
      const image = item.fields.image.fields.file.url;
      return {
        ...item.fields,
        image,
      };
    });
    return sanitizedEntries;
  };

  const getContactInfo = async () => {
    const contactInfo = await client.getEntry("6XT8ydNfme4tsDRqThI7kZ");

    const QRCodes = contactInfo.fields.QRCodes.map(
      (item) => item.fields.file.url
    );
    const sanitizedContactInfo = {
      ...contactInfo.fields,
      QRCodes,
    };
    return sanitizedContactInfo;
  };

  const getFeatures = async () => {
    const entries = await client.getEntries({
      content_type: "features",
      select: "fields",
    });

    const sanitizedEntries = entries.items.map((item) => {
      const description = item.fields.description.content[0].content[0].value;
      const bannerImageTitle = item.fields.bannerImageTitle.fields.file.url;
      const image = item.fields.image.fields.file.url;
      return {
        ...item.fields,
        description,
        bannerImageTitle,
        image,
      };
    });
    return sanitizedEntries;
  };

  return {
    getNews,
    getTeamMembers,
    getCases,
    getPartners,
    getAboutUsData,
    getAdvantages,
    getAddresses,
    getContactInfo,
    getFeatures,
  };
};

export default useContentful;
