import express from "express";
import homeController from "../controller/HomeController";
import userController from "../controller/userController";
import { route } from "express/lib/application";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.HomePage);
  router.get("/aboutme", homeController.getAboutme);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.post("/api/create-user", userController.handleCreateUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);

  router.get("/api/allcode", userController.getAllCode);

  return app.use("/", router);
};
module.exports = initWebRoutes;
