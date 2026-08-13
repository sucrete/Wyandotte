'use client';

import { useState } from 'react';

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function useFormSubmit(formType: string) {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = async (fields: Record<string, string>) => {
    setStatus('submitting');
    setErrorMessage('');
    try {
      const res = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType, ...fields }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong sending that. Please try again, or call us directly.');
    }
  };

  return { status, errorMessage, submit };
}
