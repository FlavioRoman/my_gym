"use client";

// ::::: NEXT UI :::::
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

// ::::: FORMIK :::::
import { useFormik } from "formik";

// ::::: COMPONENTE :::::
import InputComponent from "@/components/Input/Input";

// ::::: VALORES INICIALES / VALIDACIONES :::::
import { initialValues, validationSchema } from "./validations";

export default function ModalAdd({ open, setOpen }) {
  const { onOpenChange } = useDisclosure();

  const onSubmit = (values) => {
    axios({
      method: "post",
      url: "http://localhost:3001/api/members/add",
      data: values,
    }).then((response) => console.log(response));
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <>
      <Modal
        className="bg-zinc-950"
        hideCloseButton={true}
        backdrop="opaque"
        isOpen={open}
        onOpenChange={onOpenChange}
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
                  REGISTRAR HORARIO
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
                  type={"date"}
                  name={"star_date"}
                  label={"FECHA DE INICIO"}
                  formik={formik}
                  placeholder={"FECHA DE INICIO"}
                />
                <InputComponent
                  type={"date"}
                  name={"end_date"}
                  label={"FECHA FIN"}
                  formik={formik}
                  placeholder={"FECHA FIN"}
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
