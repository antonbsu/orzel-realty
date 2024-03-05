'use client'
import React, { useState, useEffect, FC } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactForm.module.scss';

type ContactFormProps = {
  onSubmitSuccess: () => void;
  onMessageVisibility: (isVisible: boolean) => void;
}

type FormValues = {
  name: string;
  country: string;
  email: string;
  message: string;
}

type MessagePopupProps = {
  isOpen: boolean;
};

const initialValues = {
  name: '',
  country: '',
  // surname: '',
  // phone: '',
  email: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  // phone: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email adress').required('Required'),
  message: Yup.string().required('Required'),
});

const ContactForm: FC<ContactFormProps> = ({ onSubmitSuccess, onMessageVisibility }) => {

  const [values, setValues] = useState<FormValues>(initialValues);

  const [fieldStates, setFieldStates] = useState({
    name: false,
    country: false,
    // surname: false,
    // phone: false,
    email: false,
    message: false,
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const handleFieldChange = (fieldName: keyof FormValues, value: string) => {
    setFieldStates((prevFieldStates) => ({
      ...prevFieldStates,
      [fieldName]: !!value.trim(),
    }));
  };

  const onSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    try {
      await axios.post('/api/contact', values);

      console.log('Form successfully submitted!');
      resetForm();
      setValues(initialValues);
      setIsMessageSent(true);
      setIsMessageVisible(true);

      if (isMessageSent) {
        onSubmitSuccess();
      }

      setTimeout(() => {
        setIsMessageVisible(false);
        onMessageVisibility(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Создаем портал для всплывающего окна
  const MessagePopup: FC<MessagePopupProps> = ({ isOpen }) => {
    if (!isMessageVisible) return null;
    // if (!isOpen) return null;

    return ReactDOM.createPortal(
      <AnimatePresence>
        <div className={styles.popupContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={styles.messagePopup}>
            <div className={styles.messageContent}>
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 20 20" fill="none">
                <path d="M15 7L7.99998 14L4.99994 11M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#ffa800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div className={styles.messageTextWrapper}>
                <h3 className={styles.messageTitle}>Thank you!</h3>
                <p className={styles.messageText}>We received your message and contact soon.</p>
              </div>
              {/* <button onClick={closeMessagePopup}>Close</button> */}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>,
      document.body
    );
  };

  return (
    <div className={styles.formWrapper}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnBlur onSubmit={onSubmit}>
        <Form className={styles.form}>
          <div
            className={styles.inputData}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Field
              className={styles.input}
              type="text"
              id="name"
              name="name"
              onFocus={() => setFieldStates({ ...fieldStates, name: true })}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldChange('name', e.target.value)}
            />
            <label
              htmlFor="name"
              className={`${styles.label} ${fieldStates.name || initialValues.name ? styles.focused : ''}`}
            >
              Full name
            </label>
            <ErrorMessage name="name" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.inputData}>
              <Field
                className={styles.input}
                type="text"
                id="country"
                name="country"
                onFocus={() => setFieldStates({ ...fieldStates, country: true })}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldChange('country', e.target.value)}
              />
              <label
                htmlFor="country"
                className={`${styles.label} ${fieldStates.country || initialValues.country ? styles.focused : ''}`}
              >
                Country of residence
              </label>
              <ErrorMessage name="country" component="div" className={styles.errorMessage} />
            </div>
          </div>

          {/* <div
            className={styles.inputData}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Field
              className={styles.input}
              type="text"
              id="phone"
              name="phone"
              onFocus={() => setFieldStates({ ...fieldStates, phone: true })}
              onBlur={(e) => handleFieldChange('phone', e.target.value)}
            />
            <label
              htmlFor="phone"
              className={`${styles.label} ${fieldStates.phone || initialValues.phone ? styles.focused : ''}`}
            >
              Phone
            </label>
            <ErrorMessage name="phone" component="div" className={styles.errorMessage} />
          </div> */}

          <div
            className={styles.inputData}
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <Field
              className={styles.input}
              type="email"
              id="email"
              name="email"
              onFocus={() => setFieldStates({ ...fieldStates, email: true })}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldChange('email', e.target.value)}
            />
            <label
              htmlFor="email"
              className={`${styles.label} ${fieldStates.email || initialValues.email ? styles.focused : ''}`}
            >
              Email
            </label>
            <ErrorMessage name="email" component="div" className={styles.errorMessage} />
          </div>

          <div
            className={`${styles.inputData} ${styles.textarea}`}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Field
              as="textarea"
              id="message"
              name="message"
              onFocus={() => setFieldStates({ ...fieldStates, message: true })}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleFieldChange('message', e.target.value)}
            />
            <label
              htmlFor="message"
              className={`${styles.labelTextarea} ${fieldStates.message || initialValues.message ? styles.focused : ''}`}
            >
              Message
            </label>
            <ErrorMessage name="message" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.buttonBlock}>
            <button
              className={styles.button}
              type="submit"
            >
              Wyślij wiadomość
            </button>
          </div>
        </Form>
      </Formik>
      <MessagePopup isOpen={isMessageSent} />
    </div>
  );
};

export default ContactForm;