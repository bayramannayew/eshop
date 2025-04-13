import React, { useState } from 'react';
import useOtpStore from '../store/otpStore';

const SendOtpForm = () => {
  const [email, setEmail] = useState('');
  const sendOtp = useOtpStore((s) => s.sendOtp);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOtp(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit">Получить код</button>
    </form>
  );
};

export default SendOtpForm;
