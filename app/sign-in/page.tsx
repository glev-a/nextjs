'use client';

import { Button } from 'antd';
import Link from 'next/link';
import { useFormik } from 'formik';

import FormikInput from '../components/FormikInput';
import { SIGN_IN_INITIAL_VALUES, SIGN_IN_VALIDATION_SCHEMA } from './constants';

export default function SignIn() {
  const formik = useFormik({
    initialValues: SIGN_IN_INITIAL_VALUES,
    validationSchema: SIGN_IN_VALIDATION_SCHEMA,
    onSubmit: () => {
      // here would be submit
    },
  });

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex w-72 flex-col items-center px-2">
        <form className="mb-4 flex w-full flex-col items-center" onSubmit={formik.handleSubmit}>
          <FormikInput label="Email" fieldName={'email'} formik={formik} />
          <FormikInput label="Password" fieldName={'password'} formik={formik} type="password" />

          <Button className="w-full" type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
        <Link href={'/forgot-password'}>
          <p className="text-xs text-cyan-200">Forgot password?</p>
        </Link>
      </div>
    </main>
  );
}
