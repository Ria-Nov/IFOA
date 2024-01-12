import netflixLogo from '../../assets/media/netflix_logo.png'
import "./customLogo.css"

const CustomLogo = () => {
    return (
        <img src={netflixLogo} alt="netflix logo" className="customLogo"></img>
    )
}

export default CustomLogo;