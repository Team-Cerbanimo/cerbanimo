const router = require('express').Router();
const { User } = require("../model");
var passport = require("../config/passport.js");

router.get("/", async (req, res) => {
    try {
        let allUsers = await User.findAll()
        res.json(allUsers)
    } catch (err) {
        if (err) throw err
    }
})

router.get("/:id", async (req, res) => {
    try {
        let oneUser = await User.findOne({
            where: { id: req.params.id }
        })
        res.json(oneUser)
    } catch (err) {
        if (err) throw err
    }

})

router.post("/", async (req, res) => {
    try {
        let newUser = await User.findOrCreate({
            where: { username: req.body.username },
            defaults: req.body
        })
        res.json(newUser)
    } catch (error) {
        if (error) {
            throw error
        }
    }
})

router.put("/:id", async (req, res) => {
    try {
      let updatedUser = await  User.update(req.body, {
            where:{id: req.params.id} 
        })
        res.json(updatedUser)
    } catch (err) {
        if (err) throw err
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let deleted = await User.destroy({
            where:{id: req.params.id}
        })
        res.json(deleted)
    } catch (err) {
        if (err) throw err
    }
})
module.exports = router;