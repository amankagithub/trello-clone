import { Card } from "./card"

import { useState } from "react";

function CardListTitle({name} : {name : string}){
    return <>
    <div className="card-list-title">
        {name}
    </div>
    </>
}

export function CardList({name} : {name:string}){
    const [cardsInfo , setCardsInfo] = useState<{cardName:string , cardConetent : string}[]>([]);
    
    const addCard = () => {
        const cardNumber = cardsInfo.length + 1;
        setCardsInfo([...cardsInfo,{cardName : `Card-${cardNumber}` , cardConetent:`Content-${cardNumber}`}]);
    }
    return <>
    <div className="card-list">
       <CardListTitle name={name}></CardListTitle>
       <div className="cards-container">
        {cardsInfo.map((card)=>(<Card cardName={card.cardName}>{card.cardConetent}</Card>))}
       </div>
       <button onClick={addCard}> Add a card</button>
    </div> 
    </>
}