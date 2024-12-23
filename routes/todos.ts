import express from "express";
const router = express.Router();
import * as todos from "../controllers/todos";

router.route("/")
    .get(todos.index)
    .post(todos.createTodo);

router.get("/new", todos.renderNewForm);

router.route("/:id")
    .put(todos.updateTodo)
    .delete(todos.deleteTodo);

export default router;