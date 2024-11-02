import express from "express";
import * as blogController  from "../controller/controller.js";

const router = express.Router();

// Create Route
router.post("/create-blog", blogController.createBlog);

// Read Route
router.get("/read-blog",blogController.readBlog);

// Update Route
router.put("/update-blog",blogController.updateBlog);

// Delete Route
router.delete("/delete-blog",blogController.deleteBlog);

// 404 error handle
router.use((request, response, next) => {
    response.status(400).send("Requested URL not found");
});

router.use((error, request, response, next) => {
    if(error.message) {
        response.status(500).send(error.message);
    } else {
        response.status(500).send("There was an error");
    }
});

export default router;