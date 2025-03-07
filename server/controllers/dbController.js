const DBs = require('../models/ddustbins')
const express = require('express')

const postDb = async(req,res)=>{
    const {binId, binLocation, binImage} = req.body
    const db = new DBs({
        binId,
        binLocation,
        binImage
    })
    await db.save()
    res.send(db)
}
const getDb = async(req,res)=>{
    const db = await DBs.find()
    res.send(db)
}
module.exports = {postDb, getDb}