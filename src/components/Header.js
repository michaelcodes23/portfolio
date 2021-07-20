import { Link } from "react-router-dom"
function Header (props){
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: '8px',
        width: "90%",
        margin: "auto"
    }
    return (
        <header>
            <h1>Welcome to My Portfolio!</h1>
            <nav style={navStyle}>
                <Link to ="/">
                    <div>Home</div>
                </Link>
                <Link to ="/about">
                    <div>About</div>
                </Link>
                <Link to ="/projects">
                    <div>Projects</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header