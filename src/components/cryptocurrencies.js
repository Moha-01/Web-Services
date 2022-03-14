import React from 'react'

const Cryptocurrencies = ({ cryptocurrencies }) => {
    return (
        <div>
            <center><h1>Crypto List</h1></center>
            {cryptocurrencies.map((cryptocurrency) => (
                <div class="card">
                    <div class="card-body">
                        <img class="img-thumbnail" src={cryptocurrency.logo_url} alt="logo" width="5%"/>
                        <h5 class="card-title">{cryptocurrency.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{cryptocurrency.price}€</h6>
                        <p class="btn btn-info">{cryptocurrency.id}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Cryptocurrencies