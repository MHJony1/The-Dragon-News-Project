'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  Eye,
  EyeOff,
  User,
  Image,
  Mail,
  Lock,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: '',
    color: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const passwordValue = watch('password', '');

  const checkPasswordStrength = (value) => {
    let score = 0;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    const levels = [
      { label: '', color: '' },
      { label: 'Weak', color: '#E24B4A' },
      { label: 'Fair', color: '#EF9F27' },
      { label: 'Good', color: '#1D9E75' },
      { label: 'Strong', color: '#4F46E5' },
    ];
    setPasswordStrength({ score, ...levels[score] });
  };

  const handleRegister = async (data) => {
    const { email, name, photo, password } = data;
    console.log(email, name, photo, password);

    const { data: res, error } = await authClient.signUp.email(
      {
        name: name, // required
        email: email, // required
        password: password, // required
        image: photo,
        // callbackURL: '/',
      },
      {
        onSuccess: () => {
          router.push('/login');
        },
      },
    );

    console.log(res, error);

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert('Registration successfull');
    }

    if (!termsAccepted) {
      setTermsError(true);
      return;
    }
  };

  return (
    <div className="min-h-[80vh] bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">
            Create an account
          </h1>
          <p className="text-sm text-slate-500 mb-7">
            Join thousands of users already on the platform.
          </p>

          <hr className="border-slate-100 mb-7" />

          <form
            onSubmit={handleSubmit(handleRegister)}
            className="space-y-5"
            noValidate
          >
            {/* Name + Photo row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <User size={15} strokeWidth={1.8} />
                  </span>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="John Doe"
                    className={`w-full h-10 pl-9 pr-3 rounded-lg bg-slate-50 border text-sm text-slate-800 placeholder-slate-400
                      focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition
                      ${errors.name ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Photo URL */}
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">
                  Photo URL
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Image size={15} strokeWidth={1.8} alt="image" />
                  </span>
                  <input
                    type="text"
                    {...register('photo', {
                      required: 'Photo URL is required',
                    })}
                    placeholder="https://..."
                    className={`w-full h-10 pl-9 pr-3 rounded-lg bg-slate-50 border text-sm text-slate-800 placeholder-slate-400
                      focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition
                      ${errors.photo ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
                  />
                </div>
                {errors.photo && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.photo.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Mail size={15} strokeWidth={1.8} />
                </span>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email',
                    },
                  })}
                  placeholder="you@example.com"
                  className={`w-full h-10 pl-9 pr-3 rounded-lg bg-slate-50 border text-sm text-slate-800 placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition
                    ${errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Lock size={15} strokeWidth={1.8} />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Minimum 8 characters required',
                    },
                    onChange: (e) => checkPasswordStrength(e.target.value),
                  })}
                  placeholder="Minimum 8 characters"
                  className={`w-full h-10 pl-9 pr-10 rounded-lg bg-slate-50 border text-sm text-slate-800 placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition
                    ${errors.password ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                >
                  {showPassword ? (
                    <EyeOff size={15} strokeWidth={1.8} />
                  ) : (
                    <Eye size={15} strokeWidth={1.8} />
                  )}
                </button>
              </div>

              {/* Strength bar */}
              {passwordValue && (
                <div className="mt-2">
                  <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${(passwordStrength.score / 4) * 100}%`,
                        backgroundColor: passwordStrength.color,
                      }}
                    />
                  </div>
                  {passwordStrength.label && (
                    <p
                      className="text-xs mt-1"
                      style={{ color: passwordStrength.color }}
                    >
                      {passwordStrength.label} password
                    </p>
                  )}
                </div>
              )}

              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div
              className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer select-none transition
                ${termsError ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50 hover:border-indigo-300 hover:bg-indigo-50/40'}`}
              onClick={() => {
                setTermsAccepted(!termsAccepted);
                setTermsError(false);
              }}
            >
              {/* Custom checkbox */}
              <div
                className={`mt-0.5 w-4.5 h-4.5 min-w-4.5 rounded border-2 flex items-center justify-center transition
                  ${termsAccepted ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-slate-300'}`}
              >
                {termsAccepted && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <polyline
                      points="1,4 3.5,6.5 9,1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              <p className="text-[13px] text-slate-600 leading-relaxed">
                I agree to the{' '}
                <Link
                  href="/terms"
                  onClick={(e) => e.stopPropagation()}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  onClick={(e) => e.stopPropagation()}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {termsError && (
              <p className="text-xs text-red-500 -mt-3">
                You must accept the terms and conditions to continue.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white text-sm font-semibold rounded-xl
                flex items-center justify-center gap-2 transition disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Register Now
                  <ArrowRight size={16} strokeWidth={2} />
                </>
              )}
            </button>
          </form>

          {/* Login redirect */}
          <p className="text-center text-sm text-slate-500 mt-5">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
