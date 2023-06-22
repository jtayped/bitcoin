import { FcAddressBook, FcAssistant, FcHome } from "react-icons/fc";

export const contactOptions = [
  {
    name: "Number",
    value: "202-555-0100",
    icon: <FcAssistant />,
  },
  {
    name: "Email",
    value: "bitcoinPublic@gmail.com",
    icon: <FcAddressBook />,
  },
  {
    name: "Location",
    value: "Washington, DC",
    icon: <FcHome />,
  },
];
