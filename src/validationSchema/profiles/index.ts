import * as yup from 'yup';

export const profileValidationSchema = yup.object().shape({
  bio: yup.string().nullable(),
  interests: yup.string().nullable(),
  relationship_status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
