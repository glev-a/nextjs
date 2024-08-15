import { FormikProps } from 'formik';
import { Input, InputProps } from 'antd';

type Props<T> = {
  label: string;
  fieldName: keyof T;
  formik: FormikProps<T>;
} & Partial<InputProps>;

function FormikInput<T>({ label, fieldName, formik, ...inputProps }: Props<T>) {
  const InputComponent = inputProps?.type === 'password' ? Input.Password : Input;

  return (
    <div className="mb-6 flex w-full flex-col">
      <label htmlFor={fieldName as string} className="mb-1 self-start">
        {label}
      </label>

      <InputComponent
        id={fieldName as string}
        value={formik.values[fieldName] as string}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        {...inputProps}
      />

      {formik.touched[fieldName] && formik.errors[fieldName] && (
        <p className="text-red-500">{formik.errors[fieldName] as string}</p>
      )}
    </div>
  );
}

export default FormikInput;
