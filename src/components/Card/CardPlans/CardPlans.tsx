import { PlanCard, Features, Feature } from './CardPlansStyled'
// import { plans } from '../../data/plansData'
import whiteTick from '../../../assets/img/whiteTick.png'
import Arrow from '../../../assets/img/rightArrow.png'

interface PlanCard {
    icon: string;
    name: string;
    price: string;
    feature: string[];
}

const CardPlans = ({icon, name, price, feature}: PlanCard) => {
    return (
        <PlanCard>
            <img src={icon} alt="" />
            <span>{name}</span>
            <span>{price}</span>

            <Features>
                {feature.map((feat, i) => (
                    <Feature key={i}>
                        <img src={whiteTick} alt="" />
                        <span>{feat}</span>
                    </Feature>  
                ))}
            </Features>

            <div>
                <span>veja mais benefícios</span>
                <img src={Arrow} alt="" />
            </div>

            <button className="btn">Assinar</button>
        </PlanCard>
    )
}

export default CardPlans