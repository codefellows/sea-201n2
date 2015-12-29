#Supporting Information
##Before you begin
Confirm that you have created a Pull request for Class 03's work, and merged to the Master branch.

##Pair Programming Basics
In pair programming there are two developers working on a single body of code on a single computer. One member of the pair is the driver, and this person will be the one doing all of the typing actual work on the laptop. The other member of the pair is the navigator, and this person will work with only their voice and their thoughts. The navigator does not touch the keyboard, nor does the navigator work on their laptop "on the side." The navigator is fully engaged with the work that the pair is doing, using at most a piece of scratch paper to sketch diagrams, take notes, or list ideas. Again, the navigator does not touch the keyboard, nor does the navigator work on their laptop "on the side."

###General Workflow for this Assignment
Your pair will extend and refine each other's games today. The person whose game is currently being worked on will be in the navigator role, and the other person will be the driver. Once starting work in lab, plan to spend an hour or two on one person's game, and then swap roles.

###How To Get Code Ready For Work
**Be sure to follow these instructions VERY carefully.**

1. Decide whose code you will work on first. The owner of that code (who will be the navigator) provides the link to their GitHub repo to the other member of the pair (who will be the driver).
2. The driver follows the link to that repo and creates a fork of the repo.
3. The driver then goes to their fork of the repo (the URL should have the driver's GitHub name in it) and copies the HTTPS link to that repo (the link should end in .git).
4. Inside of the driver's main work directory (NOT in their guessing_game/ directory) on their laptop, enter the command `git clone the-https-link-you-copied`. That will create a local version of the forked repo on the driver's laptop.
5. `cd` into that directory and enter `atom .` in the terminal to open all of the files in Atom.
6. Start working on the code!

###Make a Pull Request
1. Once everything is finished, and you have done the last edits and pushed them to GitHub, it's time to send the edited code from the branch you've been working on to Master. We do this with a GitHub feature called a pull request.
2. From the home page of the repository on GitHub, hit the green button that says 'Create pull request'
3. Follow the remaining steps as described onscreen and as shown here: https://help.github.com/articles/using-pull-requests
4. These instructions are deliberately vague, to give you practice in reading through instructions and getting guidance from documentation.
5. Once the Pull Request has been created, you will accept the pull request by merging/closing it. After that, in the terminal on your laptop, while in the game directory, enter the command `git pull origin master` to retrieve the modified code from GitHub.
6. Next create a new branch from Master for today's work.
    git checkout master   (To move to Master Branch)
    git checkout -b class-04
    Extend and Refine

You'll be doing the following things to your game. After each bit of work is completed, be sure to do an add-commit-push cycle to place the code on GitHub and preserve a versioned history of your work.

###Move logic into functions:
As we demonstrated in class today, move the logic for the individual questions into separate functions, and call those functions to initiate the game. Use the code from class today as a model. After completing this step the game should behave exactly as it did before. **a-c-p**

###Move the alerts into the browser window:
Using the code from class today as a model, move the alert feedback to the game player into `<p>`  or `<h2>` tags or similar that display in the browser window. **a-c-p**

###Update the README file:
Always take a look at your README file and see if it needs updating based upon your most recent work.

###Code style:
As always, strive for readable and maintainable code. Fix any issues with indenting and other code style, such as improving variable names and ensuring that line terminations are done properly. **a-c-p**

###Create a Pull Request to Master
Following the same steps from yesterday's work, once you have done your **a-c-p**, go to GitHub and create and new Pull Request, and merge your work from the class-04 branch into Master. Before you merge, copy the URL of your Pull Request, so you can submit your work.
