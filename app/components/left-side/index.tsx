import { HStack, InputGroup, InputLeftElement, Input, Tooltip, IconButton, extendTheme } from "@chakra-ui/react";
import { FilterIcon, SearchIco} from "../icons";



export function Search() {

    return (
        <HStack bg={'#111B21'} px='4' py='2' w={'520px'}>
            <InputGroup >
                <InputLeftElement color={'white'}>
                    <SearchIco/>
                </InputLeftElement>
                <Input bg={'#202C33'} textAlign="center" placeholder={'Pesquisar ou começar uma nova conversa'} color="white" borderRadius={'20px'} border={'none'}></Input>
                <Tooltip
                    shouldWrapChildren
                    placeholder="Teste" >
                    <IconButton aria-label="Filtro" color={"white"} bg={'#111B21'}>
                        <FilterIcon />
                    </IconButton>
                </Tooltip>
            </InputGroup>

        </HStack>
    )
}