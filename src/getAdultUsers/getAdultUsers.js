const getAdultUsers = (users = []) => users.filter((user) => user.age > 18);

module.exports = getAdultUsers;
