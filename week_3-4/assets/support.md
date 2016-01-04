#Problem domain:
Your friend Pat has come up with a business idea by combining two signature Seattle icons: Pat has developed a recipe for a coffee-time confection called Salmon Cookies. They're cookies made into the shape of a salmon, and actually made with salmon (though the fish is ground up so fine that you can't even taste it!) that is the ideal match for a steaming cup of coffee on a gray Seattle morning. Or gray Seattle afternoon... whatever. Tourists will go gaga for them, locals will begrudgingly fall in love with them, and Pat will make a ton of money.

But, Pat needs some help with the branding of the business, as well as some help with internal data management for the company, and has enlisted your assistance because of your extensive and proven work in developing web applications. Pat's Salmon Cookies, soon with franchises all over town, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation—10:00 AM to 6:00 PM—and a few factors unique to each location:

- The minimum number of customers per hour.
- The maximum number of customers per hour.
- The average number of cookies purchased per customer.

Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application, and oh yeah... one more thing:

Pat needs you to take a leading role in doing the design work, too. Pat has a logo image picked out, but that's it. Yep, all you're getting to work off of is an illustration of a fish [see Assets Folder](week-_3-4/assets).

Pat has asked you to come up with all other aspects of the design for the web application, including a color scheme and a custom font, and maybe additional images, and provide those in this very same web application as a style guide. So, in addition to building an application that calculates daily sales projections for each location, you also need to create a style guide that is colorful, eye-catching, readable, useful, informative, specific, repeatable, and ultimately ready for use on T-shirts, stickers, coffee mugs, cookie bags, napkins, and so on.

You've got a lot to do.
*Plan your work, and work your plan*.

#Calculate Daily Sales Projections
We're going to assemble this web application bit by bit.

First, create a separate JS object for each shop location that does the following:

1. Stores the min/max hourly customers, and the average cookies per customer, in object properties
2. Uses a method of that object to generate a random number of customers per hour. [Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global)
3. Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and  the random number of customers generated
4. Store the results for each location in a separate array
5. Display the values of each array as unordered lists in the browser
6. Calculating the sum of these hourly totals; your output for each location should look like this:

    Pike Place Market
    - 10am: 56 cookies
    - 11am: 77 cookies
    - 12pm: 93 cookies
    - 1pm: 144 cookies
    - 2pm: 119 cookies
    - 3pm: 84 cookies
    - 4pm: 61 cookies
    - 5pm: 23 cookies
    - Total: 657 cookies

Display the lists on index.html. We will be adding features to this application and working with its layout throughout the week.

Here are the starting numbers that you'll need to build these objects:

Location        | Min / Cust | Max / Cust | Avg Cookie / Sale
----------------|------------|------------|-------------------
Pike Place      |      17    |     88     |        5.2
SeaTac Airport  |      6     |     24     |        1.2
Southcenter     |      11    |     38     |        1.9
Bellevue Square |      20    |     48     |        3.3
Alki            |      3     |     24     |        2.6

These numbers are simply Pat's estimates for now, but eventually, we'll want the ability to update these numbers for each location, and to add/remove locations. But we'll not build all of that today. **Each location is its own object**.


#Style Guide
Look at some example style guides on the internet. You will be making a basic style guide that will be on the page styleguide.html.

You do not need to get as fancy as those, but at the least, we'd like to see these pieces in your style guide:

1. A custom Google font for highlights
2. A specified standard san-serif web font for data (such as Arial, Verdana, or Helvetica)
3. A specified standard serif web font for text (such as Georgia, Times, etc.)
4. Specified different font colors for all three font usages
5. A background color for the default page background (make sure font colors have good contrast and are readable on this background)
6. A different background color for elements such boxes and tables (so make sure the font colors contrast against this well, too!)
7. Anything else you'd like to add related to style. But remember: simplicity, clarity,  and consistency are good things in design.
