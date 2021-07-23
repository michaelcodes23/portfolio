import { Link } from "react-router-dom"
function Header (props){
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        padding: '8px',
        width: "100%",
        margin: "auto"
    }
    return (
        <header>
            
            <nav style={navStyle} className="top-bar">
                <Link  to ="/">
                    <div class = "nav-item home-item" >Michael Codes</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header