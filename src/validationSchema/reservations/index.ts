import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  party_size: yup.number().integer().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
});
