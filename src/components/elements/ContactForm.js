import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {motion} from 'framer-motion';
import '../../styles/elements/contact-form.scss';
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [info, setInfo] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  //initial LeanCould Object
  const AV = require('leancloud-storage');
  AV.init({
    appId: process.env.REACT_APP_LEANCLOUD_APP_ID,
    appKey: process.env.REACT_APP_LEANCLOUD_API_KEY,
    serverURL: process.env.REACT_APP_LEANCLOUD_API_URL,
  });

  const FormResult = AV.Object.extend('FormResult');
  const formResult = new FormResult();

  const onSubmit = data => {
    setShowSpinner(true);
    formResult.set('newFormResult', JSON.stringify(data));
    formResult.save().then(
      result => {
        setName('');
        setPhone('');
        setInfo('');
        setShowSpinner(false);
        setShowSuccessMessage(true);
        console.log(`保存成功。objectId：${result.id}`);
      },
      error => {
        setShowErrorMessage(true);
        setErrorMessage(error);
      }
    );
  };

  function handleNameChange(e) {
    e.preventDefault();
    setName(e.target.value);
    setShowSuccessMessage(false);
    setShowErrorMessage(false);
  }
  function handlePhoneChange(e) {
    e.preventDefault();
    setPhone(e.target.value);
    setShowSuccessMessage(false);
    setShowErrorMessage(false);
  }
  function handleInfoChange(e) {
    e.preventDefault();
    setInfo(e.target.value);
    setShowSuccessMessage(false);
    setShowErrorMessage(false);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-column contact-form"
    >
      <input
        {...register('name', {required: true, maxLength: 10})}
        placeholder="你的名字"
        className="contact-form-name"
        onChange={event => handleNameChange(event)}
        value={name}
      />
      {errors?.name?.type === 'required' && (
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transaction={{duration: 1}}
          className="error-form-message"
        >
          请填写您的名字
        </motion.p>
      )}
      {errors?.name?.type === 'maxLength' && (
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transaction={{duration: 1}}
          className="error-form-message"
        >
          名字长度过长
        </motion.p>
      )}
      <input
        {...register('phone', {required: true, maxLength: 25})}
        placeholder="联系电话/微信"
        className="contact-form-tel"
        onChange={event => handlePhoneChange(event)}
        value={phone}
      />
      {errors?.phone?.type === 'required' && (
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transaction={{duration: 1}}
          className="error-form-message"
        >
          请填写您的电话或微信
        </motion.p>
      )}
      {errors?.phone?.type === 'maxLength' && (
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transaction={{duration: 1}}
          className="error-form-message"
        >
          电话/微信号码长度过长
        </motion.p>
      )}
         {errors?.phone?.type === 'maxLength' && (
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transaction={{duration: 1}}
          className="error-form-message"
        >
          电话/微信号码长度过长
        </motion.p>
      )}
      <textarea
        {...register('info', {required: true})}
        placeholder="音乐背景/目标"
        rows="6"
        cols="50"
        className="contact-form-info"
        onChange={event => handleInfoChange(event)}
        value={info}
      />
      {errors?.info?.type === 'required' && (
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transaction={{duration: 1}}
          className="error-form-message"
        >
          请填写您的音乐背景/目标
        </motion.p>
      )}
      <button type="submit" className="submit-button">
        {showSpinner ? (
          <i className="fas fa-spinner fa-spin fa-2x"></i>
        ) : (
          '提交'
        )}
      </button>
      {showSuccessMessage && (
        <p className="font-heading f-20 mt-2 mb-0 leading-normal">
          感谢您的咨询！我们将尽快回复您的留言
        </p>
      )}
       {showErrorMessage && (
        <p className="font-heading f-20 mt-2 mb-0 leading-normal">
          非常抱歉 我们的系统出现了一些故障 请稍后重试提交 {errorMessage}
        </p>
      )}
    </form>
  );
};
export default ContactForm;
