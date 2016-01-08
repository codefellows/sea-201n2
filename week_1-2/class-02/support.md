# Supporting Information
# Git
#### Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

### Git Commands:
    git status              Provides a detailed description of current state in working directory

    git checkout -- <file>  Remove all changes to file to the point of the last commit.

    git add <file>          Include file in staged/tracked status of working directory

    git reset HEAD <file>   Remove file from staged/tracked status of working directory

    git commit -m ''        Snapshot the tracked changes in current working directory; with message

    git push                Push local commits to GitHub


##+++++Reminder: Add, Commit, Push (Git Workflow)+++++

###Create a new GitHub Repository
If you have not already, create a new GitHub Repository called guessing-game on GitHub, and clone that repository to your local computer. Your cloned repository folder should be inside your class assignments folder (codefellows or projects or whatever).

###Scaffold your guessing game
Inside of the guessing-game directory on your computer, create an index.html file or move your existing file to this folder.

Make it look similar to the one we created in class today:
- Place your three guessing game questions in prompts
- Store the user input into a separate variable for each question
- `console.log()` the response to each question with a useful message, like we did in class
- In an a sequence of alerts to the user, give the user a message repeating the answers that they gave to the questions

##+++++Reminder: Add, Commit, Push (Git Workflow)+++++

###Respond to the user using if/else and 'alert'
Design a script for an extended guessing game, which asks three questions using prompts, and responds to the user using alerts.
  - The game will consist of three yes/no questions about you (example: "Did I grow up in South Dakota?")
  - The questions will be presented in a 'prompt' with user feedback in an 'alert'
  - Tell the user which questions they missed (such as "No, I did not grow up in South Dakota. I grew up in Alabama.")
  - If they gave the correct answer, display a specific and personalized confirmation message in an 'alert' (such as "Yay! You got it right, Chris! I was indeed born in South Dakota!"), and if they gave an incorrect answer, display a specific and personalized alternate message (such as "No, sorry Chris, I was born in Liechtenstein, not South Dakota.").

Do this for each of the three questions.

###+++++

Strive for clear and readable code style with proper indentation, line termination, and descriptive variable names.

(If you want to extend this assignment, add a fourth question that takes a numeric input and then indicates to the user whether the answer is correct, too high, or too low. This part is not necessary for today, though... we'll cover it tomorrow.)
