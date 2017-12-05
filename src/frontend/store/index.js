import player from './player'
import pl from './playlist'
import Likes from './likes'

const playlist = new pl(player)
const likes = new Likes()

export default {player, playlist, likes}