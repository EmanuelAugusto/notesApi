const mongoose = require("mongoose");
const AuthController = require("../Auth/AuthController");

exports.GetNotes = async function (req, res) {
    let { userId } = AuthController.AuthUser(req);

    let notesCollection = await mongoose
        .model("Note")
        .find({ erased: 0, userId });

    res.send(notesCollection);
};

exports.GetNoteById = async function ({ params: { id } }, res) {
    let notesCollection = await mongoose.model("Note").findOne({ _id: id });

    res.status(200).json(notesCollection);
};

exports.CreateNote = async function (req, res) {
    let { userId } = AuthController.AuthUser(req);

    let newNote = new mongoose.model("Note")(req.body);
    newNote.userId = userId;

    newNote.save(function (error, note) {
        if (error) res.send(error);
        res.status(200).json(note);
    });
};

exports.UpdateNote = async function (req, res) {
    let { userId } = AuthController.AuthUser(req);

    let { title, noteHtml } = req.body;
    let { id } = req.params;

    let editNote = await mongoose
        .model("Note")
        .findOneAndUpdate(
            { _id: id, userId },
            { title, noteHtml },
            function (error) {
                if (error) res.send(error);

                res.json({ msg: "updated" });
            }
        );
};

exports.DeleteNote = async function (req, res) {
    let { userId } = AuthController.AuthUser(req);

    let editNote = await mongoose
        .model("Note")
        .findOneAndUpdate(
            { _id: req.params.id, userId },
            { erased: 1 },
            function (error) {
                if (error) res.send(error);

                res.json({ msg: "updated" });
            }
        );
};
