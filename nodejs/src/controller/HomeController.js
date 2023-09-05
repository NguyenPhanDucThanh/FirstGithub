import db from "../models/index";
import CRUDServices from "../services/CRUDService";
let HomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    // console.log(data);
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};
let getAboutme = (req, res) => {
  return res.render("tests/aboutme.ejs");
};
let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDServices.createNewUser(req.body);
  console.log(req.body);
  console.log(message);
  return res.send("IEEEE");
};
let displayCRUD = async (req, res) => {
  let data = await CRUDServices.getAllUser();
  // return res.send("Display CRUD from controller");
  return res.render("getAllUser.ejs", {
    data: data,
  });
};
let getEditCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    let user = await CRUDServices.getUserInforById(id);
    return res.render("editCRUD.ejs", {
      user: user,
    });
  } else {
    res.send("Users not found !");
  }
};
let putCRUD = async (req, res) => {
  let data = req.body;
  let allUser = await CRUDServices.updateUserData(data);
  return res.render("getAllUser.ejs", {
    data: allUser,
  });
};
let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDServices.deleteUserById(id);
    return res.send("Delete Success");
  } else {
    return res.send("Delete fail");
  }
};
module.exports = {
  HomePage,
  getAboutme,
  getCRUD,
  postCRUD,
  displayCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
