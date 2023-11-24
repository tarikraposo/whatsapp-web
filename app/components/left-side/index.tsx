import { HStack, InputGroup, InputLeftElement, Input, Tooltip, IconButton, extendTheme } from "@chakra-ui/react";
import { FilterIcon, SearchIco } from "../icons";
import { MdLabel } from "react-icons/md";



export function Search() {

    return (
        <HStack bg={'#111B21'} px='6' py='3' w={"33%"} borderRight={'1px solid #AEBAC1'}>
            <InputGroup >
                <Tooltip
                    shouldWrapChildren
                    label="Pesquisar"
                    fontSize={12}
                    border={"1px solid white"}
                    borderRadius={'none'}
                >

                    <InputLeftElement color={'white'} cursor={"pointer"} aria-label="pesquisar" >
                        <SearchIco />
                    </InputLeftElement>
                </Tooltip>

                <Input bg={'#202C33'} textAlign="center" placeholder={'Pesquisar ou começar uma nova conversa'} color="white" borderRadius={'20px'} border={'none'}></Input>
                <Tooltip
                    shouldWrapChildren
                    label="Filtro de conversas não lidas"
                    fontSize={12}
                    border={"1px solid white"}
                    borderRadius={'none'}
                >
                    <IconButton _hover={{ bg: "transparent" }} aria-label="Filtro" color={"white"} bg={'#111B21'} aria-labelledby="Filtro">
                        <FilterIcon />
                    </IconButton>
                </Tooltip>
            </InputGroup>

        </HStack>
    )
}