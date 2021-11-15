import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {contactData} from '../../data/contact-data';

import 'react-lazy-load-image-component/src/effects/blur.css';
import '../../styles/views/contact.scss';
import MapContainer from '../../components/elements/MapContainer';
import { motion } from 'framer-motion';

const AddressSection = ({addressData}) => {
  const {name, address, image, addressLineTwo} = addressData;

  return (
    <div className="flex flex-column address-section">
      <div className="pb-2 address-photo-container">
        <LazyLoadImage src={image} alt="contacts-photo" effect="blur" className="address-photo"/>
      </div>
      <p className="mt-2 f-20 mb-1">{name}</p>
      <p className="font-heading mb-1">{address}</p>
      <p className="font-heading mb-0">{addressLineTwo}</p>
    </div>
  );
};

const ContactContainer = () => {
  const {/*header,*/ addresses, tel, email} = contactData;
  return (
    <div className="px-10 contact-container">
      {/* <div className="mt-10 py-8 border-top border-bottom">
        <p
          className="font-heading text-center f-32 m-0"
          style={{fontSize: '46px'}}
        >
          {header}
        </p>
      </div> */}
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transiation={{duration: 2}}>
        <div className="mt-5 flex flex-space-between flex-column-md-max full-width address-detail">
          {/* <div className="divide-line full-width border-bottom" /> */}
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
        <p className="f-20 font-heading mb-1">{tel}</p>
        <p className="f-20 font-heading-english mb-0">{email}</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration={3} className="mt-5">
        <MapContainer />
      </ScrollAnimation>
    </div>
  );
};

export default ContactContainer;
