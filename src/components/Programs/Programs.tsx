import { 
    ProgramsContainer,
    ProgramsHeader,
    ProgramsCategories,
    Category,
} from './ProgramsStyled'

import Dumbell from '../../assets/img/dumbell.svg'
import Runing from '../../assets/img/runing.svg'
import Flame from '../../assets/img/flame.svg'
import Heart from '../../assets/img/heartHealth.svg'

// import { programsData } from '../../data/programsData'
import Card from '../Card/CardPrograms/CardPrograms'

const Programs = () => {
    return (
        <ProgramsContainer id='programs'>
            {/* Header */}
            <ProgramsHeader>
                <span className='stroke-text'>Programas para</span>
                <span>desenvolver</span>
                <span className='stroke-text'>seu corpo</span>
            </ProgramsHeader>

            <ProgramsCategories>
            <Category>
                <Card image={Dumbell} heading='Treinamento de força' details='Neste programa, você é treinado para melhorar sua força por meio de muitos exercícios.'/>
                <Card image={Runing} heading='Treinamento Cardio' details='Neste programa, você é treinado para realizar movimentos sequenciais por um período de 20 a 30 minutos.'/>
                <Card image={Flame} heading='Queima de Gordura' details='Este programa é adequado para quem deseja se livrar da gordura e perder peso.'/>
                <Card image={Heart} heading='Saúde e Fitness' details='Este programa é projetado para aqueles que se exercitam apenas para a forma física do corpo, não para o fisiculturismo.'/>
            </Category>
            </ProgramsCategories>
        </ProgramsContainer>
    )
}

export default Programs