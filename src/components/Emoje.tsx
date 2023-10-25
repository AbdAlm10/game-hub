import meh from "../assets/meh.webp";
import bulls from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoje = ({ rating }: Props) => {
  if (rating < 3) return null;

  const imojes: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bulls, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...imojes[rating]} marginTop={1}/>;
};

export default Emoje;
