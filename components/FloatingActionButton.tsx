import Link from "next/link";

export default function FloatingActionButton() {
  return (
    <Link href={"/createProduct"}>
      <a>
        <div className="fixed flex items-center justify-center bg-black rounded-full cursor-pointer w-14 h-14 bottom-5 right-5">
          <span className="pb-3 text-6xl text-white">+</span>
        </div>
      </a>
    </Link>
  );
}
