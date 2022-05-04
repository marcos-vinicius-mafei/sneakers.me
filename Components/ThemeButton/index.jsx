import {BsMoonFill, BsSunFill} from "react-icons/bs"
import {Container} from "./style"

const ThemeButton = ({theme,toggleTheme}) =>{
    return(
        <Container theme={theme} onClick={()=>toggleTheme()}>
            <div className="circle"></div>
            <BsMoonFill className="moon theme-icons"/>
            <BsSunFill className="sun theme-icons"/>
        </Container>
    )
}

export default ThemeButton