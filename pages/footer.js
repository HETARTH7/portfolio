const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return <p className="footer">&copy; {currentYear} Hetarth</p>;
};

export default Footer;
