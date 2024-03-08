'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

import styles from './Contact.module.scss';

export type FormData = {
  name: string;
  phone: string;
  email: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  const focusInput = (id: string) => {
    document.getElementById(id)?.focus();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputWrapper} onClick={() => focusInput('name')}>
        <label htmlFor='name' className={styles.label}>
          Imię
        </label>
        <input
          id='name'
          type='text'
          className={`${styles.inputField} w-full rounded-md`}
          {...register('name', { required: true })}
        />
      </div>
      <div className={styles.inputWrapper} onClick={() => focusInput('phone')}>
        <label
          htmlFor='phone'
          className={styles.label}
        >
          Telefon
        </label>
        <input
          type='phone'
          className={`${styles.inputField} w-full rounded-md`}
          {...register('phone', { required: true })}
        />
      </div>
      <div className={styles.inputWrapper} onClick={() => focusInput('email')}>
        <label
          htmlFor='email'
          className={styles.label}
        >
          Email
        </label>
        <input
          type='email'
          className={`${styles.inputField} w-full rounded-md`}
          {...register('email', { required: true })}
        />
      </div>
      <div>
        <button className={styles.sentBtn}>
          Wyślij wiadomość
        </button>
      </div>
    </form>
  );
};

export default Contact;