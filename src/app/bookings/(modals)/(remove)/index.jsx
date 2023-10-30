import {
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { BsFillTrash3Fill } from "react-icons/bs";

export default function ModalRemove({ open, setOpen }) {
  const { onOpenChange } = useDisclosure();
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
              <ModalHeader className="flex items-center justify-center flex-col ">
                <h1 className=" text-[30px] text-center text-white">
                  ELIMINAR MIEMBRO
                </h1>
                <BsFillTrash3Fill className="mt-4 text-rose-700" size="60px" />
              </ModalHeader>
              <ModalBody className="flex flex-col gap-2">
                <Button color="primary" onPress={onClose}>
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
