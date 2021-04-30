const express = require("express");
const db = require("./db");
const router = express.Router();

var multer, storage, path, crypto;
multer = require("multer");
path = require("path");
crypto = require("crypto");
var upload = multer({ storage: storage })


module.exports = function (router) {
    router.post('/file_upload', file_upload);

}

async function file_upload(req,res){
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.avatar;

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('./uploads/' + avatar.name);

            //send response
            res.send({
                url: "http://dev.medsonlinebd.online/"+avatar.name

            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
}

