import { Box } from '@chakra-ui/react'
import Header from '../header'
import { Search } from '../search'
import { ListMessages } from '../messages'

export function LeftSide() {
    return (
        <Box maxH={"100vh"} overflow={"hidden"} w={"70vh"} bg={"#111b21"} borderRight={" 1px solid rgba(134,150,160,0.3)"}>
            <Header />
            <Search />
            <ListMessages />
        </Box>
    )
}