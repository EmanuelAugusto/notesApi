const { Router } = require("express");
const NotesController = require('../Controllers/Http/NotesController')
const EventController = require('../Controllers/Http/EventController')
const AuthController = require('../Controllers/Auth/AuthController')
const Auth = require('../Middlewares/Auth')

const Route = Router();

Route.post("/createuser",  AuthController.createAccount);
Route.post("/login",  AuthController.Login);
Route.get('/session', Auth.session, AuthController.Session)

Route.get("/notes", Auth.session, NotesController.GetNotes);
Route.get("/notes/:id", Auth.session, NotesController.GetNoteById);
Route.post("/notes", Auth.session, NotesController.CreateNote);
Route.put("/notes/:id", Auth.session, NotesController.UpdateNote);
Route.delete("/notes/:id", Auth.session, NotesController.DeleteNote);


Route.get("/events", Auth.session, EventController.GetEvents);
Route.post("/events", Auth.session, EventController.CreateEvent);

module.exports =  Route;
