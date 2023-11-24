import { Avatar, HStack, Flex, Box, Text, Stack, StackDivider } from "@chakra-ui/react";
import { CheckIcon } from "../icons";
import { DatePicker } from "@orange_digital/chakra-datepicker";

interface MessagesProps {
    name: string;
    message: string;
    src: string;
    date: Date;
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
            <Box>
                <Flex justify="space-between">
                    <Box>
                        <Text>{name}</Text>
                        <HStack>
                            <CheckIcon></CheckIcon>
                            <Text color="#AEBAC1">{message}</Text>
                        </HStack>
                    </Box>
                    <DatePicker initialValue={new Date(date)} />
                </Flex>
            </Box>

        </HStack>
    )


}
export function ListMessages() {
    return (
        <Stack spacing={0} pr={1} divider={<StackDivider w={'80%'} alignSelf={'flex-end'}/>}/>
        

       
    )

}