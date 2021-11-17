import React from 'react';
import {motion} from 'framer-motion';
import routes from '../../configuration/router';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import '../../styles/elements/pop-up-notes.scss';

const PopUpNotes = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
      {location.pathname !== '/contact' && (
        <motion.div
          className="flex flex-column pop-up-container py-2 px-2"
          whileHover={{y: -20}}
          transition={{duration: 0.5}}
          onClick={() => history.push(routes.contact)}
        >
          <i className="fas fa-music fa-2x ml-3"></i>
          <p className="f-16 font-heading mb-0 mt-1">点我咨询</p>
        </motion.div>
      )}
    </>
  );
};

export default PopUpNotes;
