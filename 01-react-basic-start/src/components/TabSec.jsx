import { ways, differences } from '../data'
import Button from './Button/Button'

export default function TabsSection({ contentType, onTabClick }) {
    
    return(
        <section>
            <h3>Сегодня:</h3>
            <Button isActive={contentType === 'all'} onClick={() => onTabClick('all')}>Общая сводка</Button>
            <Button isActive={contentType === 'off'} onClick={() => onTabClick('off')}>Отключения</Button>
            <Button isActive={contentType === 'plan'} onClick={() => onTabClick('plan')}>Плановые</Button>

            {contentType ? (
                <p>{differences[contentType]}</p>
            ) : (
                <p></p>
            )}
        </section>
    )
}