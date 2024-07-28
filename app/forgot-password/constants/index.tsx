import ForgotPasswordValuesType from '../types/ForgotPasswordValuesType';
import * as yup from 'yup';

export const FORGOT_PASSWORD_INITIAL_VALUES: ForgotPasswordValuesType = {
  email: '',
};

export const FORGOT_PASSWORD_VALIDATION_SCHEMA = yup.object({
  email: yup.string().trim().email('Must be a valid email').required('Email is required'),
});
