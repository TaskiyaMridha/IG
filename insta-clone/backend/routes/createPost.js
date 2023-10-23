const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const { route } = require("./auth");
const POST = mongoose.model("POST");

// Route to get all posts
router.get("/allposts", requireLogin, (req, res) => {
  POST.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error occurred while fetching posts" });
    });
});

// Route to create a new post
router.post("/createPost", requireLogin, (req, res) => {
  const { body, pic } = req.body;

  if (!body || !pic) {
    return res.status(422).json({ error: "Please add all the fields" });
  }

  const post = new POST({
    body,
    photo: pic,
    postedBy: req.user,
  });

  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while creating the post" });
    });
});

// Route to get user's posts
router.get("/myposts", requireLogin, (req, res) => {
  POST.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")

    .then((myposts) => {
      res.json(myposts);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching user's posts" });
    });
});

// Route to like a post
router.put("/like", requireLogin, (req, res) => {
  POST.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    { new: true }
  )
    .populate("postedBy", "_id name")

    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while liking the post" });
    });
});

// Route to unlike a post
router.put("/unlike", requireLogin, (req, res) => {
  POST.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    { new: true }
  )
    .populate("postedBy", "_id name")

    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while unliking the post" });
    });
});
router.put("/comment", requireLogin, (req, res) => {
  const comment = {
    comment: req.body.text,
    postedBy: req.user._id,
  };
  POST.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while liking the post" });
    });
});


// Api to delete post
router.delete("/deletePost/:postId", requireLogin, (req, res) => {
  POST.findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .then((post) => {
      if (!post) {
        return res.status(422).json({ error: "Post not found" });
      }

      if (post.postedBy._id.toString() === req.user._id.toString()) {
        return post
          .deleteOne()
          .then(() => res.json({ message: "Successfully deleted" }))
          .catch((err) => console.log(err));
      }

      return res.status(403).json({ error: "Permission denied" });
    })
    .catch((err) => console.log(err));
});
//to show following post
router.get("/myfollwingpost",requireLogin,(req,res)=>{
POST.find({postedBy:{$in:req.user.following}})
.populate("postedBy", "_id name")
.populate("comments.postedBy","_id name")
.then(posts=>{
    res.json(posts)
})
.catch(err=>{console.log(err)})
})
module.exports = router;
