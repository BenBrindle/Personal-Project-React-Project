import React from 'react'
import { SidebarContainer, Icon, ClosedIcon, SidebarWrapper, SidebarLink, SidebarRoute, SidebarWrap, SidebarMenu } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon></ClosedIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>About</SidebarLink>
                    <SidebarLink to='discover'>Discover</SidebarLink>
                    <SidebarLink to='services'>Services</SidebarLink>
                    <SidebarLink to='Signup'>Sign Up</SidebarLink>
                </SidebarMenu>
                <SidebarWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SidebarWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
