const bcrypt = require('bcrypt');

// Hash a password
const plainTextPassword = "test123";
const saltRounds = 10;

// async version
// bcrypt.hash(plainTextPassword, saltRounds, (err, hashedPassword)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(hashedPassword);
//     }
//})

// then/catch

bcrypt.hash(plainTextPassword, saltRounds)
    .then(hashedPassword => console.log(hashedPassword))
    .catch(err => console.log(err));

// checking  a passwork to see if it matches a hash
const hashedPassword = "$2b$10$JY32CM88PD3k0Dgm9k0/eOBsgINavm/rEOT/MvhfKqavarl2AfbLu"

bcrypt.compare(plainTextPassword, hashedPassword)
    .then(result => console.log(result ? "Passwords Match!" : "they dont match!"))
    .catch(err => console.log(err));