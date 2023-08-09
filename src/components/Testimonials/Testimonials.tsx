import { useState } from "react"
import { testimonialsData } from "../../data/testimonialsData"
import { TestimonialsContainer,LeftT, RightT, Arrows } from "./TestimonialsStyled"
import { motion } from "framer-motion"
import leftArrow from '../../assets/img/leftArrow.png'
import rightArrow from '../../assets/img/rightArrow.png'

const Testimonials = () => {
    const transition = {type: 'spring', id: 3}
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length

    return (
        <TestimonialsContainer id='testimonials'>
            <LeftT>
                <span>depoimentos</span>
                <span className="stroke-text">oque acham</span>
                <span>sobre nós</span>
                <motion.span
                key={selected}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                transition={{transition, duration: 1}}
                >
                    {testimonialsData[selected].review}
                </motion.span>

                <span>
                    <span>
                        {testimonialsData[selected].name}
                    </span>
                    <span> - </span>
                    <span>
                        {testimonialsData[selected].status}
                    </span>
                </span>
            </LeftT>

            <RightT>
                <motion.div
                initial={{opacity: 0, x: -100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{...transition, type: 'tween', duration: 2}}
                ></motion.div>
                <motion.div
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{...transition, type: 'tween', duration: 2}}
                ></motion.div>
                <motion.img
                key={selected}
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={{transition, duration: 1}}
                src={testimonialsData[selected].image} alt="" />

                <Arrows>
                    <img 
                    src={leftArrow} 
                    onClick={() => {
                        selected===0
                        ? setSelected(tLength - 1)
                        : setSelected((prev) => prev - 1)
                    }} 
                    alt="" />

                    <img 
                    src={rightArrow}
                    onClick={() => {
                        selected === tLength - 1
                        ? setSelected(0)
                        : setSelected((prev) => prev + 1)
                    }} 
                    alt="" />
                </Arrows>
            </RightT>
        </TestimonialsContainer>
    )
}

export default Testimonials