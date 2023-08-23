function DinnerSupplies({guestList}){
    const length = guestList.length;
    return(
    <div>    
        <div>
            Spoons: {length * 2}
        </div>
        <div>
            Forks: {length * 2}
        </div>
        <div>
            Knives: {length * 2}
        </div>
    </div>
    )
}

export default DinnerSupplies;
