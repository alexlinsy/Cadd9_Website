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

  //initial LeanCould Object
  const AV = require('leancloud-storage');
  AV.init({
    appId: 'XlWJyFeVJ8e7bGybJlcsflxY-gzGzoHsz',
    appKey: 'MgbD2Nhoa4jMCPW98vFoKHwV',
    serverURL: 'https://xlwjyfev.lc-cn-n1-shared.com',
  });
  localStorage.setItem('debug', 'leancloud*');

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
        console.log(error);
      }
    );
  };

  function handleNameChange(e) {
    e.preventDefault();
    setName(e.target.value);
    setShowSuccessMessage(false);
  }
  function handlePhoneChange(e) {
    e.preventDefault();
    setPhone(e.target.value);
    setShowSuccessMessage(false);
  }
  function handleInfoChange(e) {
    e.preventDefault();
    setInfo(e.target.value);
    setShowSuccessMessage(false);
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
    </form>
  );
};
export default ContactForm;
