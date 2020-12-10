# bootcamp-simple-twitter

<p align="center">
  <img width="400" alt="ideal product" src="https://user-images.githubusercontent.com/18134219/101709717-9e748680-3a55-11eb-8bc3-28a8dfa38ff1.png">
  <p align="center"><em>the ideal product</em></p>
</p>

we _all_ know how to call APIs, manipulate the DOM, and setup our own endpoints on a server,
but how do we store data in a ~ persistent ~ manner? well, we will want to turn to databases!
(specifically [MongoDB](https://www.mongodb.com/), hosted by [Atlas](https://www.mongodb.com/cloud/atlas))

> databases give us the abilty to store data in a persistent manner. a persistent manner just
> means the data won't get lost when you turn your computer off or your server crashes

## how can i use a database to complete this simple twitter app?
oh you're in luck. the remainder of this doc will (hopefully) give you guidance in the right
direction. if it doesn't tell @Zimboboys

### setting up your database
we will be using [Atlas](https://www.mongodb.com/cloud/atlas) to host our Mongo database since
they have a wonderful free tier and it's just easy to setup. [this guide](https://docs.atlas.mongodb.com/getting-started/)
will give you better instructions on setting up your first collection than i can, so check it out

once you get to step 4 and 5 (creating a user and connecting to your DB), pay attention to the
credentials and URLs being spit out at you. you will need to use these to actually connect to the DB.
don't fret the driver configuration stuffs, you just need to find a URL that looks something like
`mongodb+srv://<username>:<password>@clustername.mongodb.net/...`  keep this close

### getting this repo set up
to actually start working, clone this repo and run `npm i` to install all the packages required

#### adding the URL as an environment variable
i would recommend adding your DB URL to the `.env` file right away, just so you can forget about it.
the dotenv package helps us read this file and use the secret information that it stores within our app

#### what are all of these files doing??
great question, lemme explain some of them
1. `package-lock.json` and `node_modules/` keeps tracks of your packages and the code they need. ignore it
2. `package.json` a little more useful, this gives us info about our project and maybe some scripts we want.
you can also ignore this
3. `models/` is where we are keeping our DB schemas (just for organization purposes). schemas are basically the
skeleton of the documents that we will be inserting into our DB, just to make sure they all have a similar structure.
frontend developers will appreciate this since they can trust the data is of a certain form
4. `html/` has all of the frontend code. there's some basic HTML and CSS, as well as JS that does a decent amount
of talking with the API that you will be running on the backend + some DOM manipulation. you're more than welcome
to experiement in here, but you don't need to if you just want to get this project up and running
5. `index.js` is where all the fun is. right now, it has enough to get you connected to your DB, serve static pages, and 
get some endpoints ready to accept requests from the frontend (see `html/`). all you have to do is plug in the code
to talk with the DB

### okok i wanna start coding now!
sweet lets go! you will want to start by defining the Tweet schema, so open up `models/tweet.js` and add some
attributes for "text" and "username" (and other things if you want to). make sure you are defining them using the
proper type and you might want to make these fields required too

now within `index.js`, add the proper [mongoose queries](https://mongoosejs.com/docs/queries.html). get your hands
dirty and google (or duckduckgo) whatever you don't know. a _little hint_, you may want to make sure you are using
`await` for some of these functions since you have to wait for the DB to actually process your request

that's all the help i'll give you in this doc. you can absolutely ask me (ethan) if you are a little confused on how
to actually do any of this, i just intended for this doc to act as a starting place

## i wanna go above and beyond! any ideas?
look at you! i'm so proud. i do have some ideas for how you could expand this a little more if you wanna get your hands
absolutely filthy. here they are (arranged from easy to hard imo)

- [ ] figure out how to sort tweets (using the DB)
- [ ] add a way to search for specific text within tweets (via the DB, not frontend)
- [ ] add some ability to edit tweets
- [ ] add a User schema and create a link between Tweets and Users (instead of just storing a username with the tweet)

yall creative folk might be able to come up with way more ideas. i'd encourage you to at least ponder the
implementation of them just so you get those brain juices flowing

## some notes
### hack4impact bootcamp
this is an _optional_ exercise that'll give you some nice practice at implementing CRUD operations
into your Node endpoints! emphasis on the _optional_. this is a nice sandbox to practice in.
it'd be cool if you turn it into a majestic sandcastle, but you really don't have to

### should i merge my code?
no. let this repo stay in this incomplete state forever so others can experiment with it

### the commit history!??!
i'm aware y'all can see that the solutions are visible within the commit history. this was
intended to be used if you need help. if you just copy it, you may have missed the point of
this _optional_ exercise
