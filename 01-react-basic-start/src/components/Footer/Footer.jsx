import React from "react"
import './Footer.css';

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="block-1">
                <div className="block">
                    <h2 className="ftitle">
                        Информация
                    </h2>
                    <ul className="flist">
                        <li><a href="/map" className="flink">Вакансии</a></li>
                        <li><a href="/about" className="flink">Контакты</a></li>
                    </ul>
                </div>
                <div className="block">
                    <h2 className="ftitle">
                        Разделы
                    </h2>
                    <ul className="flist">
                        <li><a href="/mein" className="flink">Главная</a></li>
                        <li><a href="/org" className="flink">Управляющии организации</a></li>
                        <li><a href="/counters" className="flink">Показания счетчиков</a></li>
                        <li><a href="/trriger" className="flink">Уведомления в мобильный</a></li>
                        <li><a href="/post" className="flink">Наши посты</a></li>

                    </ul>
                </div>
                <div className="block">
                    <h2 className="ftitle">
                        Сайты Владивостока
                    </h2>
                    <ul className="flist">
                        <li><a href="/mein" className="flink">Авто</a></li>
                        <li><a href="/org" className="flink">Кино</a></li>
                        <li><a href="/counters" className="flink">Недвижимость</a></li>
                        <li><a href="/trriger" className="flink">Новости</a></li>
                        <li><a href="/post" className="flink">Объявления</a></li>
                        <li><a href="/post" className="flink">Работа</a></li>
                        <li><a href="/post" className="flink">Справочник компаний</a></li>
                    </ul>
                </div>
            </div>
            <div className="fbottom">
                <p className="info">По вопросам, предложениям или ошибкам пишите на почту: off@vl.ru

                    © ООО «Фарпост», 2003 — 2025
                    При любом использовании материалов ссылка на VL.ru обязательна.
                    Цитирование в Интернете возможно только при наличии гиперссылки.
                    Все права защищены.</p>
            </div>
        </footer>
    )

}
export default Footer