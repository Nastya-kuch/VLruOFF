export default function Legenda(props){
return(
    <li style={{
        backgroundColor: props.color,
        borderRadius: '10px',
        padding: '10px 60px',
        marginBottom: '5px',
        width: 'auto',
        minWidth: '250px',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        color: props.text,
        
    }}>
        
        <span style={{ fontWeight: 'bold' }}>{props.title}</span>
        <span style={{ marginLeft: 'auto' }}>{props.description}</span>

    </li>
    )
}