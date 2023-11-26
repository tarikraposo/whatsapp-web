import { HStack, InputGroup, InputLeftElement, Input, Tooltip, IconButton } from "@chakra-ui/react";
import { FilterIcon, SearchIco } from "../icons";




export function Search() {

    return (
        <HStack bg={'#111B21'} px='6' py='3'>
            <InputGroup >
                <Tooltip
                    shouldWrapChildren
                    label="Pesquisar"
                    fontSize={12}
                    border={"1px solid white"}
                    borderRadius={'none'}
                >

                    <InputLeftElement color={'#8696A0'} cursor={"pointer"} aria-label="pesquisar" >
                        <SearchIco />
                    </InputLeftElement>
                </Tooltip>

                <Input bg={'#202C33'} _placeholder={{ color: "#8696a0" }} textAlign="center" placeholder={'Pesquisar ou começar uma nova conversa'} color="white" borderRadius={'8px'} border={'none'}></Input>
                <Tooltip
                    shouldWrapChildren
                    label="Filtro de conversas não lidas"
                    fontSize={12}
                    border={"1px solid white"}
                    borderRadius={'none'}
                >
                    <IconButton _hover={{ bg: "transparent" }} aria-label="Filtro" color={"#8696A0"} bg={'#111B21'} aria-labelledby="Filtro" >
                        <FilterIcon />
                    </IconButton>
                </Tooltip>
            </InputGroup>

        </HStack>
    )
}