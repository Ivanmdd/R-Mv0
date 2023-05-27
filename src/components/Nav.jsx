import React from "react";
import SearchBar from "./SearchBar";
import "./NavBar.css"
import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Cards";

export default function Nav(props) {
    const { onSearch } = props;

    return (
        <div className="nav">
            <SearchBar onSearch={onSearch} />
            <Link to="/components/About" >About</Link>
            <Link to="/components/Home">Home</Link>
        </div>
        
    )
}