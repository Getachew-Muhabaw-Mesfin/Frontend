import { Paper, Text, ThemeIcon, Group, SimpleGrid } from "@mantine/core";
import classes from "../../styles/StatsGridIcons.module.css";
import { GiOrganigram } from "react-icons/gi";
import { BsPersonVideo3 } from "react-icons/bs";
import { FcDepartment } from "react-icons/fc";


export async function StatsGridIcons() {
 
  const data = [
    {
      title: "CEO",
      value: 1,
      diff: 34,
      desc: "CEO | Chief Executive Officer of the company",
      icon: <BsPersonVideo3 size={40} />,
    },
    {
      title: "Chiefs",
      value: 3,
      diff: -13,
      desc: "Chief | Chief Officers of the company",
      icon: <GiOrganigram size={40} />,
    },
    {
      title: "Departments",
      value: 5,
      diff: 18,
      desc: "Departments | Departments of the company",
      icon: <FcDepartment size={40} />,
    },
  ];
  const stats = data.map((stat) => {
    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="apart">
          <div>
            <Text
              c="dimmed"
              tt="uppercase"
              fw={700}
              fz="xs"
              className={classes.label}
            >
              {stat.title}
            </Text>
            <Text fw={700} fz="xl">
              {stat.value}
            </Text>
          </div>
          <ThemeIcon
            color="gray"
            variant="light"
            style={{
              color: "var(--mantine-color-teal-6)",
            }}
            size={50}
            radius="md"
          >
            {stat.icon}
          </ThemeIcon>
        </Group>
        <Text c="#153B5C" fz="sm" mt="md" fw={800}>
          {stat.desc}
        </Text>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>
    </div>
  );
}

export default StatsGridIcons;
