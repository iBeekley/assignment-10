let id = 0;

document.getElementById('btn').addEventListener('click', () => {
    let createDate = new Date();
    let table = document.getElementById('timesList');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('newTime').value; //cell html is set to the corresponding form value
    row.insertCell(1).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()} ${createDate.getHours()}:${createDate.getMinutes()}` //native date 
    row.insertCell(2).innerHTML = document.getElementById('newDriver').value;
    row.insertCell(3).innerHTML = document.getElementById('newCar').value;
})
