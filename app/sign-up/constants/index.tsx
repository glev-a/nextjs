import SignUpValuesType from '../types/SignUpValuesType';
import * as yup from 'yup';

export const SIGN_UP_INITIAL_VALUES: SignUpValuesType = {
  email: '',
  password: '',
  repeatPassword: '',
};

export const SIGN_UP_VALIDATION_SCHEMA = yup.object({
  email: yup.string().trim().email('Must be a valid email').required('Email is required'),
  password: yup
    .string()
    .trim()
    .min(8, 'At least 8 charachters required')
    .max(25, 'Max password size is 25 charachters')
    .matches(/.*[0-9].*/, 'Password must contain at least one number')

    .matches(/.*[A-Z].*/, 'Password must contain at least one capital letter')
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .trim()
    .required('Please repeat password')
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
});
