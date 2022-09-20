function User({username}) {
    if(username.toUpperCase().trim() === 'JOKER') {
     throw new Error("No hero");
    }
 }
 export default User;