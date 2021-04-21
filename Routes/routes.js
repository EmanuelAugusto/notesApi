const { Router } = require("express");
const NotesController = require('../Controllers/Http/NotesController')

const Route = Router();

Route.get("/notes", NotesController.GetNotes);
Route.get("/notes/:id", NotesController.GetNoteById);
Route.post("/notes", NotesController.CreateNote);
Route.put("/notes/:id", NotesController.UpdateNote);
Route.delete("/notes/:id", NotesController.DeleteNote);

module.exports =  Route;
