# Project: Twitter Clone

Client requests a clone of Twitter for their next social push. The new product can take some license with the Twitter forumla, but must be functionally similar (as outlined in the user stories). 

Predictably, the client has strong opinions on which technologies they would like employed in developing the product. They would like:

 - an Express backend providing a RESTful API
 - a front end built with Handlebars and webpack consuming the API using Superagent
 - use of modern JavaScript (ES6) throughout


## Install

```
npm install
npm run knex migrate:latest
npm run knex seed:run
npm start
```


## MVP

_As a user I would like to create an account so that I can sign up for the service._

_As a user I would like to log in with a username and password so that I can access the site._

_As a user I would like to post a tweet so that I can share my thoughts with the world._

_As a user I would like to read a list of the latest tweets so that I can see what others have been posting._

_As a user I would like to follow another user so that I can keep track of what they are saying._

_As a user I would like to have a unique page that shows only the tweets I have written._

_As a user I would like to have the option to view only the tweets from people I follow._


## Stretch (in order of client's priority)

_As a user I would like to have a profile picture which is attached to each tweet I send so that I can share my beauty with the world._

_As a user I would like to be able to retweet other user's tweets so that I can share the things I like._

_As a user I would like to be able to favourite or 'heart' another user's tweets so I can let them know they're awesome._

_As a user I would like to have URLs which are embedded in tweets show up as clickable links so that I don't have to copy and paste._

_As a user I would like to be able to post pictures as part of my tweets so that I can show off my artistic or comedic prowess._

_As a user I would like to be able to reply to other tweets with tweets of my own in a 'tweet thread' so that I can have a tweet conversation._

_As a user I would like to make @mentions of other users and have them receive a notification on the site so that they can log in and see I've been talking about them._

