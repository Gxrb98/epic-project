
// router.get('/:userId', control.getuser)

// router.get('/', control.getusers)

// router.post('/', [verifyToken, isAdmin, checkDuplicateUsernameOrEmail], control.createuser)

// router.delete('/:userId', [verifyToken, isAdmin], control.deleteuser)

// router.patch('/:userId', [verifyToken, isAdmin], control.addroles)

// router.patch('/remove/:userId', [verifyToken, isAdmin], control.remoroles)

// router.patch('/adduser/:userId', [verifyToken, isAdmin], control.adduser)



// export const verifyToken = async (req, res, next) => {
//     let token = req.headers["x-access-token"];
  
//     if (!token) return res.status(403).json({ message: "No token provided" });
  
//     try {
//       const decoded = jwt.verify(token, ENVJS.SECRET);
//       req.userId = decoded.id;
  
//       const user = await User.findById(req.userId, { password: 0 });
//       if (!user) return res.status(404).json({ message: "No user found" });
//       // console.log(user);  
//       next();
//     } catch (error) {
//       return res.status(401).json({ message: "Unauthorized!" });
//     }
//   };


// import User from "../models/User.js";

// export const createuser = async (req, res) => {
//   try {
//     const { name, email, pass, role, company, info } = req.body;

//     // creating a new User
//     const user = new User({
//       name,
//       email,
//       pass,
//       company,
//       role,
//       info
//     });

//     // encrypting password
//     user.pass = await User.encryptPassword(user.pass);

//     // saving the new user
//     const savedUser = await user.save();

//     return res.status(200).json({
//       _id: savedUser._id,
//       name: savedUser.name,
//       email: savedUser.email,
//       role: savedUser.role,
//       companys: savedUser.companys,
//       info: savedUser.info,
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// export const getusers = async (req, res) => {
//   const users = await User.find();
//   return res.json(users);
// }

// export const getuser = async (req, res) => {
//   const { userId } = req.params;
//   const user = await User.findById(userId);
//   return res.json(user);
// }

// export const updateuser = async (req, res) => {
//   console.log(req.params);
//   const updatedUser = await User.findByIdAndUpdate(
//     req.params.userId,
//     req.body,
//     {
//       new: true,
//     }
//   );
//   res.status(204).json(updatedUser);
// }

// export const addroles = async (req, res) => {
//   const { role } = req.body;
//   const { userId } = req.params;
//   console.log("ELBODY : ", role);
//   if (role === null) {
//     return res.status(500).send({ message: "error null" });
//   }
//   if (role === undefined) {
//     return res.status(500).send({ message: "error undefined" });
//   }
//   const user = await User.findById(userId);
//   if (!user.role.includes(role)) {
//     const updatedUser = await User.findByIdAndUpdate(userId, { $push: { role: role } }, { new: true })
//     res.status(204).json(updatedUser);
//   }
//   else {
//     return res.status(500).send({ message: "el usuario ya tiene asignado ese rol" });
//   }
// }

// export const remoroles = async (req, res) => {
//   const { role } = req.body;
//   const { userId } = req.params;
//   console.log("ELBODY : ", role);
//   if (role === "undefined") {
//     return res.status(500).send({ message: "error undefined" });
//   }
//   if (role === "admin") {
//     return res.status(500).send({ message: "no se puede eliminar el rol de admin" });
//   }
//   const user = await User.findById(userId);
//   if (user.role.includes(role)) {
//     const updatedUser = await User.findByIdAndUpdate(userId, { $pull: { role: role } }, { new: true })
//     res.status(204).json(updatedUser);
//   }
//   else {
//     return res.status(500).send({ message: "error eliminando el rol" });
//   }
// }

// export const adduser = async (req, res) => {

//   const { userId } = req.params; //id del usuarioactual
//   const { id } = req.body; // id del usuario foraneo
//   if (userId === id) return res.status(500).send({ message: "error no se puede agregar a uno mismo" });
//   if (id === null) return res.status(500).send({ message: "error null" });
//   if (id === undefined) return res.status(500).send({ message: "error undefined" });
//   const usera = await User.findById(userId);
//   const userx = await User.findById(id);

//   const objetoUsuarioA = usera.users;
//   const ArrayParseadoAtexto = JSON.stringify(objetoUsuarioA);

//   if (!ArrayParseadoAtexto.includes(id)) {
//     const updatedUser = await User.findByIdAndUpdate(userId, { $push: { users: userx } }, { new: true })
//     res.status(204).json(updatedUser);
//   }
//   else {
//     return res.status(500).send({ message: "el usuario ya tiene asignado ese usuario" });
//   }
// }

// export const deleteuser = async (req, res) => {
//   const { userId } = req.params;
//   const user = await User.findById(userId);
//   if (user.email === "admin@localhost") {
//     return res.status(500).send("no puedes eliminar al admin principal");
//   }
//   const userdel = await User.findByIdAndDelete(userId);
//   return res.json(userdel);
// }



