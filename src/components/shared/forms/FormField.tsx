'use client';

import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}

export const inputClass =
  'w-full rounded-[10px] shadow-[inset_0_0_0px_1px_rgba(0,0,0,.06)] bg-white px-4 py-2.5 text-[15px] text-black outline-none transition-colors focus:border-fr-primary-600 focus:ring-2 focus:ring-fr-primary-600/15 disabled:opacity-50';

export const FormField = ({ id, label, error, required, className, children }: FormFieldProps) => (
  <div className={cn('flex flex-col', className)}>
    <label htmlFor={id} className="area-600 text-tagline-3 text-black/85 block mb-2">
      {label}
      {required && <span className="text-fr-primary-600"> *</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="text-[13px] text-red-600 mt-1">
        {error}
      </p>
    )}
  </div>
);
