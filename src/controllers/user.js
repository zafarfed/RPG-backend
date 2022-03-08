const newsModel = require('../model/query')
const { rows } = require('../../database/pg')

const GET = async (req, res) => {
  try {
    const players = await rows(newsModel.GET_PLAYERS);
    res.json(players)
  } catch (error) {
    console.log(error);
  }
}

const POST = async (req, res) => {
  const { firstname, lastname, age, race, text } = req.body
  try {
    const newPlayer = await rows(newsModel.ADD_PLAYER, firstname, lastname, age, race, text)

    res.json("player created");
  } catch (error) {
    console.log(error);    
  }
}


const PUT = async (req, res) => {
  const { firstname, lastname, age, race, text } = req.body
  const {id} = req.params
  try {
    const checkPlayer = await rows(newsModel.CHECK_PLAYER, id)

    if(checkPlayer.length > 0){
      const updatePlayer = await rows(newsModel.UPDATE_PLAYER, id, firstname, lastname, age, race, text)

      res.json("player updated");
    } else {
      res.json("player not found");
    }

  } catch (error) {
    console.log(error);    
  }
}

const DELETE = async (req, res) => {
  const {id} = req.params
  try {
    const checkPlayer = await rows(newsModel.CHECK_PLAYER, id)

    if(checkPlayer.length > 0){
      const deletePlayer = await rows(newsModel.DELETE_PLAYER, id)

      res.json("player deleted");
    } else {
      res.json("player not found");
    }

  } catch (error) {
    console.log(error);    
  }
}

const GET_ONE = async (req, res) => {
  const {id} = req.params
  try {
    const player = await rows(newsModel.CHECK_PLAYER, id)

    if(player.length > 0){
      res.json(player);
    } else {
      res.json("player not found");
    }

  } catch (error) {
    console.log(error);    
  }
}



module.exports = {
  GET,
  POST,
  PUT, 
  DELETE,
  GET_ONE
}