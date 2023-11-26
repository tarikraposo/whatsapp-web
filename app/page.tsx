import { Box, Flex } from "@chakra-ui/react";
import { LeftSide } from "./components/left-side";
import { RightSide } from "./components/right-side";

export default function Home() {
  return (
    <Flex  justify={"center"} px={"8%"} py={"20px"} maxH={"100vh"} overflow={"hidden"} bg={"#0c1317"}>
      <LeftSide />
      <RightSide />
    </Flex>
  )
}
