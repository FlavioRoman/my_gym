// ::::: NEXTJS :::::
import Link from "next/link";

// ::::: ICONOS :::::
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const links = [
  {
    id: 1,
    url: "https://www.facebook.com/",
    icon: <BsFacebook color="white" size={20} />,
  },
  {
    id: 2,
    url: "https://www.twitter.com/",
    icon: <AiFillInstagram color="white" size={20} />,
  },
  {
    id: 3,
    url: "https://www.instagram.com/",
    icon: <AiFillTwitterCircle color="white" size={20} />,
  },
];

const FooterComponent = () => {
  return (
    <div className="animate__animated animate__fadeInUp flex items-center justify-between w-[100%] h-[50px] px-2 z-50">
      <div>
        <p className="text-[0.8rem] text-white">
          Created by{" "}
          <span className="text-violet-700 font-bold">Flavio Roman</span>{" "}
        </p>
      </div>
      <ul className="flex items-center gap-x-1">
        {links.map((item) => (
          <Link className="rounded-full p-1" key={item.id} href={item.url}>
            {item.icon}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterComponent;
