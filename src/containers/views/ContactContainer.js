import { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { contactData } from "../../data/contact-data";
// import WeChatQRCode from "../../assets/images/weChat-qr-code.png";
// import WeChatQRCode2 from "../../assets/images/weChat-qr-code2.png";
import MapContainer from "../../components/elements/MapContainer";
import { motion } from "framer-motion";
import ContactForm from "../../components/elements/ContactForm";
import { Helmet } from "react-helmet-async";

import "react-lazy-load-image-component/src/effects/blur.css";
import "../../styles/views/contact.scss";
import useContentful from "../../hooks/useContentful";

const AddressSection = ({ addressData }) => {
  const {
    campus,
    addressLineOne,
    addressLineTwo = undefined,
    image,
  } = addressData;

  return (
    <div className="flex flex-column address-section">
      <div className="pb-2 address-photo-container">
        <LazyLoadImage
          src={image}
          alt="cadd9 联系方式"
          effect="blur"
          className="address-photo"
        />
      </div>
      <p className="mt-2 f-20 mb-1">{campus}</p>
      <p className="font-heading mb-1">{addressLineOne}</p>
      {addressLineTwo && <p className="font-heading mb-0">{addressLineTwo}</p>}
    </div>
  );
};

const ContactContainer = () => {
  const [addresses, setAddresses] = useState([]);
  const [contactInfo, setContactInfo] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { getAddresses, getContactInfo } = useContentful();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const addr = await getAddresses();
        // sort addr based on ordering
        addr.sort((a, b) => a.ordering - b.ordering);
        setAddresses(addr);
        const contact = await getContactInfo();
        setContactInfo({ ...contact });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("加载“联系方式”数据失败");
      }
    };

    fetchData();
  }, []);
  return (
    <div className="px-10 contact-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cadd9 联系方式</title>
        <meta name="description" content="Cadd9 联系方式 留言" />
      </Helmet>

      {loading ? (
        <p className="message">加载中...</p>
      ) : error ? (
        <p className="message">{error}</p>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transiation={{ duration: 2 }}
          >
            <div className="mt-5 flex flex-space-between flex-column-md-max full-width address-detail">
              {addresses.map((address, index) => (
                <AddressSection addressData={address} key={index} />
              ))}
            </div>
          </motion.div>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={3}
            className="flex flex-column mt-2 py-2 border-top"
          >
            <div className="flex mt-5 qr-code-section">
              {contactInfo.QRCodes.map((qrCode, index) => (
                <LazyLoadImage
                  key={index}
                  src={qrCode}
                  alt="cadd9 二维码 QRCode"
                  className="qr-code-image ml-5"
                />
              ))}
            </div>
            <a
              href={`tel:+86${contactInfo.tel}`}
              className="f-20 font-heading mb-1 contact-tel mt-2"
            >
              Tel: {contactInfo.tel}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="f-20 font-heading-english mb-0 contact-email"
            >
              {contactInfo.email}
            </a>
          </ScrollAnimation>
        </>
      )}

      <ScrollAnimation animateIn="fadeIn" duration={3} className="mt-5">
        <ContactForm />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={3} className="mt-5">
        <MapContainer />
      </ScrollAnimation>
    </div>
  );
};

export default ContactContainer;
