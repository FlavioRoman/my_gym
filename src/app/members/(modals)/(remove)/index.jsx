// ::::: AXIOS :::::
import axios from "axios";

// ::::: NEXTUI :::::
import {
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";

// ::::: REACT / HOOK :::::
import { useState } from "react";

// ::::: COMPONENTE :::::
import Alert from "@/components/Alert/page";

// ::::: ICONO :::::
import { BiSolidErrorAlt } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

export default function ModalRemove({ id, open, setOpen }) {
  const { onOpenChange } = useDisclosure();
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState(<AiFillCheckCircle />);

  const handleRemove = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:3001/api/members/${id}`,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
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
      .finally(() => {
        setTimeout(() => setAlert(false), 2000);
      });
  };

  return (
    <>
      {/* ::::: ALERT ::::: */}
      <Alert open={alert} icon={icon} message={message} />
      <Modal
        isOpen={open}
        backdrop="opaque"
        className="bg-zinc-950"
        hideCloseButton={true}
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
              <ModalHeader className="flex items-center justify-center flex-col ">
                <h1 className=" text-[30px] text-center text-white">
                  ELIMINAR MIEMBRO
                </h1>
                {/* <BsFillTrash3Fill className="mt-4 text-rose-700" size="60px" /> */}
              </ModalHeader>
              <ModalBody className="flex flex-col gap-2">
                <Button color="primary" onPress={() => handleRemove(id)}>
                  ELIMINAR RESGISTRO
                </Button>
                <Button
                  className="mb-4"
                  color="danger"
                  onPress={() => setOpen(false)}
                >
                  Cerrar
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
