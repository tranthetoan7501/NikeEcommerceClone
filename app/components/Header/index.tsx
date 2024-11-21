import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import { NikeIcon } from "@/app/icon";
import UserToolsSection from "./UserToolsSection";

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="w-full px-12">
      <div className="flex item-center justify-between h-[3.75rem]">
        <div className="h-full flex items-center justify-center">
          <Button variant="outline" size="icon">
            <NikeIcon />
          </Button>
        </div>
        <Navigation />
        <UserToolsSection />
      </div>
    </div>
  );
};

export default Header;
