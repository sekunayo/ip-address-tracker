import React from "react";
import { styles } from "./styles";
import { ReactComponent as CaretLeft } from "../../assets/icons/caret_left.svg";

export const Search = () => {
    return (
        <form className={styles.search}>
            <input type="text" placeholder="Search for any IP address or domain" />
            <button type="submit" className={styles.searchButton}>
                <CaretLeft />
            </button>
        </form>
    )
}