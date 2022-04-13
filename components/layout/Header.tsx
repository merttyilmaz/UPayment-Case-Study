import Link from "next/link";

export default function Header() {
  return (
    <div className="p-10">
      <div className="flex justify-between px-4 py-2 mx-auto text-xl italic font-semibold bg-white rounded-lg shadow-md max-w-screen-2xl">
        <div>
          <Link href="/">
            <a>
              <h3>UPayments Store</h3>
            </a>
          </Link>
        </div>
        <div>
          <h3>Register</h3>
        </div>
      </div>
    </div>
  );
}
