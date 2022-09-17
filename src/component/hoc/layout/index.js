import Header from "../../header"
import Home from "../../home"
import Footer from "../../footer"
import {BrowserRouter} from "react-router-dom"

export default function layout(){
    return(
        <BrowserRouter>
        <Header/>
        <Home/>
        <Footer/>
        </BrowserRouter>
    )
};