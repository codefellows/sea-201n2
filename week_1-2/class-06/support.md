#Supporting Information
###Today's New Work: Extend and Refine
You'll be doing the following things to each other's games. After each bit of work is completed, be sure to do an add-commit-push cycle to place the code on GitHub and preserve a versioned history of your work. As with yesterday, we're done with 'alert' windows: all feedback to the user for the new questions you'll be adding should appear in the browser window, so you'll need to add new `<p>s` with "id" attributes and also new `document.getElementById`'s as well.

###Add images to each correct response:
When the user gets the correct answer, have a small image (200x200 pixels or so) display below the message. You will do this with `innerHTML` and a `<img>` tag as seen in Sam's code from the end of class. **a-c-p**

###Add some color with CSS styling:
This is wide open. Use your imagination and have fun with it! You're going to need to link to a CSS file to do this, right? One thing to be sure to do: make correct answers display in green and incorrect answers display in red, as using the `className` property like we used in class. **a-c-p**

###Update the README file:
In the README file, add in the names of the driver and navigator and indicate that the code was worked on together. This is basic record-keeping so that you can keep up with how the code has been edited in a user-friendly format.  **a-c-p**

###Code style:
As always, strive for readable and maintainable code. Proofread. Fix any issues with indenting and other code style, such as improving variable names and ensuring that line terminations are done properly. **a-c-p**

###Deploy:
When everything is done, follow these instructions to deploy to GitHub Pages. This will put your guessing game live and for realz on the intarwebs so that it can be accessed from anywhere. Here are the steps:

###Make sure all of your edits are done and that you've got everything exactly like you want it; e.g. Merge any un-merged pull requests to Master.
1. **a-c-p** as usual.
2. In the command line, enter the following commands: `git checkout master` and then `git checkout -b gh-pages`
3. Then, in the command line, `git push origin gh-pages`
4. Then, in the command line `git checkout master`
5. Depending on upload time and GitHub's time to get things in place, it make take a few minutes before your page goes live.
6. Your page will be at `http://[username].github.io/guessing-game`, and you can also access the link through the Settings (right side of the screen) for the repo.

If you want to make more changes, do so, and then follow these steps again. Push any updates to the gh-pages branch, just like any other working branch!
