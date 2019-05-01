const event = {
    name: 'Birthday Party',
    printGuestList: function() {
        console.log('Guest List for ' + this.name);
    }
}

const eventEs6 = {
    name: 'Birthday Party',
    printGuestListEs6: () => {
        console.log('Guest List for ' + this.name);
    }
}

const eventEs6Binding = {
    name: 'Birthday Party',
    guestList: ['Mike', 'Dave', 'Mat'],
    printGuestListEs6Binding() {
        console.log('Guest List for ' + this.name);
        //Here we want to use Fat Arrow to access global this
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

event.printGuestList();
eventEs6.printGuestListEs6(); //ES6 Fat Arrows are not binding to this
eventEs6Binding.printGuestListEs6Binding(); //Syntax for binding method functions