const { addPackage } = require('../database/queries/postPackages');
const { join } = require('path');

const addPackageHandler = (req, res) => {
  const { name, customer_name, store, image, date, price } = req.body;
  addPackage(name, customer_name, store, image, date, price).then(
    res.sendFile(join(__dirname, '..', '..', 'client', 'main.html'))
  );
};

module.exports = { addPackageHandler };

// package img
// https://media.istockphoto.com/photos/woman-in-blue-dress-contemplating-the-scenic-landscape-of-wadi-rum-picture-id1358254830?b=1&k=20&m=1358254830&s=170667a&w=0&h=xjDwN9LPYGQaHkzG4AaSwOHdagr0M4ZiA6_EYSvPHPY=
/// https://media.istockphoto.com/photos/beautiful-little-girl-spinning-and-dancing-in-the-woods-in-the-summer-picture-id1334714491?b=1&k=20&m=1334714491&s=170667a&w=0&h=jWAA4r3TBdw3cnsW-ATi-4fKjeA5jqqWebCmIewyHLI=
// https://media.istockphoto.com/photos/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-picture-id1303978937?b=1&k=20&m=1303978937&s=170667a&w=0&h=az5Y96agxAdHt3XAv7PP9pThdiDpcQ3otWWn9YuJQRc=
// https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60
// 


