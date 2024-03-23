import { Table, Text } from "@mantine/core";
import React, { Suspense } from "react";

const LoadingComponent = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Table.Tr>
        <Table.Td colSpan={4}>
          <Text fw={500} ta="center">
            Fetching Data ...
          </Text>
        </Table.Td>
      </Table.Tr>
    </Suspense>
  );
};

export default LoadingComponent;
