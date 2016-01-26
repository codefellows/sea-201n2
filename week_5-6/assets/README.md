#Setup
Start by making a new repo called market-analysis-app, whether with the `git init` or `git clone` approach. Go ahead and build the scaffold for your app, push it to master, and then create a new branch to start your development work once you've digested the problem domain.

Scaffold for your project:
1. index.html
2. js/ directory with app.js in it
3. css/ directory with reset, layout, &amp; style.css in it
4. img/ directory to store your images

#Problem domain:
You've been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the setback pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel. But in this case, BusMall catalogs are placed on Puget Sound regional transit system buses... whose overall travel times are now comparable to cross-country flights, after all.

Since catalogs are expensive to print and distribute, the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell. This means that BusMall wants to do market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.

To make this market analysis maximally effective, BusMall wants you to build an app that displays potential products to individuals focus groups (three products at a time), has the group members rank those three products in order of interest, and then store, calculate, and visually display the resulting data.

- When the app loads, randomly select three photos from an album of photos you have been provided by the analysis team
- Display the photos on the screen, side-by-side-by-side
- Have some text on the screen to instruct the user to click on the product that she/he would be most likely to want to buy
- Use an event listener on each photo to track the number of times an individual photo has been clicked; log into the console the name of a product that has been selected, and its total votes so far. At the same time, display three more random photos.
- Put a 'See Totals' button on the page, only after a user has voted 15 times, that displays a listing of all objects and their vote totals on the screen. The user may continue voting, but on the next vote hide the list of votes, and only display it again after 15 more votes. Stretch goal: sort the list by number of votes received before displaying it.
- Even more stretch goal: calculate the percentage of votes-per-appearances for each photo and display that in a separate list.
- Even MORE stretch goal: come up with another analysis metric based on the number of clicks, and present all of these data points in a table rather than a list.

You are in charge of the look-and-feel of the app too. Please do the following:
- Choose a custom web font (Links to an external site.).
- Choose a custom color palette (Links to an external site.).
- Create a layout using semantic HTML (and definitely consider using a layout tool such as Skeleton to keep things neat and orderly)
- After further analysis, you realize that you'll need the following domain models.

#Tips
- A set of Product objects to manage all the attributes and behaviors around the product photos... hmm... how to make multiple objects easily?
- A single ranker object to manage all the attributes and behaviors around a visitor's product-ranking experience.
- First build the HTML structure, add the JavaScript behavior, and then add some CSS styling. Don't forget to add a README.md describing your approach to this app.
