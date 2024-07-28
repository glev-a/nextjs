import SignInValuesType from '../types/SignInValuesType';
import * as yup from 'yup';

export const SIGN_IN_INITIAL_VALUES: SignInValuesType = {
  email: '',
  password: '',
};

export const SIGN_IN_VALIDATION_SCHEMA = yup.object({
  email: yup.string().trim().email('Must be a valid email').required('Email is required'),
  password: yup.string().trim().required('Password is required'),
});
