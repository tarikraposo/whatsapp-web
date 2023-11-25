import { Avatar, HStack, Flex, Box, Text, Stack, StackDivider } from "@chakra-ui/react";
import { CheckIcon } from "../icons";
import { chatData } from "../../messages-data"

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
            <Box flex={'1'} pr={4}>
                <Flex justify="space-between">
                    <Box>
                        <Text color="#fff">{name}</Text>
                        <HStack color="white">
                            <CheckIcon></CheckIcon>
                            <Text color="#AEBAC1">{message}</Text>
                        </HStack>
                    </Box>
                    <Text color="#AEBAC1">{date}</Text>
                </Flex>
            </Box>

        </HStack>
    )
}

export function ListMessages(props:any) {
    return (
        <Stack
            spacing={0}
            pr={1}
            divider={<StackDivider w='80%'
                alignSelf='flex-end' />}
            {...props}
            bg={'#111B21'}
            w={'33%'}
            borderRight={"1px solid #AEBAC1"}
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
    )

}