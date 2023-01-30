function PDATE_SCORE_BORED () {
    OLED.clear()
    OLED.writeStringNewLine("Player A " + PLAYER_A)
    OLED.newLine()
    OLED.writeStringNewLine("Player B " + PLAYER_B)
    OLED.newLine()
    OLED.writeStringNewLine("Player Ties " + TIES)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds " + ROUNDS)
}
let TIES = 0
let PLAYER_B = 0
let PLAYER_A = 0
let ROUNDS = 0
OLED.init(128, 64)
OLED.writeStringNewLine("LETS PLAY A GAME")
ROUNDS = 0
PLAYER_A = 0
PLAYER_B = 0
TIES = 0
basic.pause(200)
PDATE_SCORE_BORED()
