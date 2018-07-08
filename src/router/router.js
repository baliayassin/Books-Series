import React from "react";
import { Route } from "react-router-dom";
import IdeasList from "../Components/IdeasList";
import MyIdeas from "../Components/MyIdeas";
import Header from "../Header";
import getByName from "../Components/getByName";
const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={IdeasList} />
            <Route exact path="/get-by-name" component={getByName} />
            
        </React.Fragment>
    );}

export default ReactRouter;
