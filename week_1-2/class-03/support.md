# Supporting Information
### Start today's work on a new Branch:
We reviewed how to create and work from a branch during lecture today, so you'll start today by creating a new branch called class-03 for your work. To create a branch, starting from Master:

`git checkout -b class-03`

This will create a new branch (`-b`) and move to your new branch (`checkout`) at the same time.

### We'll be doing a lot of add-commit-push today (a-c-p)
    git add .     (Don't forget 'git status' to check your current state)
    git commit -m "some kind of meaningful message about the code you are committing"
    git push origin class-03   (REMEMBER: Do not push directly to master)

Always think of writing code in a series of steps, making sure that everything works in one step before moving to the next one. After each step, add-commit-push your work with a brief but descriptive commit message. This gives you a preserved backlog of your work with a descriptive history. This is useful for looking back at your code to see where problems emerged. We will review your commit history and your commit messages, so be sure to be attentive to this step.

## +++Add, Commit, Push+++

###Add in error correction
What if your user enters 'Y' instead of 'yes'? Or 'y' or 'YES'? Does your game still work correctly? It shouldn't. We need to build in some error correction. In your 'if' statements, where you are testing the user response, you need to add in && cases to your condition, such that Y/y/YES/yes or N/n/NO/no are all accounted for.

## +++Add, Commit, Push+++

###Add a counter
After the three questions are finished, tell the user how many answers they got correct ("You got 2 correct answers out of 3 questions" or the like). You will need to manage some form of counter for this goal; e.g. track the amount of correct vs incorrect answers, or correct vs total answers, or...?

Be sure to consider in your logic where the incremental counting should and does happen.

### Update your README file
Every repo needs a good README file. There's a lot of debate about what goes into a good README (take a look at http://stackoverflow.com/questions/2304863/how-to-write-a-good-readme), but at the least, you should have your name, the name of the project/assignment, a brief description of it, and citations to any code or sources you utilized in creating the code.

When you've got a good README finished, add-commit-push your repo to GitHub. Remember... the TA's will be checking for these intermediate commits when evaluating your assignment!
