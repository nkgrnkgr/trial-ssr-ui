"use client";

import { Box, Button, Center } from "@chakra-ui/react";
import { useState } from "react";

export function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>this is client components</h2>
      <div>
        <Box m="2">
          <Button color="red" onClick={() => setCount(count + 1)}>
            Button
          </Button>
          <Center w="10px" h="10px" bg="blue.500" color="white" p="20">
            {count}
          </Center>
        </Box>
      </div>
    </div>
  );
}
