


// router.post("/signup", [ref.checkDuplicateUsernameOrEmail, ref.checkRolesExisted], control.signUp);

// router.post("/signin", control.signin);


// import User from "../models/User.js";
// import jwt from "jsonwebtoken";
// import ENVJS from "../../ENV.js";
// import Role from "../models/Role.js";
// export const signUp = async (req, res) => {

//   const { name, email, pass, roles } = req.body;

//   const newUser = new User({
//     name,
//     email,
//     pass: await User.encryptPassword(pass)
//   })

//   // Saving the User Object in Mongodb
//   const saveuser = await newUser.save();
//   const token = jwt.sign({ id: saveuser._id }, ENVJS.SECRET, { expiresIn: 36000 })
//   res.status(200).json({ token })
// };

// export const signin = async (req, res) => {
//   try {
//     const userfound = await User.findOne({ email: req.body.email }).populate('roles')

//     if (!userfound) {
//       return res.status(400).json({ msg: "usuario no encontrado" })
//     }

//     const match = await User.comparePassword(req.body.pass, userfound.pass)

//     if (!match) {
//       return res.status(401).json({ token: null, msg: "contraseña invalida" })
//     }

//     const token = jwt.sign({ id: userfound._id }, ENVJS.SECRET, { expiresIn: 36000 })

//     res.json({ token })

//   } catch (error) {
//     console.log(error);
//   }
// };