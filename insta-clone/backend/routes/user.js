const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const POST = mongoose.model("POST");
const USER = mongoose.model("USER");
const requireLogin = require("../middlewares/requireLogin");

//to get user profile
router.get("/user/:id", (req, res) => {
  USER.findOne({ _id: req.params.id })
    .select("-password")
    .then((user) => {
      return POST.find({ postedBy: req.params.id })
        .populate("postedBy", "_id")
        .exec()
        .then((post) => {
          res.status(200).json({ user, post });
        })
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    })
    .catch((err) => {
      return res.status(404).json({ error: "User not found" });
    });
});
// to follow user
router.put("/follow", requireLogin, async (req, res) => {
  try {
    await USER.findByIdAndUpdate(req.body.followId, {
      $push: { followers: req.user._id },
    }, { new: true });

    const result = await USER.findByIdAndUpdate(req.user._id, {
      $push: { following: req.body.followId },
    }, { new: true });

    res.json(result);
  } catch (err) {
    res.status(422).json({ error: err });
  }
});
// Follow user
router.put("/follow", requireLogin, async (req, res) => {
  try {
    const followId = req.body.followId;

    // Update the target user's followers and the follower's following
    await USER.findByIdAndUpdate(followId, {
      $push: { followers: req.user._id },
    });

    const result = await USER.findByIdAndUpdate(req.user._id, {
      $push: { following: followId },
    });

    res.json(result);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});

// Unfollow user
router.put("/unfollow", requireLogin, async (req, res) => {
  try {
    const followId = req.body.followId;

    // Remove the target user from the followers and the follower from the following
    await USER.findByIdAndUpdate(followId, {
      $pull: { followers: req.user._id },
    });

    const result = await USER.findByIdAndUpdate(req.user._id, {
      $pull: { following: followId },
    });

    res.json(result);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});


// to upload profile pic

router.put("/uploadProfilePic", requireLogin,(req,res)=>{
  USER.findByIdAndUpdate(req.user._id,{
    $set:{Photo:req.body.pic}
  },{
    new:true
  }).then(result => {
    res.json(result);
  })
  .catch(err => {
    res.status(422).json({ error: err });
  });
})
module.exports = router;
