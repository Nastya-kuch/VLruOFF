import { useState } from 'react'
import './Header.css'
import '../Modal/Modal.css'
import Navbar from '../Sidebar/Navbar';
import logo from '/novosti_vladivostok 1.svg'
import { GiHamburgerMenu } from "react-icons/gi"
import Modal from '../Modal/Modal';
import qr from '/image 1.svg'
import MOCK_DATA from '../../MOCK_DATA.json';
import { useEffect} from 'react'

const filter = (searchText, listOfStreet) => {
    if(!searchText){
        return [];
    }
    return listOfStreet.filter(({streets}) =>
        streets.toLowerCase().includes(searchText.toLowerCase())
    );
}

export default function Header() {
    const [ showNav, setShowNav] = useState(false)
    const [modalActive, setModalActive] = useState(false) 
    const [streetList, setStreetList] = useState([]) 
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filtered = filter(searchTerm, MOCK_DATA);
            setStreetList(filtered);
        }, 300);

        return () => clearTimeout(Debounce);
    }, [searchTerm]);

    return (
    <div>
        <header className="header">
            <div className='header-left'>
                <GiHamburgerMenu className='H' onClick = {() => setShowNav(!showNav)}/>
                <img src={logo} className="logo" alt="Logo" />
            </div>
            
            <nav className="nav">
                <input 
                    value = {searchTerm}
                    type="text"
                    autoComplete='off'
                    placeholder='Поиск улицы'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='search'
                />
            
                {streetList.length > 0 && (
                    <ul className='Sr'>
                        {streetList.map((street, index) => (
                            <li key={index} className='lis'>{street.streets}</li>
                        ))}
                    </ul>
                )}
                <a href="/Home" className="nav-link">Главная</a>
                <a href="/" className="nav-link">Организации</a>
                <a href="/" className="nav-link">Наши посты</a>
                <button className="login-button" onClick={() => setModalActive(true)}>Войти</button>
            </nav>
        </header>
        
        <Modal active={modalActive} setActive={setModalActive}>
            <div className="modal-content">
                <p className="modal-title">Авторизация через Телеграм</p>
                
                <div className="modal-text">
                    <p>После входа через телеграм вы сможете управлять подписками на страницах сайта.</p>
                    <p>
                        Для входа на этом устройстве отсканируйте QR-код, используя телефон с установленным приложением телеграм. 
                        Либо <a href="#" className="modal-link">перейдите по ссылке</a>
                    </p>
                </div>
                
                <img src={qr} className="qr-code" alt="QR код для авторизации" />
                
                <div className="qr-hint">Наведите камеру телефона на QR-код</div>
            </div>
        </Modal>
        
        <Navbar show={showNav}/>
    </div>
    );
}