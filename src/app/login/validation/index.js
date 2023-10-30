import * as Yup from "yup";

export const initialValues = {
  username: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  username: Yup.string().required("Requerido"),
  password: Yup.string().required("Requerido"),
});
