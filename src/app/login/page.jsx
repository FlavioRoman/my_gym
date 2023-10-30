"use client";

// ::::: AXIOS :::::
import axios from "axios";

// ::::: REACT / HOOK :::::
import { useState } from "react";

// ::::: FORMIK :::::
import { useFormik } from "formik";

// ::::: NEXTJS :::::
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

// ::::: ICONO :::::
import { IoPeopleCircle } from "react-icons/io5";
import { BiSolidErrorAlt } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

// ::::: COMPONENTE :::::
import Alert from "@/components/Alert/page";
import InputComponent from "@/components/Input/Input";

// ::::: VALORES INICIALES / VALIDACIONES :::::
import { initialValues, validationSchema } from "./validation";

const page = () => {
  const router = useRouter();
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState(<AiFillCheckCircle />);

  const onSubmit = (values) => {
    axios({
      method: "post",
      url: "http://localhost:3001/api/login",
      data: values,
    })
      .then((response) => {
        if (response.status === 200) {
          setOpen(false);
          setAlert(true);
          router.push("/members");
          setMessage(response?.data?.message);
          setIcon(<AiFillCheckCircle size={90} color="white" />);
        }
      })
      .catch((error) => {
        console.log(error);
        setIcon(<BiSolidErrorAlt size={90} color="white" />);
      })
      .finally(() => setTimeout(() => setAlert(false), 2000));
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <>
      {/* ::::: ALERT ::::: */}
      <Alert open={alert} icon={icon} message={message} />
      <div className="animate__animated animate__fadeInDown flex items-center justify-center m-2">
        <div className="bg-zinc-950 rounded-lg w-[450px] max-w-full relative px-10 pb-20 pt-5">
          <h1 className="text-white text-center text-[30px] font-bold mb-2">
            INICIAR SESION
          </h1>
          <div className="flex items-center justify-center">
            <IoPeopleCircle size={150} color="white" />
          </div>
          <div className="w-full my-4">
            <InputComponent
              type="text"
              name={"username"}
              label="USUARIO"
              formik={formik}
              placeholder="Ingrese su usuario"
            />
          </div>
          <div className="w-full">
            <InputComponent
              type="password"
              name={"password"}
              label="CONTRASEÑA"
              formik={formik}
              placeholder="Ingrese su contraseña"
            />
          </div>
          <div className="flex items-center justify-center mt-3">
            <a
              href="#"
              className="text-slate-500 border-solid border-slate-500 border-b-1"
            >
              Recuperar contraseña
            </a>
          </div>
          <div className="flex flex-col w-full gap-2 mt-5">
            <Button
              type="submit"
              color="primary"
              onClick={formik.handleSubmit}
              className="fond-bold text-[1rem] "
            >
              INICIAR
            </Button>
            <Button
              type="click"
              color="danger"
              onClick={() => router.push("/", { scroll: false })}
              className="fond-bold text-[1rem]"
            >
              VOLVER
            </Button>
            <div className="flex items-center justify-center absolute left-0 right-0 bottom-5 gap-1">
              <p className="text-white">Aun no a solicitado una cuenta?</p>{" "}
              <span className="text-violet-700 font-bold border-solid border-b-2 border-violet-700">
                Solicitar
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
