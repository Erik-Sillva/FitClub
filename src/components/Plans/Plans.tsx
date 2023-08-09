import { PlanCard } from '../Card/CardPlans/CardPlansStyled'
import { PlansContainer, ProgramsHeader, PlansCard, PlansBlur, PlansBlur2 } from './PlansStyled'
import { plans } from '../../data/plansData'
import CardPlans from '../Card/CardPlans/CardPlans'
import Heart from '../../assets/img/heartPlus.svg'
import Crown from '../../assets/img/crown.svg'
import Dumbell from '../../assets/img/dumbellPro.svg'

const Plans = () => {
    return (
        <PlansContainer id='plans'>
            <PlansBlur className='blur'></PlansBlur>
            <PlansBlur2 className='blur'></PlansBlur2>
            <ProgramsHeader>
                <span className='stroke-text'>pronto para começar</span>
                <span>sua jornada</span>
                <span className='stroke-text'>com a gente?</span>
            </ProgramsHeader>

            {/* Plans Card */}
            <PlansCard>
                <CardPlans
                    icon={Heart}
                    name={plans.basic.name}
                    price={plans.basic.price}
                    feature={plans.basic.features}
                />

                <CardPlans
                    icon={Crown}
                    name={plans.premium.name}
                    price={plans.premium.price}
                    feature={plans.premium.features}
                />

                <CardPlans
                    icon={Dumbell}
                    name={plans.pro.name}
                    price={plans.pro.price}
                    feature={plans.pro.features}
                />
            </PlansCard>
        </PlansContainer>
    )
}

export default Plans