import { Link } from "@remix-run/react";
import { useState } from 'react';
import { Navbar, Text, ThemeIcon, ScrollArea, Box, ActionIcon, Group, UnstyledButton } from '@mantine/core';
import { IconSun, IconMoonStars, IconSquareRoundedChevronsLeftFilled, IconGitPullRequest, IconAlertCircle, IconMessages, IconDatabase } from '@tabler/icons-react';
import { MenuProps } from '~/models/allModel';

const MainLink = ({icon, color, label, link}: MenuProps) => {
  return (
    <UnstyledButton
      sx={{
        display: 'block',
        width: '100%',
        padding: '0.4rem',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#E5BA73'
        },
      }}
    > 
      <Link to={link} id="linksmenu">
        <Group sx={{padding: '0.5rem', marginLeft: '0.5rem'}}>
            <ThemeIcon color={color} variant="light">
              {icon}
            </ThemeIcon>
            <Text size="sm">{label}</Text>
        </Group>
      </Link>
    </UnstyledButton>
  )
}

const data = [
  { icon: <IconGitPullRequest size="1rem" />, color: 'blue', label: 'Chat', link: '/chat' },
  { icon: <IconAlertCircle size="1rem" />, color: 'teal', label: 'Open Issues', link: '#' },
  { icon: <IconMessages size="1rem" />, color: 'violet', label: 'Discussions', link: '#' },
  { icon: <IconDatabase size="1rem" />, color: 'grape', label: 'Dashboard', link: '/dashboard/login' },
];

const NavbarDashboard = () => {
  const [opened, setOpened] = useState(false);
  const menu = data.map((link) => <MainLink {...link} key={link.label} />)

  return (
    <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 280 }}>
      <Navbar.Section 
        sx={{
            borderBottom: "0.1rem solid #fff",
            backgroundColor: '#2c5dad'
        }}
      >
        <Box sx={{height: '3.5rem'}}>
          <Group position="center" >
            <Link to='/'><img src='/images/logo/logo.png' alt='Logo' style={{height: '50px'}}/></Link>
            <ActionIcon variant='default' size={30}>
              <IconSquareRoundedChevronsLeftFilled size="1rem" />
            </ActionIcon>
          </Group>
        </Box>
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea} sx={{
        backgroundColor: '#2c5dad;'
      }}>
        <Box>
          {menu}
        </Box>
      </Navbar.Section>
    </Navbar>
  )
}

export default NavbarDashboard