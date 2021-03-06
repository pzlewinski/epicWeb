var epicModel = function () {
	var player = {
		minigames:[],
		battles:[],
		characters:[],
		yogotar:"Dinamita",
		currentPosition:0,
		currentMinigame:0,
		version: 0.1
	}

	function loadPlayer (loadGame) {
		var minigames = epicYogomeGames.getGames()

		for(var mgIndex = 0; mgIndex < minigames.length; mgIndex++){
			var minigame = minigames[mgIndex]
			minigame.completed = false
			player.minigames.push(minigame)
		}

		// var characters = epicCharacters
		// for(var charIndex = 0; charIndex < epicCharacters.length; charIndex++ ){
		// 	var character = epicCharacters[charIndex]
		// 	character.captured = false
		// 	character.xp = 0
		// }

		loadGame()
	}

	function savePlayer(currentPlayer) {
		player = currentPlayer
	}
	
	return{
		loadPlayer:loadPlayer,
		getPlayer:function(){return player},
		savePlayer:savePlayer
	}
}()
