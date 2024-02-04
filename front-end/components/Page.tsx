import { Box, Button, Stack, Toolbar } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Header() {
  return (
    <Box textAlign="center" sx={{ bgcolor: "#f3fafd", p: 1 }}>
      <img src="full_logo.png" height="50px" />
    </Box>
  );
}

function NavIcon({ href, img }: { href: string; img: string }) {
  return (
    <Link href={href} passHref>
      <Button sx={{ display: "flex", flex: 1 }}>
        <img src={img} width="40px" height="40px" />
      </Button>
    </Link>
  );
}

function Navbar() {
  /**
   * Finding new friends
   * Going deeper
   * My profile
   */
  return (
    <Toolbar
      sx={{
        width: "100%",
        display: "flex",
        bgcolor: "#f3fafd",
      }}
    >
      {/* <NavIcon href="/find" img="nav_steer.png" /> */}
      <NavIcon href="/deeper" img="nav_anchor.png" />
      <NavIcon href="/user" img="nav_profile.png" />
    </Toolbar>
  );
}
export default function Page({ children }: Props) {
  return (
    <Stack direction="column" sx={{ height: "100vh" }}>
      <Header />
      <Box height="100%" sx={{ overflowX: "hidden", overflowY: "auto" }}>
        {children}
      </Box>
      <Navbar />
    </Stack>
  );
}
