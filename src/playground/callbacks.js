const getUser = (id, callback) => {
  const user = {
    id: 31,
    name: 'Elle Aronson'
  };

  callback(user);
};

getUser(31, userObj => {
  console.log(`id: ${userObj.id}, ${userObj.name}`);
});
