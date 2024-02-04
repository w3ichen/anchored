import {
  Edit,
  ExpandLess,
  ExpandMore,
  LocalFireDepartment,
  Sensors,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Collapse,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import Page from "../components/Page";

const DEMO_ACTIVITIES = [
  {
    name: "Manush",
    img: "/manush.jpg",
    streak: 254,
    activities: [
      {
        name: "Grab a coffee at Starbucks (Promoted)",
        points: 40,
      },
      {
        name: "Grab lunch",
        points: 30,
        date: "Tomorrow 12pm",
      },
      {
        name: "Go for a walk",
        points: 20,
      },
    ],
  },
  {
    name: "Weichen",
    img: "/weichen.png",
    streak: 20,
    activities: [
      {
        name: "Hop on a video call",
        points: 20,
        date: "Today 8pm",
      },
      {
        name: "Send a text",
        points: 5,
      },
    ],
  },
  {
    name: "Eleni",
    img: "/eleni.png",
    streak: 198,
    activities: [
      {
        name: "Visit the zoo (Promoted)",
        points: 10,
        date: "Tomorrow 3pm",
      },
      {
        name: "Take a walk",
        points: 5,
      },
    ],
  },
  {
    name: "Shah",
    img: "/shah.png",
    streak: 11,
    activities: [
      {
        name: "Go for coffee",
        points: 10,
      },
    ],
  },
].sort((a, b) => b.streak - a.streak); // sort by streak

function CheckInDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Checking In</DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <Typography variant="h5"></Typography>
        <Typography variant="body1">
          You&apos;ve made it to your voyage&apos;s end. Now, tap our phones
          together to anchor our friendship.
        </Typography>
        <Sensors sx={{ fontSize: "100pt", color: "grey" }} />
        <br />
        <img src="/treasure_chest.png" width="200px" />
      </DialogContent>
    </Dialog>
  );
}

function SetupDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Suggest times to meet</DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>

        <br />
        <Button variant="contained" color="primary" fullWidth>
          Send
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function User({ user }: { user: any }) {
  const [expand, setExpand] = React.useState(false);
  const [openCheckIn, setOpenCheckIn] = React.useState(false);
  const [openSetup, setOpenSetup] = React.useState(false);

  return (
    <>
      <CheckInDialog open={openCheckIn} onClose={() => setOpenCheckIn(false)} />
      <SetupDialog open={openSetup} onClose={() => setOpenSetup(false)} />

      <ListItemButton onClick={() => setExpand(!expand)}>
        <ListItemAvatar>
          <Avatar src={user.img} />
        </ListItemAvatar>
        <ListItemText primary={user.name} />
        <Chip
          avatar={<LocalFireDepartment sx={{ color: "white !important" }} />}
          label={`${user.streak} days`}
          color={user.streak > 100 ? "warning" : "default"}
          sx={{ mr: 1 }}
          size="small"
        />
        {expand ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={expand}
        timeout="auto"
        unmountOnExit
        sx={{ pl: 2.5, pt: 1 }}
      >
        <List
          disablePadding
          subheader={<Typography variant="overline">Voyages</Typography>}
          dense
          sx={{
            bgcolor: "rgba(255,255,255,0.8)",
            borderRadius: 2,
            px: 1,
            pb: 2,
          }}
        >
          {user.activities.map((activity, i) => (
            <ListItem key={`activity-${i}`}>
              <ListItemIcon>+{activity.points}</ListItemIcon>
              <ListItemText primary={activity.name} secondary={activity.date} />
              {!!activity.date ? (
                <Button
                  variant="contained"
                  color="success"
                  sx={{ minWidth: "fit-content" }}
                  onClick={() => setOpenCheckIn(true)}
                >
                  Check in
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ minWidth: "fit-content" }}
                  onClick={() => setOpenSetup(true)}
                >
                  Setup
                </Button>
              )}
            </ListItem>
          ))}
          <ListItemButton>
            <ListItemIcon>
              <Edit />
            </ListItemIcon>
            <ListItemText primary="Suggest an activity" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}

export default function DiveDeeper() {
  const closeFriends = DEMO_ACTIVITIES.filter((user) => user.streak > 100);
  const otherFriends = DEMO_ACTIVITIES.filter((user) => user.streak <= 100);
  return (
    <Page>
      <Box
        sx={{
          backgroundImage:
            "url('/ocean_bottom.jpg'), linear-gradient(to bottom, #c9e1eb, #c9e1eb)",
          backgroundSize: "contain, cover",
          backgroundPosition: "bottom, center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
      >
        <Container>
          <Typography variant="overline" fontWeight="bold" fontSize="13pt">
            Dive Deeper
          </Typography>
          <br />

          <Typography variant="overline">Close Friends</Typography>
          {closeFriends.map((user, i) => (
            <User key={`closeFriend-${i}`} user={user} />
          ))}
          <Typography variant="overline">Friends</Typography>
          {otherFriends.map((user, i) => (
            <User key={`otherFriend-${i}`} user={user} />
          ))}
        </Container>
      </Box>
    </Page>
  );
}
