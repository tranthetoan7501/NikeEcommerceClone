import { Button } from "@/components/ui/button";
import SearchForm from "./SearchForm";
import { FavoritesIcon, ShoppingCartIcon } from "@/app/icon";

interface Props {}

const UserToolsSection = (props: Props) => {
  return (
    <div className="flex items-center gap-2">
      <SearchForm />
      <Button variant="outline" size="icon">
        <FavoritesIcon />
      </Button>
      <Button variant="outline" size="icon">
        <ShoppingCartIcon />
      </Button>
    </div>
  );
};

export default UserToolsSection;
