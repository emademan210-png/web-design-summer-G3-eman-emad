//  task 1
// let ids = [10, 5, 2, 20];

// let newId = 20;

// let found = ids.find((item) => item === newId);

// if (found !== undefined) {
//     console.log("ID is found");
// } else {
//     ids.push(newId);
//     console.log("ID added");
// }

// console.log(ids);





// Bank system

let users = [];

// Add User
function addUser() {

    let id = Number(prompt("Enter ID"));
    let name = prompt("Enter Name");
    let balance = Number(prompt("Enter Balance"));

    let isFound = users.find((user) => user.id === id);

    if (isFound) {
        console.log("ID Already Exists");
    } else {
        users.push({
            id: id,
            name: name,
            balance: balance
        });

        console.log("User Added");
    }

    console.log(users);
}

// Edit Balance
function editUserBalanceById() {

    let id = Number(prompt("Enter User ID"));
    let newBalance = Number(prompt("Enter New Balance"));

    let user = users.find((item) => item.id === id);

    if (user) {
        user.balance = newBalance;
        console.log("Balance Updated");
    } else {
        console.log("User Not Found");
    }

    console.log(users);
}

// Transfer Balance
function transferBalance() {

    let fromID = Number(prompt("Enter Sender ID"));
    let toID = Number(prompt("Enter Receiver ID"));
    let balance = Number(prompt("Enter Amount"));

    let fromUser = users.find((item) => item.id === fromID);
    let toUser = users.find((item) => item.id === toID);

    if (fromUser && toUser) {

        if (fromUser.balance >= balance) {

            fromUser.balance -= balance;
            toUser.balance += balance;

            console.log("Transfer Done");

        } else {

            console.log("Not Enough Balance");
        }

    } else {

        console.log("User Not Found");
    }

    console.log(users);
}

// Delete User
function deleteUserById() {

    let id = Number(prompt("Enter ID"));

    let index = users.findIndex((item) => item.id === id);

    if (index != -1) {

        users.splice(index, 1);
        console.log("User Deleted");

    } else {

        console.log("User Not Found");
    }

    console.log(users);
}

addUser();
addUser();
addUser();

editUserBalanceById();

transferBalance();

deleteUserById();