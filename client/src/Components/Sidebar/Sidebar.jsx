import React, {useState} from 'react';
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu.js";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft.js";
import ChevronRightIcon from "@mui/icons-material/ChevronRight.js";
import {Link} from "react-router-dom";
import {styled, useTheme} from "@mui/material/styles";

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const listItems = [
    { name: 'Users', link: '/' },
    // { name: 'Admins', link: '/admins/' },
  ]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar sx={{ width: 64, height: 1, left: 0, right: "inherit", backgroundColor: "transparent" }}
              position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {listItems.map((item, index) => (
            <ListItem key={item.name} disablePadding>
              {/*<ListItemIcon>*/}
              {/*  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
              {/*</ListItemIcon>*/}
              <Link to={item.link} style={{ width: "100%", textDecoration: "none", color: "#000" }}>
                <ListItemButton>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;