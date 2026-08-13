'use client';

import { FormEvent, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { FormField, inputClass } from '../shared/forms/FormField';
import { useFormSubmit } from '@/utils/useFormSubmit';
import { validateEmail, validatePhone, validateRequired } from '@/utils/formValidation';
import Image from 'next/image';

import golferInRed from '@public/images/shared/golfer-in-red.jpg';

const PLAN_OPTIONS = [
  { value: 'individual', label: 'Individual' },
  { value: 'family', label: 'Family' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'seniorIndividual', label: 'Senior Individual' },
  { value: 'seniorCouple', label: 'Senior Couple' },
];

const CARD_CLASS =
  'max-w-[800px] mx-auto rounded-[20px] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.005),0_2px_2px_rgba(0,0,0,0.01),0_4px_4px_rgba(0,0,0,0.015),0_8px_8px_rgba(0,0,0,0.02),0_16px_16px_rgba(0,0,0,0.025)]';

const CARD_CLASS_FORM =
  'main-container mx-auto rounded-[20px] bg-white';

//  shadow-[0_1px_1px_rgba(0,0,0,0.005),0_2px_2px_rgba(0,0,0,0.01),0_4px_4px_rgba(0,0,0,0.015),0_8px_8px_rgba(0,0,0,0.02),0_16px_16px_rgba(0,0,0,0.025)]

const MembershipInquiryForm = () => {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', plan: '', comments: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { status, errorMessage, submit } = useFormSubmit('membership-inquiry');

  const handleChange =
    (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const validate = () => {
    const next: Record<string, string> = {};
    const nameErr = validateRequired(fields.name, 'Name');
    if (nameErr) next.name = nameErr;
    const emailErr = validateEmail(fields.email);
    if (emailErr) next.email = emailErr;
    const phoneErr = validatePhone(fields.phone);
    if (phoneErr) next.phone = phoneErr;
    const planErr = validateRequired(fields.plan, 'Plan');
    if (planErr) next.plan = planErr;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    await submit(fields);
  };

  if (status === 'success') {
    return (
      <div className={`${CARD_CLASS} p-10 text-center`}>
        <h3 className="text-heading-5 md:text-[1.75rem] pb-2 text-fr-primary-800">Thanks for reaching out!</h3>
        <p className="text-primary/70">We&apos;ve received your membership inquiry and will be in touch soon.</p>
      </div>
    );
  }

  return (
    <RevealAnimation delay={0.1}>
      <form id='membership-form' onSubmit={handleSubmit} noValidate className={`${CARD_CLASS_FORM} p-6 md:p-4 space-y-5 w-full scroll-mt-[7rem]`}>
        <div className="grid grid-cols-6 gap-16">
          <div className="col-span-6 md:col-span-4 flex flex-col justify-center p-0 md:p-6">
            <div className="pb-8">
              <h3 className="text-heading-5 md:text-[2.5rem] text-fr-primary-800 pb-2 -ml-0.5">Interested in a Membership?</h3>
              <p className="text-primary/70">Fill out the form below and we&apos;ll follow up with details.</p>
            </div>

            {status === 'error' && (
              <p className="rounded-[10px] bg-red-50 border border-red-200 text-red-700 text-[14px] px-4 py-3">
                {errorMessage}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField id="name" label="Name" required error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  onChange={handleChange('name')}
                  className={inputClass}
                />
              </FormField>
              <FormField id="email" label="Email" required error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={handleChange('email')}
                  className={inputClass}
                />
              </FormField>
              <FormField id="phone" label="Phone Number" required error={errors.phone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={fields.phone}
                  onChange={handleChange('phone')}
                  className={inputClass}
                />
              </FormField>
              <FormField id="plan" label="Plan of Interest" required error={errors.plan}>
                <select
                  id="plan"
                  name="plan"
                  value={fields.plan}
                  onChange={handleChange('plan')}
                  className={inputClass}>
                  <option value="">Select a plan…</option>
                  {PLAN_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>

            <FormField className='pt-5' id="comments" label="Comments (optional)">
              <textarea
                id="comments"
                name="comments"
                rows={4}
                value={fields.comments}
                onChange={handleChange('comments')}
                className={inputClass}
              />
            </FormField>

            <div className="pt-5">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-md bg-fr-primary-700 border-fr-primary-700 text-white hover:bg-fr-primary-800">
                <span>{status === 'submitting' ? 'Sending…' : 'Submit Inquiry'}</span>
              </button>
            </div>
          </div>
          <div className="col-span-2 hidden md:block">
            <Image className='rounded-xl' src={golferInRed} width={600} height={800} alt="" />
          </div>
        </div>
      </form>
    </RevealAnimation>
  );
};

export default MembershipInquiryForm;
