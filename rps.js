  var playerScore = 0
  var computerScore = 0
  var totalGames = 0
  function playerChoice(player) {
      var hand = ["rock", "paper", "scissors"]
      var randNum = Math.floor(Math.random() * 3)
      var computer = hand[randNum]
      $("#compChoice").html(`I picked ${computer}.`)
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
    }
