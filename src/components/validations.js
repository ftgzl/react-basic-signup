import * as yup from 'yup';

const validations = yup.object().shape({
  email: yup.string().email('Geçerli bir email girin.').required('Zorunlu alan!'),
  password: yup.string().min(5, 'Şifre en az 5 karakter olmalıdır.').required(),
  passwordConfirm: yup.string().oneOf([yup.ref('password')]).required()
});

export default validations;