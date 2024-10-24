// import express from "express";
// import isAuthenticated from "../middlewares/isAuthenticated.js";
// import {
//   getCompany,
//   getCompanyById,
//   registerCompany,
//   updateCompany,
// } from "../controllers/company.controller.js";
// import { singleUpload } from "../middlewares/mutler.js";

// const router = express.Router();

// router.route("/register").post(isAuthenticated, registerCompany);
// router.route("/get").get(isAuthenticated, getCompany);
// // router.get("/get", isAuthenticated, getAllCompanies);

// router.route("/get/:id").get(isAuthenticated, getCompanyById);
// router.route("/update/:id").put(isAuthenticated, singleUpload, updateCompany);

// export default router;

import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/mutler.js";

const router = express.Router();

// Refactor routes using individual method calls
router.post("/register", isAuthenticated, registerCompany);
router.get("/get", isAuthenticated, getCompany);
// router.get("/get", isAuthenticated, getAllCompanies);

router.get("/get/:id", isAuthenticated, getCompanyById);
router.put("/update/:id", isAuthenticated, singleUpload, updateCompany);

export default router;
