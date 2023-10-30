import * as Yup from "yup";

export const initialValues = {
  name: "",
  age: "",
  birthdate: "",
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Campo requerido"),
  age: Yup.number()
    .required("Campo requerido")
    .typeError("Debe ingresar un valor numerico"),
  birthdate: Yup.string().required("Campo requerido"),
});
