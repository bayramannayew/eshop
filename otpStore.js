// store/otpStore.js
import { create } from 'zustand';
import axios from 'axios';

const useOtpStore = create((set) => ({
  email: '',
  isVerified: false,

  sendOtp: async (email) => {
    try {
      await axios.post('/api/otp', { email });
      set({ email });
    } catch (err) {
      console.error('Ошибка отправки OTP:', err);
    }
  },

  verifyOtp: async (code) => {
    try {
      const res = await axios.post('/api/verify-otp', { email: useOtpStore.getState().email, code });
      if (res.data.success) {
        set({ isVerified: true });
      }
    } catch (err) {
      console.error('Ошибка проверки OTP:', err);
    }
  },
}));

export default useOtpStore;
