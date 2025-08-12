const Card = ({title, price, addBuy}) => {

   const handleBuyConcert = () => {
        addBuy(title, price);
    }

    return (
        <>
        <h4>{title}</h4>
        <p>{price}</p>
        <button onClick={handleBuyConcert}>Agregar</button>
        </>
    );
}

export default Card;