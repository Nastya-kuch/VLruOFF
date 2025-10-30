import './Introsec.css'
export default function Introsec(){
    return(
        <section>

            
            {/* Кнопки посередине */}
            <div className="bott">
                <button className='count'>
                    Показание счетчиков
                </button>
                <button className='tg'>
                    Оповещения в Телеграм
                </button>
            </div>

        </section>
    )
}