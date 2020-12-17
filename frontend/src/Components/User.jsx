
const User = ()=>{

    const cities= ['Hyderabad','Kolkata','Mirzapur','Bengaluru','Chennai'];
    const currentLocation= window.location;

    const handleCity=(city)=>{
        window.location.assign(currentLocation+`/CityRestaurants/${city}`);
    }

    return <div>
        <h1 className="app-name">Restaurant Finder</h1>
        <div className="user-page">
        {cities.map(city=><div key={city} onClick={()=>handleCity(city)}>{city}</div>)}
        </div>
    </div>;
}

export default User;