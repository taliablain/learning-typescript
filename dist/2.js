"use strict";
//type alias
const usernames = ["Alice", "Bob"];
const pair = ["Age", 30];
function createUser(id, name) {
    return {
        id,
        name,
        active: true,
    };
}
let currentStatus = "pending";
// let finalStatus: Status = "done";
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "user";
    Role["Guest"] = "guest";
})(Role || (Role = {}));
let currentRole = Role.User;
//go through types in codebase and demo optional, enums, etc 
