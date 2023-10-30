import {
  Modal,
  Button,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";

export default function Alert({ open, icon, message }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={open}
        onOpenChange={onOpenChange}
        hideCloseButton={true}
        className="bg-zinc-950 p-5"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h1 className="text-center text-white font-bold">{message}</h1>
                <div className="flex items-center justify-center">{icon}</div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
