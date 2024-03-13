import './components.css';
type CardProps = {cardName : string , children:string}
function CardTitle({name}: {name : string}){
    return <>
    <div className='card-title'>{name}</div>
    </>
}

export function Card(props : CardProps) {
    return <>
     <div className='card'>
        <CardTitle name={props.cardName}></CardTitle>
        <p>{props.children}</p>
     </div>
    </>
}