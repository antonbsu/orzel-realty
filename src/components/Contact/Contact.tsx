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

  const focusInputAndLabel = (id: string) => {
    const input = document.getElementById(id) as HTMLInputElement;
    if (input) {
      input.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={styles.inputWrapper}
        onClick={() => focusInputAndLabel('name')}
      >
        <label htmlFor='name' className={styles.label} onClick={(e) => e.stopPropagation()}>
          Имя
        </label>
        <input
          id='name'
          type='text'
          className={`${styles.inputField} w-full rounded-md`}
          {...register('name', { required: true })}
        />
      </div>
      <div
        className={styles.inputWrapper}
        onClick={() => focusInputAndLabel('phone')}
      >
        <label htmlFor='phone' className={styles.label} onClick={(e) => e.stopPropagation()}>
          Телефон
        </label>
        <input
          id='phone'
          type='phone'
          className={`${styles.inputField} w-full rounded-md`}
          {...register('phone', { required: true })}
        />
      </div>
      <div
        className={styles.inputWrapper}
        onClick={() => focusInputAndLabel('email')}
      >
        <label htmlFor='email' className={styles.label} onClick={(e) => e.stopPropagation()}>
          Email
        </label>
        <input
          id='email'
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