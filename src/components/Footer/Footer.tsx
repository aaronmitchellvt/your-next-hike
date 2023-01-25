import { NextPage } from "next";

const Footer: NextPage<FooterProps> = ({ email, phone }) => {

  return (
    <>
      <h3 className="underline">{email} - {phone}</h3>
    </>
  )
}

export default Footer;
export interface FooterProps {
  email?: string,
  phone?: string
}