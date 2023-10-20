import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePLaforms from "../hooks/usePlatforms";

const PlatformsSelector = () => {
  const { data, error } = usePLaforms();

    if(error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {" "}
        Platforms
        <MenuList>
          {data.map((platforms) => (
            <MenuItem key={platforms.id}>{platforms.name}</MenuItem>
          ))}
        </MenuList>
      </MenuButton>
    </Menu>
  );
};

export default PlatformsSelector;
