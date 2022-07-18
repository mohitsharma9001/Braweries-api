var breweryList = JSON.parse(localStorage.getItem("breweryList")) || [];

fetchBrewery();


async function fetchBrewery()
{
    try {
        
        let res= await fetch(`https://api.openbrewerydb.org/breweries`);

        let data = await res.json();

        displayData(data)

    } catch (error) {
        console.log(error)
    }
}

function displayData(data)
{
    document.querySelector("#breweries").innerHTML=""
    data.forEach(brewery => {
        var row= document.createElement("tr");

        var id=document.createElement("td");
        id.innerText=brewery.id;

        var name=document.createElement("td");
        name.innerText=brewery.name;

        var type=document.createElement("td");
        type.innerText=brewery.brewery_type;

        var city=document.createElement("td");
        city.innerText=brewery.city;

        var state=document.createElement("td");
        state.innerText=brewery.state;
        var country=document.createElement("td");
        country.innerText=brewery.country;

        var link=document.createElement("td");
       
        row.append(id,name,type,city,state,country);

        document.querySelector("#breweries").append(row)
    });
}

