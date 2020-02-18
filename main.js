var rooms = {
    "single-queen": 150.00,
    "double-queen": 200.00,
    "single-king": 500.00,
    "suite": 800.00,
    "villa": 1500.00
}

var inventory = {
    "single-queen": 0,
    "double-queen": 50,
    "single-king": 50,
    "suite": 50,
    "villa": 50
}



function checkInventory() {
    var inputs = document.getElementById('room-selection');
    var roomType = inputs.options[inputs.selectedIndex].getAttribute('data-type');
    if (inventory[roomType] != 0)
    {   
        window.open("http://localhost:8888/final/hotel/booking-popup.html?");
    }
    else 
    {   
        window.alert("The selected room is unavailable, please select another room type");
        modal.innerHTML("The selected room is unavailable, please select another room type"); 
        showModal();
    }

}

function checkDateInput(){
    var inputsDate1 = document.getElementById("checkInDate").value;
    var inputsDate2 = document.getElementById("checkOutDate").value;
    Check = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    var modal = document.getElementById('modal-body');
    if (inputsDate1.match(Check) || inputsDate2.match(Check))
    {
        checkInventory();
    }
        
    else 
    {   
        modal.innerHTML = "Please enter a date a valid check in date or checkout date";
        showModal();
    }
        
}

function bookingComplete(){
    var inputs = document.getElementById('room-selection');
    var roomType = inputs.options[inputs.selectedIndex].getAttribute('data-type');
    var inventor = inventory[roomType] -= 1;
    console.log(inventor);
}


function checkIn(){
    checkDateInput();
}

function showModal(){
    $('#mainModal').modal('show');
}
