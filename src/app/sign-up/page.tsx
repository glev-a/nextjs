'use client';

import { Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormikInput from '../../components/FormikInput';
import { SIGN_UP_INITIAL_VALUES, SIGN_UP_VALIDATION_SCHEMA } from './constants';

export default function SignUp() {
  const formik = useFormik({
    initialValues: SIGN_UP_INITIAL_VALUES,
    validationSchema: SIGN_UP_VALIDATION_SCHEMA,
    onSubmit: () => {
      // here would be submit
    },
  });

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form className="flex w-72 flex-col items-center px-2" onSubmit={formik.handleSubmit}>
        <FormikInput label="Email" fieldName={'email'} formik={formik} />
        <FormikInput label="Password" fieldName={'password'} formik={formik} type="password" />
        <FormikInput
          label="Repeat password"
          fieldName={'repeatPassword'}
          formik={formik}
          type="password"
        />

        <Button className="w-full" type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
    </main>
  );
}
