let jsonData = document.getElementById('employee');
document.getElementById('form').addEventListener('submit', () => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let depertement = document.getElementById('depertement').value;
    let selery = document.getElementById('salery').value;

    let data = {
        name,
        age,
        gender,
        depertement,
        selery
    }
    showStudents(data)
    postData(data)
})


async function getData(){
    try {
        let result = await fetch(`http://localhost:3000/students`);
        let students = await result.json();
        // console.log(students);
        showStudents(students)
    } catch (error) {
        console.log(error);
    }
}


async function postData(data){
    try {
        let result = await fetch(`http://localhost:3000/students/`,{
            method : 'POST',
            body : JSON.stringify(data),
            headers : {"Content-Type" : 'application/json'}
        });
        let students = await result.json();
        console.log(students);
    //  showStudents(students)
    } catch (error) {
        console.log(error);
    }
}
function showStudents(data){
    jsonData.innerHTML = "";
    let row = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = data.name;

    let td1 = document.createElement("td");
    td1.innerText = data.age;

    let td2 = document.createElement("td");
    td2.innerText = data.gender;

    let td3 = document.createElement("td");
    td3.innerText = data.depertement

    let td4 = document.createElement("td");
    td4.innerText = data.selery;

    row.append(td,td1,td2,td3,td4);
    jsonData.append(row)

}