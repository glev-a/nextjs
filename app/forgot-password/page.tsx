'use client';

import { Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormikInput from '../components/FormikInput';
import { FORGOT_PASSWORD_INITIAL_VALUES, FORGOT_PASSWORD_VALIDATION_SCHEMA } from './constants';

export default function SignUp() {
  const formik = useFormik({
    initialValues: FORGOT_PASSWORD_INITIAL_VALUES,
    validationSchema: FORGOT_PASSWORD_VALIDATION_SCHEMA,
    onSubmit: () => {
      // here would be submit
    },
  });

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form className="flex w-72 flex-col items-center px-2" onSubmit={formik.handleSubmit}>
        <FormikInput label="Email" fieldName={'email'} formik={formik} />

        <Button className="w-full" type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
    </main>
  );
}
