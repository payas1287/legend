import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import logo from "../../assets/nba-logo.png"
import headerStyle from "./Header.module.css"


const Header = () => {
    return (
        <Container>
            <Image src={logo} width={"200px"}/> <br />
            <h1 className={`${headerStyle.title} my-2`}>
                NBA Legends
            </h1>
        </Container>
    )
}

export default Header