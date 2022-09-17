import "./style.scss"

export default function footer(){
    return(
        <div className="footer">
            <h6 className="footerHeading">
            &#169; Copyright {new Date().getFullYear()} : All Rights Reserved
            </h6>
        </div>
    )
};