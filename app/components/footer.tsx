import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="left-0 bottom-0 relative text-center">
      <div>&copy; {currentYear} Hetarth</div>
      Powered by{" "}
      <Link
        target="_blank"
        href="https://nextjs.org/"
        className="text-blue-600 hover:text-blue-900"
      >
        NextJS
      </Link>{" "}
      and{" "}
      <Link
        target="_blank"
        className="text-blue-600 hover:text-blue-900"
        href="https://tailwindcss.com/"
      >
        Tailwind
      </Link>
    </div>
  );
};
export default Footer;
