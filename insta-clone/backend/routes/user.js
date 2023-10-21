const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const POST = mongoose.model("POST");
const USER = mongoose.model("USER");

router.get("/user/:id", (req, res) => {
    USER.findOne({ _id: req.params.id })
      .select("-password")
      .then(user => {
        return POST.find({ postedBy: req.params.id })
          .populate("postedBy", "_id")
          .exec()
          .then(post => {
            res.status(200).json({ user, post });
          })
          .catch(err => {
            return res.status(422).json({ error: err });
          });
      })
      .catch(err => {
        return res.status(404).json({ error: "User not found" });
      });
  });
  

module.exports = router;