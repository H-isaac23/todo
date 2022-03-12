import { Link } from "react-router-dom";
import { Button, Text } from "@mantine/core";

interface NavItemProps {
  label: string;
  routeTo: string;
}

export default function NavItem({ label, routeTo }: NavItemProps) {
  return (
    <Button component={Link} to={routeTo} color="black" variant="subtle">
      <Text size="sm">{label}</Text>
    </Button>
  );
}
