import React, { useState } from 'react';
import useOtpStore from '../store/otpStore';

const VerifyOtpForm = () => {
  const [code, setCode] = useState('');
  const verifyOtp = useOtpStore((s) => s.verifyOtp);
  const isVerified = useOtpStore((s) => s.isVerified);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyOtp(code);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Введите код" value={code} onChange={e => setCode(e.target.value)} />
        <button type="submit">Подтвердить</button>
      </form>
      {isVerified && <p style={{ color: 'green' }}>Вы успешно вошли!</p>}
    </div>
  );
};

export default VerifyOtpForm;
