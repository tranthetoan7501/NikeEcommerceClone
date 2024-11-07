import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <Button className="w-full rounded-none bg-black hover:bg-black group">
          <Link
            href="https://oeforgood.com/blogs/news/oe-enfile-ses-bottes-et-devient-vigneron"
            className="tracking-[.0625rem] text-[.8125rem] font-bold flex items-center justify-center gap-3"
          >
            On vient d'acheter notre 1er Domaine Oé dans le sud de la France ! 🥳
            <ArrowRightIcon className="transition-transform duration-300 ease-in-out transform group-hover:scale-x-125 origin-left" />
          </Link>
        </Button>
      </div>
      <div></div>
    </div>
  );
}
