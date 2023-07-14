import { css } from "@emotion/css";

const search = css({
    borderRadius: "15px",
    backgroundColor: "#FFF",
    boxShadow: "0px 50px 50px -25px rgba(0, 0, 0, 0.10)",
    height: "58px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& input": {
        width: "100%",
        height: "100%",
        borderRadius: "15px 0px 0px 15px",
        border: "0px",
        outline: "none",
        padding: "0px 0px 0px 24px"
    }
})

const searchButton = css({
    width: "58px",
    height: "100%",
    backgroundColor: "#000",
    borderRadius: "0px 15px 15px 0px",
    color: "#fff",

    "&:hover": {
        backgroundColor: "#3F3F3F"
    }
})

const searchClose = css({
    width: "58px",
    height: "58px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3F3F3F"
})
export let styles = {
    search,
    searchClose,
    searchButton
}