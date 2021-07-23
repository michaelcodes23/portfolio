function Footer (props){
    return (
        <>
        <ul class = 'container'>
            <li class = "contact-item"> 
                <a href = "https://github.com/michaelcodes23/" id = "icon">
                    <i class="fab fa-github fa-2x" ></i>
                </a>
            </li>
            <li class = "contact-item"> 
                <a href = "https://www.linkedin.com/in/michael-cuenca-silva-0725606b/" id = "icon">
                <i class="fab fa-linkedin-in fa-2x"></i>
                </a>
            </li>
            <li class = "contact-item"> 
                <a href = "mailto:cuencamich@gmail.com" id = "icon"><strong>cuencamich@gmail.com</strong></a>
            </li>
        </ul>
        </>
    )
    // <a href="https://github.com/michaelcodes23/"><h1 className = "footer">React / Express App by @michaelcodes23 (GitHub)</h1></a>
}

export default Footer