const GET_PLAYERS = `
  select * from players
`

const ADD_PLAYER = `
  insert into players (firstname, lastname, age, race, text) values ($1, $2, $3, $4, $5)
`

const UPDATE_PLAYER = `
  update players set firstname = coalesce($2, firstname), lastname = coalesce($3, lastname), age = coalesce($4, age), race = coalesce($5, race), text = coalesce($6, text) where id = $1;
`

const CHECK_PLAYER = `
  select * from players where id = $1
`

const DELETE_PLAYER = `
  delete from players where id = $1
`




module.exports  = {
  GET_PLAYERS, 
  ADD_PLAYER,
  UPDATE_PLAYER,
  CHECK_PLAYER,
  DELETE_PLAYER
}