import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div className=" flex items-center justify-between  mx-auto">
        <Link href={"/"} className="font-bold text-3xl">
          Job Board
        </Link>
        <nav className="flex gap-4 *:py-3 *:px-5 *:rounded-md *:text-lg">
          <Link href={"/login"} className="bg-teal-300">
            Login
          </Link>
          <Link href={"/new-listing"} className="bg-teal-800 text-white">
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
}
