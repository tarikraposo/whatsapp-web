import { Avatar, HStack, Flex, Box, Text, Stack, StackDivider } from "@chakra-ui/react";
import { CheckIcon } from "../icons";
import { chatData } from "../../messages-data"
import { Divider } from '@chakra-ui/react'

interface MessagesProps {
    name: string;
    message: string;
    src: string;
    date: string;
}



export function Messages({ name, message, src, date, ...rest }: MessagesProps) {
    return (
        <HStack
            _hover={{ color: "#202C33" }}
            cursor={"pointer"}
            py={3}
            {...rest}
        >
            <Avatar mx="3" name={name} src={src}></Avatar>
            <Box flex={'1'} pr={1} borderBottom={"1px solid rgb(134, 150, 160, 0.15)"}
            >

                <Flex justify="space-between">

                    <Box mb={2}>
                        <Text color="#fff" fontSize={"17px"}>{name}</Text>
                        <HStack color="#8696a0">
                            <CheckIcon></CheckIcon>
                            <Text color="#8696a0" fontSize={"14px"}>{message}</Text>
                        </HStack>
                    </Box>
                    <Text color="#8696a0" fontSize={"12px"}>{date}</Text>
                </Flex>
            </Box>

        </HStack>
    )
}

export function ListMessages(props: any) {
    return (
        <Box display={"flex"} >
            <Stack
                w={"100%"}
                overflow={"hidden"}
                spacing={0}
                pr={1}
                {...props}
            >
                {chatData.map((item, index) => (
                    <Messages
                        key={index}
                        src={item.src}
                        date={item.date}
                        message={item.message}
                        name={item.name} />
                ))}
            </Stack>
        </Box>
    )

}