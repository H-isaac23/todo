import { Link } from "react-router-dom";
import { UnstyledButton, Text, Group, ThemeIcon } from "@mantine/core";

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  to: string;
}

export default function NavItem({ icon, label, to }: NavItemProps) {
  return (
    <Link to={to}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color="gray" variant="light">
            {icon}
          </ThemeIcon>
          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}
