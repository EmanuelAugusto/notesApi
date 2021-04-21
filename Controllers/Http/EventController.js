const mongoose = require("mongoose");
const AuthController = require("../Auth/AuthController");

exports.GetEvents = async function (req, res) {
    let { userId } = AuthController.AuthUser(req);

    let eventsCollection = await mongoose
        .model("Event")
        .find({ erased: 0, userId });

    res.send(eventsCollection);
};

exports.GetEventById = async function ({ params: { id } }, res) {
    let eventsCollection = await mongoose.model("Event").findOne({ _id: id });

    res.status(200).json(eventsCollection);
};

exports.CreateEvent = async function (req, res) {
    let { userId } = AuthController.AuthUser(req);

    let newEvent = new mongoose.model("Event")(req.body);
    newEvent.userId = userId;

    newEvent.save(function (error, event) {
        if (error) res.send(error);
        res.status(200).json(event);
    });
};
