import { Input } from "@nextui-org/react";

const InputComponent = ({ type, name, label, formik, placeholder }) => {
  return (
    <div className="w-full">
      <Input
        type={type}
        name={name}
        label={label}
        variant="bordered"
        className="text-white"
        placeholder={placeholder}
        onChange={formik.handleChange}
        value={formik.values[name]}
      />
      {formik.errors[name] && formik.touched[name] ? (
        <div className="text-rose-900 mt-2">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default InputComponent;
