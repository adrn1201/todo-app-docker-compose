import { Request, Response } from "express";
import Todo from "../models/todo";


export const index = async (req: Request, res: Response) => {
    const todos = await Todo.find({});
    res.render('todos/index', { todos });
};

export const renderNewForm = (req: Request, res: Response) => {
    res.render('todos/new');
};

export const createTodo = async (req: Request, res: Response) => {
    const todo = new Todo(req.body.todo);
    await todo.save();
    res.redirect('/todos');
};

export const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Todo.findByIdAndUpdate(id, { ...req.body.todo });
    res.redirect('/todos');
};

export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.redirect('/todos');
};