'use client'

import { Icon } from '@chakra-ui/react'
import { IoFilter } from "react-icons/io5";
import { MdGroups, MdMoreVert } from "react-icons/md";
import { BsChatDots, BsClockHistory } from "react-icons/bs";
import { RiChatNewLine } from "react-icons/ri";
import { SearchIcon } from "@chakra-ui/icons"
import { color } from 'framer-motion';

export function GroupIcon() {
    return <Icon as={MdGroups} />
}

export function StatusIcon() {
    return <Icon as={BsClockHistory} />
}

export function ChannelsIcon() {
    return <Icon as={BsChatDots} />
}

export function NewChatIcon() {
    return <Icon as={RiChatNewLine} />

}

export function MoreIcon() {
    return <Icon as={MdMoreVert} />
}
export function FilterIcon() {
    return <Icon as={IoFilter} />
}
export function SearchIco() {
    return <Icon as={SearchIcon} />
}