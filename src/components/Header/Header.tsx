import { HeaderContainer } from './HeaderStyled'
import { useState } from 'react';
import { Link } from 'react-scroll'
import Logo from '../../assets/img/logo.png'
import Bars from '../../assets/img/bars.png'
import '../../App.css'

const Header = () => {
    const mobile = window.innerWidth<=768 ? true : false;
    const [ menuOpened, setMenuOpened ] = useState<boolean>(false);

    return (
        <HeaderContainer>
            <img src={Logo} alt="" />

            {(menuOpened === false && mobile === true) ? (
                <div className='menuBar' onClick={() => setMenuOpened(true)}>   
                    <img src={Bars} alt="" />
                </div>
            ) : (
                <ul>
                    <li>
                        <Link
                        onClick={() => setMenuOpened(false)}
                        activeClass='active'
                        to='home'
                        spy={true}
                        smooth={true}>
                        Início
                        </Link>
                    </li>

                    <li>
                        <Link
                        onClick={() => setMenuOpened(false)}
                        to='programs'
                        spy={true}
                        smooth={true}>
                        Programas
                        </Link>
                    </li>

                    <li>
                        <Link
                        onClick={() => setMenuOpened(false)}
                        to='reasons'
                        spy={true}
                        smooth={true}>
                        Sobre
                        </Link>
                    </li>

                    <li>
                        <Link
                        onClick={() => setMenuOpened(false)}
                        to='plans'
                        spy={true}
                        smooth={true}>
                        Planos
                        </Link>
                    </li>

                    <li>
                        <Link
                        onClick={() => setMenuOpened(false)}
                        to='testimonials'
                        spy={true}
                        smooth={true}>
                        Depoimentos
                        </Link>
                    </li>
                </ul>
            )}
        </HeaderContainer>
    )
}

export default Header