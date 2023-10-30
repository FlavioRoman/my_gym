"use client";

// ::::: NEXTUI :::::
import {
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";

// ::::: AXIOS :::::
import axios from "axios";

// ::::: REACT / HOOK :::::
import { useState } from "react";

// ::::: FORMIK :::::
import { useFormik } from "formik";

// ::::: ICONO :::::
import { BiSolidErrorAlt } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

// ::::: COMPONENTE :::::
import Alert from "@/components/Alert/page";
import InputComponent from "@/components/Input/Input";

// ::::: VALORES INICIALES / VALIDACIONES :::::
import { initialValues, validationSchema } from "./validations";

export default function ModalAdd({ open, setOpen }) {
  const { onOpenChange } = useDisclosure();
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState(<AiFillCheckCircle />);

  const onSubmit = (values) => {
    axios({
      method: "post",
      url: "http://localhost:3001/api/members/add",
      data: values,
    })
      .then((response) => {
        if (response.status === 201) {
          setOpen(false);
          setAlert(true);
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
      <Modal
        isOpen={open}
        backdrop="opaque"
        className="bg-zinc-950"
        onOpenChange={onOpenChange}
        hideCloseButton={true}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 p-10">
                <h1 className=" text-[30px] text-center text-white">
                  REGISTRAR MIEMBRO
                </h1>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <InputComponent
                  type={"text"}
                  name={"name"}
                  label={"NOMBRE"}
                  formik={formik}
                  placeholder={"Ingrese el nombre"}
                />
                <InputComponent
                  type={"number"}
                  name={"age"}
                  label={"EDAD"}
                  formik={formik}
                  placeholder={"Ingrese la edad"}
                />
                <InputComponent
                  type={"date"}
                  name={"birthdate"}
                  label={"FECHA DE INSCRICION"}
                  formik={formik}
                  placeholder={"Ingrese la fecha inscripción"}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => setOpen(false)}
                >
                  Cerrar
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  onClick={formik.handleSubmit}
                >
                  Registrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
