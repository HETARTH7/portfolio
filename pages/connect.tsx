export default function Connect() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div id="connect" className="text-center">
      <p>&copy; {currentYear} Hetarth</p>
      Made with Tailwindcss and NextJS
    </div>
  );
}
