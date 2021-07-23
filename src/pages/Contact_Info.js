function ContactInfo (props){
    return (
    <div className= "container">
        <h1>Contact Info -<strong>Coming Soon</strong> </h1>
        <ul class = 'contact contact'>
            <li class = 'contact-list'>
                <strong>Let's chat</strong>, feel free to send me an email @ <a href = "mailto: cuencamich@gmail.com"><strong>cuencamich@gmail.com</strong></a>
            </li>
            <li class = 'contact-list'>
                I'm <strong>always open to connect via LinkedIn</strong> as well! <a href = "https://www.linkedin.com/in/michael-cuenca-silva-0725606b/">LinkedIn</a>
            </li>
            <li class = 'contact-list'>
                Come checkout my GitHub, in addition to projects <strong>I'm always learning, breaking, and trying out new things!</strong> <i class="fab fa-github fa-2x" ></i>
            </li>
        </ul>
    </div>
    )
}

export default ContactInfo