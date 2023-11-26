import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import imageComponent from "../../../public/right-panel-image.png";


function ImageElement() {
    return (
        <Image
            src={imageComponent}
            width={320}
            height={188}
            alt="Picture of the author"
            quality={100}
        />
    )
}


export function RightSide() {
    return (
        <Flex bg={"#222e35"} direction="column" justify={"center"} align={"center"} w={"100%"} textAlign={"center"} wrap={"nowrap"}>
            <Box w={"80%"} maxW={"560px"} textAlign={"center"} h={"100%"} maxH={"400px"}>
                <Flex justify={"center"}>
                    <ImageElement />
                </Flex>
                <Flex direction={"column"} justify={"center"} align={"center"}>
                    <Text fontSize="36px" fontWeight={300} color={"#e9edefe0"} mt={"38px"}>Baixar o WhatsApp para Windows</Text>
                    <Text fontSize={"14px"} color={"#8696a0"} mt={"14px"}>Baixe o novo app para Windows para fazer chamadas, usar o compartilhamento de tela e ter uma experiência de uso mais rápida.</Text>
                    <Button bg={"#00a884"} p="10px 24px" borderRadius={"24px"} fontWeight={500} w={"30%"} maxWidth={"130px"} mt={"32px"}>Baixar o app</Button>
                </Flex>
            </Box>
            <Text color={"#667781"} fontSize={"14px"} position={"absolute"} bottom={"40px"} >Suas mensagens pessoais são protegidas com a criptografia de ponta a ponta.</Text>
        </Flex>
    )
}