import { ReasonsContainer, LeftR, RightR, DetailsR, Partners } from './ReasonsStyled'

import image1 from '../../assets/img/image1.png'
import image2 from '../../assets/img/image2.png'
import image3 from '../../assets/img/image3.png'
import image4 from '../../assets/img/image4.png'
import nb from '../../assets/img/nb.png'
import adidas from '../../assets/img/adidas.png'
import nike from '../../assets/img/nike.png'
import tick from '../../assets/img/tick.png'

const Reasons = () => {
    return (
        <ReasonsContainer id='reasons'>
            <LeftR>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </LeftR>

            <RightR>
                <span>tá, mas...</span>

                <div>
                    <span className='stroke-text'>por que</span>
                    <span> nos escolher?</span>
                </div>

                <DetailsR>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>mais de 140+ treinadores especializados</span>
                    </div>

                    <div>
                        <img src={tick} alt="" />
                        <span>treine de forma mais rápida e inteligente</span>
                    </div>

                    <div>
                        <img src={tick} alt="" />
                        <span>1 programa gratuito para novos membros</span>
                    </div>

                    <div>
                        <img src={tick} alt="" />
                        <span>parceiros confiáveis</span>
                    </div>
                </DetailsR>

                <span>nossos parceiros</span>

                <Partners>
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </Partners>
            </RightR>
        </ReasonsContainer>
    )
}

export default Reasons