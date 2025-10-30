import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({show}){
    return(
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul className='R'>
                <li><a href="/">Главная VL.ru</a></li>
            </ul>
            <ul className='R'>
                <li><a href="/">Афиша</a></li>
            </ul>
            <ul className='R'>
                <li><a href="/">Отключения воды и света</a></li>
            </ul>
            <ul className='R'>
                <li><a href="/">Недвижимость</a></li>
            </ul>
            <ul className='R'>
                <li><a href="/">Справочник компаний</a></li>
            </ul>
            <ul className='R'> 
                <li><a href="/">Базы отдыха</a></li>
            </ul>
            <ul className='R'>
                <li><a href="/">Farpost - объявления</a></li>
            </ul>
            <ul className='R'>
                <li><a href="/">ТВ-программа</a></li>
            </ul>
            <ul className='R'>
                <li><a href="/">Транспорт</a></li>
            </ul>
            <ul className='R'>
                <li><a href="/">Авто на Дроме</a></li>
            </ul>
            <ul className='R'>
                <li><a href="/">Совместные покупки</a></li>
            </ul>
            <ul className='R'>
                <li><a href="/">ЛовиКупон</a></li>
            </ul>
            
        </div>
    )
}