import { Box } from '@chakra-ui/react'
import Header from '../header'
import { Search } from '../search'
import { ListMessages } from '../messages'

export function LeftSide() {
    return (
        <Box maxH={"100vh"}
            minWidth={"30%"}
            maxWidth={"40%"}
            bg={"#111b21"}
            borderRight={" 1px solid rgba(134,150,160,0.3)"}
            overflow={"hidden"}
            overflowY="auto"
            sx={
                {
                    '::-webkit-scrollbar': {
                        width: "6px !important",
                        height: "6px !important"
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: "transparent"
                    },
                    '&::-webkit-scrollbar-thumb': {

                        background: "#fff",
                    },

                }
            }


        >
            <Header />
            <Search />
            <Box>
                <ListMessages />
            </Box>
        </Box>
    )
}