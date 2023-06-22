import { FcAddressBook, FcAssistant, FcHome } from "react-icons/fc";

const iconSize = 23;
export const contactOptions = [
  {
    name: "Number",
    value: "202-555-0100",
    icon: <FcAssistant size={iconSize} />,
  },
  {
    name: "Email",
    value: "bitcoinPublic@gmail.com",
    icon: <FcAddressBook size={iconSize} />,
  },
  {
    name: "Location",
    value: "Washington, DC",
    icon: <FcHome size={iconSize} />,
  },
];
