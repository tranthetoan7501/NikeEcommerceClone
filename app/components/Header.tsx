import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <Button className="w-full rounded-none bg-black hover:bg-black">
          <Link
            href="https://oeforgood.com/blogs/news/oe-enfile-ses-bottes-et-devient-vigneron"
            className="tracking-[.0625rem] text-[.8125rem] font-bold"
          >
            On vient d'acheter notre 1er Domaine Oé dans le sud de la France ! 🥳
          </Link>
          <ArrowRightIcon />
        </Button>
      </div>
      <div></div>
    </div>
  );
}
