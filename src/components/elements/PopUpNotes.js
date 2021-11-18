import React from 'react';
import {motion} from 'framer-motion';
import routes from '../../configuration/router';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import '../../styles/elements/pop-up-notes.scss';

const PopUpNotes = () => {
  const history = useHistory();
  const location = useLocation();
  function handleIconClicked() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    history.push(routes.contact)
  }

  return (
    <>
      {location.pathname !== '/'&&(
        <motion.div
          className="flex flex-column pop-up-container py-2 px-2"
          whileHover={{y: -20}}
          transition={{duration: 0.5}}
          onClick={() => handleIconClicked()}
        >
          <i className="fas fa-music fa ml-3"></i>
          <p className="f-12 font-heading mb-0 mt-1">点我咨询</p>
        </motion.div>
      )}
    </>
  );
};

export default PopUpNotes;
