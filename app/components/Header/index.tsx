import Navigation from "./Navigation";
import { NikeIcon } from "@/app/icon";
import UserToolsSection from "./UserToolsSection";
import Link from "next/link";

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="w-full px-12 relative">
      <div className="flex item-center justify-between h-[3.75rem]">
        <div className="h-full flex-center">
          <Link href="#">
            <NikeIcon width={80} height={80} />
          </Link>
        </div>
        <div className="flex-center">
          <Navigation />
        </div>
        <div className="flex-center">
          <UserToolsSection />
        </div>
      </div>
    </div>
  );
};

export default Header;
