import { Box } from "@chakra-ui/react";
import Header from "./components/header";
import { Search } from "./components/left-side";
import { ListMessages } from "./components/messages";

export default function Home() {
  return (
    <Box>
      <Header />
      <Search/>
      <ListMessages />
    </Box>
  )
}
