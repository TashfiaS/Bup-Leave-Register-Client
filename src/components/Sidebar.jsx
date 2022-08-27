import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import DashboardCustomizeTwoToneIcon from "@mui/icons-material/DashboardCustomizeTwoTone";
import RateReviewTwoToneIcon from "@mui/icons-material/RateReviewTwoTone";
import QueryStatsTwoToneIcon from "@mui/icons-material/QueryStatsTwoTone";
import tw from "twin.macro";
import styled from "@emotion/styled";
export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardCustomizeTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RateReviewTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Apply Leave" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <QueryStatsTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Status" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <SidebarWrap>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuBookTwoToneIcon sx={{ color: "black" }} />
        </Button>
        <SwipeableDrawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)} onOpen={toggleDrawer("left", true)}>
          <Logo>
            <BupLogo>
              <img src="bupLogo.png" alt="" />
            </BupLogo>
            <LogoContent>Bup Leave Management</LogoContent>
          </Logo>
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </SidebarWrap>
  );
}

const SidebarWrap = styled.div`
  ${tw`w-full`}
`;

const Logo = styled.div`
  ${tw`flex font-bold font-serif justify-self-start my-5 text-2xl`}
`;
const BupLogo = styled.span`
  ${tw`self-center mx-2`}
  img {
    ${tw`h-14 w-auto`}
  }
`;
const LogoContent = styled.p`
  ${tw`w-28 mx-2 self-center`}
`;
