import sys
import re
from game import *

players = PlayerList( "../json/players.json")
question_list = QuestionList("../json/questions.json")
game = Game(question_list, players, "score", "status")

game.reset()
print("Game reset done.")
