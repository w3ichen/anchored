import { Edit, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Collapse,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Page from "../components/Page";

export default function DiveDeeper() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Page>
      <Container>
        <Typography variant="overline" fontWeight="bold" fontSize="12pt">
          Dive Deeper
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItemButton onClick={handleClick}>
            <ListItemAvatar>
              <Avatar src="/manush.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Manush" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem sx={{ pl: 4 }}>
                <ListItemIcon>+30</ListItemIcon>
                <ListItemText primary="Grab lunch" secondary="Tomorrow 12pm" />
                <Button variant="contained" color="success">
                  Check-in
                </Button>
              </ListItem>
              <ListItem sx={{ pl: 4 }}>
                <ListItemIcon>+20</ListItemIcon>
                <ListItemText primary="Go for a walk" />
                <Button variant="contained">Setup</Button>
              </ListItem>
              <ListItem sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Edit />
                </ListItemIcon>
                <ListItemText primary="Suggest an activity" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Container>
    </Page>
  );
}
