import { CardDetails, Img, JoinNow } from "./CardProgramsStyled";
import RightArrow from '../../../assets/img/rightArrow.png'

interface CardProps {
    image: string;
    heading: string;
    details: string;
}

const Card = ({image, heading, details}: CardProps) => {
    return (
        <CardDetails>
            <Img src={image} alt="" />
            <span>{heading}</span>
            <span>{details}</span>
            <JoinNow>
                <span>Junte-se</span>
                <img src={RightArrow} alt="" />
            </JoinNow>
        </CardDetails>
    )
}

export default Card