var playerScore = 0
var computerScore = 0
var totalGames = 0
function playerChoice(player) {
  var hand = ["rock", "paper", "scissors"]
  var randNum = Math.floor(Math.random() * 3)
  var computer = hand[randNum]
  $("#comp-choice").html(`I picked ${computer}.`)
  if (player == computer) {
    $("#result").html('Tie Game!')
  }
  else if ((player == "rock" && computer == "paper") || (player == "paper" && computer == "scissors") || (player == "scissors" && computer == "rock")) {
    $("#result").html('I beat you this time. Too easy.')
    computerScore++
  }
  else if ((computer == "rock" && player == "paper") || (computer == "paper" && player == "scissors") || (computer == "scissors" && player == "rock")) {
    $("#result").html('You beat me this time. *cough*cough*CHEATER*cough*')
    playerScore++
  }
  totalGames++
  $("#score").html(`Player: ${playerScore}<br>Computer: ${computerScore}<br>Total: ${totalGames}`)
  if ((playerScore == 3 || computerScore == 3 || totalGames >= 5) && playerScore != computerScore) {
    $("#btn-rock").prop("disabled", true)
    $("#btn-paper").prop("disabled", true)
    $("#btn-scissors").prop("disabled", true)
    if (playerScore > computerScore) {
      gameEndMessage = "Congratulations, you won best of 5 games.<br>Humans cheat."
    }
    else {
      gameEndMessage = "Sorry, Computer won best of 5 games.<br>Machines are superior to humans."
    }
    $("#game-end-message").html(gameEndMessage)
  }
}

function resetGame() {
  totalGames = 0
  computerScore = 0
  playerScore = 0
  $("#btn-rock").prop("disabled", false)
  $("#btn-paper").prop("disabled", false)
  $("#btn-scissors").prop("disabled", false)
  $("#comp-choice").html('')
  $("#result").html('')
  $("#score").html('Player: 0<br>Computer: 0<br>Total: 0')
  $("#game-end-message").html('')
}
