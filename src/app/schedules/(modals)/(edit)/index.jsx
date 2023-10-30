import {
  Modal,
  Input,
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";

export default function ModalEdit({ open, setOpen }) {
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
              <ModalHeader className="flex flex-col gap-1 p-10">
                <h1 className=" text-[30px] text-center text-white">
                  REGISTRAR MIEMBRO
                </h1>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <Input
                  type="text"
                  label={"Nombre"}
                  placeholder="Ingrese un nombre"
                />
                <Input
                  type="number"
                  label={"Edad"}
                  placeholder="Ingrese la edad"
                />
                <Input
                  type="date"
                  label={"Fecha inscripcion"}
                  placeholder="Ingrese fecha de inscripcion"
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
                <Button color="primary" onPress={onClose}>
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
