import { useRouter } from "next/router";

interface NavbarProps {
  btnText: string;
  btnRoute: string;
};

const Navbar = ({btnText, btnRoute}: NavbarProps) => {
  const router = useRouter();
  return (
    <div className="w-full bg-neutral-800 text-white flex justify-between p-4 items-center">
      <h1 className="text-2xl sm:text-4xl font-bold">
        TIC TAC TOE
      </h1>

      <button
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg font-bold"
        onClick={() => router.push(btnRoute)}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Navbar;
