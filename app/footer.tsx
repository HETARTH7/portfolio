import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="text-center pb-7">
      <div>&copy; {currentYear} Hetarth</div>
      Powered by{" "}
      <Link href="https://nextjs.org/" className="text-slate-400">
        NextJS
      </Link>{" "}
      and{" "}
      <Link className="text-slate-400" href="https://tailwindcss.com/">
        Tailwind
      </Link>
    </div>
  );
};
export default Footer;
