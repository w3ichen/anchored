import { Paid } from "@mui/icons-material";
import { Box, Chip, Container, Typography, styled } from "@mui/material";
import Page from "../../components/Page";

const ProfilePicture = styled(Container)({
  // backgroundImage: "url('https://source.unsplash.com/random/?profile_image')",
  backgroundImage: "url('logan_profile.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  objectFit: "cover",
  width: "100vw",
  height: "50vh",
});
const OverlayText = styled(Typography)({
  position: "absolute",
  color: "white",
  marginLeft: "20px",
  marginRight: "20px",
  lineHeight: 1,
});

const DEMO_USER = {
  name: "Logan Hammerschmitt",
  age: 30,
  city: "Pittsburgh, PA",
  bio: "Looking to make connections and gain close friends. I'm an educator and photographer whose always down to get out of the house and try something new. I teach entrepreneurship and innovation to college students. I enjoy learning about different craft cocktails, cooking up new recipes, and spending time in the great outdoors.",
};
interface Props {
  name: string;
  age: number;
  city: string;
  bio: string;
}
export function User({ name, age, city, bio }: Props) {
  return (
    <Box position="relative">
      <ProfilePicture />
      <OverlayText variant="h4" sx={{ top: "33vh" }}>
        {name}, {age}
      </OverlayText>
      <OverlayText variant="h6" sx={{ top: "44vh" }}>
        {city}
      </OverlayText>
      <Box
        position="sticky"
        left={0}
        top={0}
        px={2}
        py={1}
        bgcolor="rgb(243, 250, 253,0.8)"
        width="100%"
      >
        <Chip label="189 coins" color="secondary" avatar={<Paid />} />
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "#c9e9f6",
          py: "20px",
          color: "rgb(75,75,75)",
        }}
      >
        <Typography variant="overline">About me</Typography>
        <Typography variant="body1">{bio}</Typography>
      </Container>
    </Box>
  );
}

export default function UserPage() {
  return (
    <Page>
      <User {...DEMO_USER} />
    </Page>
  );
}
