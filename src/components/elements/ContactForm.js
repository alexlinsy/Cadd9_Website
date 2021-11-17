import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import '../../styles/elements/contact-form.scss';
const ContactForm = () => {
  const {register, handleSubmit} = useForm();
  const [result, setResult] = useState('');
  const onSubmit = data => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column contact-form">
      <input {...register('name')} placeholder="你的名字" className="contact-form-name"/>
      <input {...register('phone')} placeholder="联系电话/微信" className="contact-form-tel"/>
      <textarea {...register('info')} placeholder="音乐背景/目标" rows="6" cols="50" className="contact-form-info"/>
      <p>{result}</p>
      <input type="submit" value="提交" />
    </form>
  );
};
export default ContactForm;
