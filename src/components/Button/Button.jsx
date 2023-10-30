import { Button } from "@nextui-org/react";

export default function ButtonComponent({ text }) {
  return (
    <Button
      radius="full"
      className="bg-gradient-to-r from-violet-700 to-violet-950 px-10 py-5 text-white text-[1.2rem] font-normal flex items-center justify-center mx-auto"
    >
      {text}
    </Button>
  );
}
