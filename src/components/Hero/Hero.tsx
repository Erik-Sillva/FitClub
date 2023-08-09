import {
  HeroContainer,
  LeftH,
  RightH,
  Tba,
  HeroText,
  Figures,
  Buttons,
  CaloriesContainer,
  HeroBlur
} from './HeroStyled'   
import { motion } from 'framer-motion'
import Header from '../Header/Header'
import HeroImg from '../../assets/img/hero_image.png'
import HeroImgBack from '../../assets/img/hero_image_back.png'
import Heart from '../../assets/img/heart.png'
import Calories from '../../assets/img/calories.png'

const Hero = () => {
  const transition = {type: 'spring', id: 3}
  const mobile = window.innerWidth<=768 ? true : false;
  return (
    <HeroContainer id='home'>
      <HeroBlur className="blur"></HeroBlur>
      <LeftH>
        <Header/>

        {/* The Best Ad */}
        <Tba>
          <motion.div
          initial={{left: mobile ? '178px' : '250px'}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween', duration: 3}}
          ></motion.div>
          <span>o melhor clube de fitness da cidade</span>
        </Tba>

        {/* Hero Heading */}
        <HeroText>
          <div>
            <span className='stroke-text'>molde </span>
            <span>seu</span>
          </div>

          <div>
            <span>corpo ideal</span>
          </div>

          <div>
            <span>Aqui nós ajudaremos você a desenvolver e construir seu corpo ideal e viver sua vida ao máximo!</span>
          </div>
        </HeroText>

        {/* Figures */}
        <Figures>
          <div>
            <span>+140</span>
            <span>treinadores especializados</span>
          </div>

          <div>
            <span>+978</span>
            <span>membros se juntaram</span>
          </div>

          <div>
            <span>+50</span>
            <span>programas fitness</span>
          </div>
        </Figures>

        {/* Hero Buttons */}
        <Buttons>
          <button className='btn'>Comece agora</button>
          <button className='btn'>Saiba mais</button>
        </Buttons>
      </LeftH>

      <RightH>
        <button className='btn'>Participe agora</button>

        <motion.div 
        className="heart_rate"
        initial={{right: '-1rem'}}
        whileInView={{right: '3rem'}}
        transition={{...transition, type: 'tween', duration: 2}}
        > 
          <img src={Heart} alt="" />
          <span>Frequência Cardíaca</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img src={HeroImg} alt="" className='hero-img' />
        <motion.img 
        src={HeroImgBack}
        alt=""
        initial={{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={{...transition, type: 'tween', duration: 2}}
        className='hero-img-back' />

        {/* Calories */}
        <CaloriesContainer
        initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={{...transition, type: 'tween', duration: 2}}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calorias Queimadas</span>
            <span>220 kcal</span>
          </div>
        </CaloriesContainer>
      </RightH>
    </HeroContainer>
  )
}

export default Hero