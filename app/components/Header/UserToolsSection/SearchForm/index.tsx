import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface Props {}

const SearchForm = (props: Props) => {
  return (
    <div className="relative">
      <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search" className="pl-8" />
    </div>
  );
};

export default SearchForm;
