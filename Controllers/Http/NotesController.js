const mongoose = require("mongoose");

exports.GetNotes = async function (req, res) {
    let notesCollection = await mongoose.model("Note").find({erased: 0 });

    res.send(notesCollection);
};

exports.GetNoteById = async function ({ params: { id } }, res) {
    let notesCollection = await mongoose.model("Note").findOne({ _id: id });

    res.status(200).json(notesCollection);
};

exports.CreateNote = async function (req, res) {
    let newNote = new mongoose.model("Note")(req.body);
    newNote.userId = "df903md032m40nm";

    newNote.save(function (error, note) {
        if (error) res.send(error);
        res.status(200).json(note);
    });
};

exports.UpdateNote = async function (
    { body: { title, noteHtml }, params: { id } },
    res
) {
    let editNote = await mongoose
        .model("Note")
        .findOneAndUpdate({ _id: id }, { title, noteHtml }, function (error) {
            if (error) res.send(error);

            res.json({ msg: "updated" });
        });
};

exports.DeleteNote = async function (
    { params: { id } },
    res
) {
    let editNote = await mongoose
        .model("Note")
        .findOneAndUpdate({ _id: id }, { erased: 1 }, function (error) {
            if (error) res.send(error);

            res.json({ msg: "updated" });
        });
};


