import { css } from "@emotion/css";

const app = css({
  height: "100vh"
})

const appPositioned = css({
  borderRadius: "15px",
  backgroundColor: "#fff",
  boxShadow: "0px 50px 50px -25px rgba(0, 0, 0, 0.10)",
  width: "80vw",
  height: "163px",
  padding: "0px 40px",
})

const appPostionedTextContainer = css({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  height: "100%"
})

const appPositionedText = css({
  display: "flex",
  flexDirection: "column",
  gap: "13px",
  borderRight: "1px solid #979797",
  padding: "0px 40px",

  "&:last-child": {
    border: "none"
  }
})

const appPositionedTextHeading = css({
  color: "#979797",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "1.75px",
  textTransform: "uppercase",
  textAlign: "left"
})

const appPositionedTextContent = css({
  color: "#2C2C2C",
  fontSize: "26px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "30px",
  letterSpacing: "-0.232px",
})


const appPositionedContainer = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  position: "absolute",
  top: "70%",
  left: "0",
  zIndex: "20"
})


const appSearchContainer = css({
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative"
})

const backgroundContainer = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: "10",
  "& svg, & rect": {
    height: "100vw",
    width: "100%"
  }
})

export const styles = {
  app,
  appPositioned,
  appPositionedContainer,
  appPositionedText,
  appPositionedTextHeading,
  appPostionedTextContainer,
  appSearchContainer,
  appPositionedTextContent,
  backgroundContainer
}