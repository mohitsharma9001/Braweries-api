
let timerId;
function debounce(func,delay)
{
    if(timerId) clearTimeout(timerId);
    timerId= setTimeout(function()
    {
        func();
    },delay)
}

let braw = document.getElementById("breweries");
async function getData(){
  

    try {
        var searchParam = document.getElementById("input-field").value
        let res = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${searchParam}&per_page=20`);
        let data  = await res.json()
        console.log(data)
        displayData(data);
    } catch (err) {
        console.log(err)
    }
}
function displayData(data){
braw.innerHTML = "";
data.forEach(data1 => {
    var row = document.createElement("tr");
    var id=document.createElement("td");
        id.innerText=data1.id;

        var name=document.createElement("td");
        name.innerText=data1.name;

        var type=document.createElement("td");
        type.innerText=data1.brewery_type;

        var city=document.createElement("td");
        city.innerText=data1.city;

        var state=document.createElement("td");
        state.innerText=data1.state;
        var country=document.createElement("td");
        country.innerText=data1.country;

        row.append(id,name,type,city,state,country);

document.querySelector("#breweries").append(row)
});
}