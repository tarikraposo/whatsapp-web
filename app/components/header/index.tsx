import { Flex, Avatar, IconButton, Tooltip, HStack } from '@chakra-ui/react'


import { GroupIcon, StatusIcon, ChannelsIcon, NewChatIcon, MoreIcon } from '../icons'
import React from 'react'

interface CustomToolTipProps {
    label: string,
    icon: React.ReactNode,
}

const iconData = [
    { icon: <GroupIcon />, label: 'Comunidades' },
    { icon: <StatusIcon />, label: ' Status' },
    { icon: <ChannelsIcon />, label: ' Canais' },
    { icon: <NewChatIcon />, label: 'Nova conversa' },
    { icon: <MoreIcon />, label: 'Mais opções' }
]

function CustomIcon({ label, icon, ...rest }: CustomToolTipProps) {
    return (
        <Tooltip
            shouldWrapChildren
            label={label}
            bg={'black'}
            color={'white'}
            fontSize={'xs'}
            {...rest}
        >
            <IconButton aria-label={label}
                fontSize={'24px'}color={'#AEBAC1'} bg={'transparent'} _hover={{ bg: 'transparent' }}>{icon}</IconButton>
        </Tooltip>
    )
}

export default function Header(props: any) {
    return (
        <Flex justify='space-between' borderRight={'1px solid #AEBAC1'} {...props} bg={'#202C33'} py={'3'} px='6' w={'510px'} bgColor={'#202C33'}>
            <Avatar name="perfil" src='../../../assets/avatar.jpg' boxSize='40px' >
            </Avatar>
            <HStack spacing={3}>
                {iconData.map((item, index) => (
                    <CustomIcon key={index} label={item.label} icon={item.icon} />
                ))}
            </HStack>

        </Flex>
    )
}