import { Container, styled } from "@mui/material";
import Page from "../components/Page";

export default function Home() {
  const Root = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#1d3144",
    margin: 0,
    padding: "10%",
    color: "white",
    textAlign: "center",
  });

  return (
    <Page>
      <Root>
        <img src="logo.png" alt="Anchored Logo" width="100px" />
        <h1>ANCHORED</h1>
        <h2>Friendships on a Deeper Level</h2>
      </Root>
    </Page>
  );
}
