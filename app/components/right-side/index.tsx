import { Box, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import imageComponent from "../../../public/right-panel-image.png";


function ImageElement() {
    return (
        <Image
            src={imageComponent}
            width={320}
            height={188}
            alt="Picture of the author"
        />
    )
}


export function RightSide() {
    return (
        <Center bg={"#222e35"} w="100%">
            <Flex>
                <Box>
                    <ImageElement />
                </Box>
                <Box>

                </Box>
            </Flex>
        </Center>
    )
}