
Hackathon Starter [![Dependency Status](https://david-dm.org/sahat/hackathon-starter/status.svg?style=flat)](https://david-dm.org/sahat/hackathon-starter) [![Build Status](https://img.shields.io/travis/sahat/hackathon-starter.svg?style=flat)](https://travis-ci.org/sahat/hackathon-starter) [![Analytics](https://ga-beacon.appspot.com/UA-47447818-2/hackathon-starter?pixel)](https://github.com/igrigorik/ga-beacon)
=======================

A boilerplate for **Node.js** web applications.


Table of Contents
-----------------

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [FAQ](#faq)
- [How It Works](#how-it-works-mini-guides)
- [Mongoose Cheatsheet](#mongoose-cheatsheet)
- [Deployment](#deployment)
- [License](#license)


Prerequisites
-------------

- [MongoDB](https://www.mongodb.org/downloads)
- [Node.js](http://nodejs.org)
- Command Line Tools
 - <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X:** [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9 Mavericks**: `xcode-select --install`)
 - <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows:** [Visual Studio](http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8)
 - <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu** / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Linux_Mint.png" height="17">&nbsp;**Linux Mint:** `sudo apt-get install build-essential`
 - <img src="http://i1-news.softpedia-static.com/images/extra/LINUX/small/slw218news1.png" height="17">&nbsp;**Fedora**: `sudo dnf groupinstall "Development Tools"`
 - <img src="https://en.opensuse.org/images/b/be/Logo-geeko_head.png" height="17">&nbsp;**OpenSUSE:** `sudo zypper install --type pattern devel_basis`

**Note:** If you are new to Node or Express, I recommend to watch
[Node.js and Express 101](https://www.youtube.com/watch?v=BN0JlMZCtNU)
screencast by Alex Ford that teaches Node and Express from scratch. Alternatively,
here is another great tutorial for complete beginners - [Getting Started With Node.js, Express, MongoDB](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/).

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
$ git clone https://github.com/CUNYTech/eOrganizer
$ cd myproject

# Install NPM dependencies
$ npm install

$ node app.js
```

**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon).
It watches for any changes in your  node.js app and automatically restarts the
server. Once installed, instead of `node app.js` use `nodemon app.js`. It will
save you a lot of time in the long run, because you won't need to manually
restart the server each time you make a small change in code. To install, run
`sudo npm install -g nodemon`.


Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware.  |
| **config**/secrets.js              | Your API keys, tokens, passwords and database URL.           |
| **controllers**/api.js             | Controller for /api route and all api examples.              |
| **controllers**/contact.js         | Controller for contact form.                                 |
| **controllers**/home.js            | Controller for home page (index).                            |
| **controllers**/user.js            | Controller for user account management.                      |
| **models**/User.js                 | Mongoose schema and model for User.                          |
| **public**/                        | Static assets (fonts, css, js, img).                         |
| **public**/**js**/application.js   | Specify client-side JavaScript dependencies.                 |
| **public**/**js**/main.js          | Place your client-side JavaScript here.                      |
| **public**/**css**/main.less       | Main stylesheet for your app.                                |
| **public/css/themes**/default.less | Some Bootstrap overrides to make it look prettier.           |
| **views/account**/                 | Templates for *login, password reset, signup, profile*.      |
| **views/api**/                     | Templates for API Examples.                                  |
| **views/partials**/flash.jade      | Error, info and success flash notifications.                 |
| **views/partials**/header.jade     | Navbar partial template.                                     |
| **views/partials**/footer.jade     | Footer partial template.                                     |
| **views**/layout.jade              | Base template.                                               |
| **views**/home.jade                | Home page template.                                          |
| .travis.yml                        | [Travis CI](https://travis-ci.org/) integration.                                       |
| app.js                             | Main application file.                                       |
| setup.js                           | Tool for removing authentication providers and other things. |

**Note:** There is no preference how you name or structure your views.
You could place all your templates in a top-level `views` directory without
having a nested folder structure, if that makes things easier for you.
Just don't forget to update `extends ../layout`  and corresponding
`res.render()` paths in controllers.

List of Packages
----------------

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| async                           | Utility library that provides asynchronous control flow.              |
| bcrypt-nodejs                   | Library for hashing and salting user passwords.                       |
| bitgo                           | Multi-sig Bitcoin wallet API.                                         |
| cheerio                         | Scrape web pages using jQuery-style syntax.                           |
| clockwork                       | Clockwork SMS API library.                                            |
| connect-mongo                   | MongoDB session store for Express.                                    |
| express                         | Node.js web framework.                                                |
| body-parser                     | Express 4 middleware.                                                 |
| cookie-parser                   | Express 4 middleware.                                                 |
| express-session                 | Express 4 middleware.                                                 |
| morgan                          | Express 4 middleware.                                                 |
| multer                          | Express 4 middleware.                                                 |
| compression                     | Express 4 middleware.                                                 |
| errorhandler                    | Express 4 middleware.                                                 |
| method-override                 | Express 4 middleware.                                                 |
| serve-favicon                   | Express 4 middleware offering favicon serving and caching.            |
| express-flash                   | Provides flash messages for Express.                                  |
| express-validator               | Easy form validation for Express.                                     |
| fbgraph                         | Facebook Graph API library.                                           |
| github-api                      | GitHub API library.                                                   |
| jade                            | Template engine for Express.                                          |
| lastfm                          | Last.fm API library.                                                  |
| instagram-node                  | Instagram API library.                                                |
| lob                             | Lob API library                                                       |
| lusca                           | CSRF middleware.                                                      |
| mongoose                        | MongoDB ODM.                                                          |
| node-foursquare                 | Foursquare API library.                                               |
| node-linkedin                   | LinkedIn API library.                                                 |
| node-sass-middleware            | Sass middleware compiler.                                                 |
| nodemailer                      | Node.js library for sending emails.                                   |
| passport                        | Simple and elegant authentication library for node.js                 |
| passport-facebook               | Sign-in with Facebook plugin.                                         |
| passport-github                 | Sign-in with GitHub plugin.                                           |
| passport-google-oauth           | Sign-in with Google plugin.                                           |
| passport-twitter                | Sign-in with Twitter plugin.                                          |
| passport-instagram              | Sign-in with Instagram plugin.                                        |
| passport-local                  | Sign-in with Username and Password plugin.                            |
| passport-linkedin-oauth2        | Sign-in with LinkedIn plugin.                                         |
| passport-oauth                  | Allows you to set up your own OAuth 1.0a and OAuth 2.0 strategies.    |
| paypal-rest-sdk                 | PayPal APIs library.                                                  |
| request                         | Simplified HTTP request library.                                      |
| stripe                          | Offical Stripe API library.                                           |
| tumblr.js                       | Tumblr API library.                                                   |
| twilio                          | Twilio API library.                                                   |
| twit                            | Twitter API library.                                                  |
| lodash                          | Handy JavaScript utlities library.                                    |
| validator                       | Used in conjunction with express-validator in **controllers/api.js**. |
| mocha                           | Test framework.                                                       |
| chai                            | BDD/TDD assertion library.                                            |
| supertest                       | HTTP assertion library.                                               |
| multiline                       | Multi-line strings for the generator.                                 |
| blessed                         | Interactive command line interface for the generator.                 |
| yui                             | Used by the Yahoo API example.                                        |


FAQ
---

### Why do I get `403 Error: Forbidden` when submitting a form?
You need to add the following hidden input element to your form. This has been
added in the [pull request #40](https://github.com/sahat/hackathon-starter/pull/40)
as part of the CSRF protection.

```
input(type='hidden', name='_csrf', value=_csrf)
```

**Note:** It is now possible to whitelist certain URLs. In other words you can
specify a list of routes that should bypass CSRF verification check.

**Note 2:** To whitelist dynamic URLs use regular expression tests inside the
CSRF middleware to see if `req.originalUrl` matches your desired pattern.

### What is cluster_app.js?

**Note**: It is now part of the generator as of **v2.1**.

From the [Node.js Documentation](http://nodejs.org/api/cluster.html#cluster_how_it_works):
> A single instance of Node runs in a single thread. To take advantage of multi-core systems
> the user will sometimes want to launch a cluster of Node processes to handle the load.
> The cluster module allows you to easily create child processes that all share server ports.

Running `cluster_app.js` allows you to take advantage of this feature by forking
a process of `app.js` for each detected CPU. For the majority of applications
serving HTTP requests, this is a nice benefit. However, the cluster module is
still in experimental stage, therefore it should only be used after understanding
its purpose and behavior. To use it, simply run `node cluster_app.js`.
**Its use is entirely optional and `app.js` is not tied in any way to it**.
As a reminder, if you plan to use `cluster_app.js` instead of `app.js`,
be sure to indicate that in `package.json` when you are ready to deploy your app.

### I am getting MongoDB Connection Error, how do I fix it?
That's a custom error message defined in `app.js` to indicate that there was a
problem connecting to MongoDB:

```js
mongoose.connection.on('error', function() {
  console.error('�? MongoDB Connection Error. Please make sure MongoDB is running.');
});
```
You need to have a MongoDB server running before launching `app.js`. You can
download MongoDB [here](mongodb.org/downloads), or install it via a package manager.
<img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">
Windows users, read [Install MongoDB on Windows](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/).

**Tip:** If you are always connected to the internet, you could just use
[MongoLab](https://mongolab.com/) or [Compose](https://www.compose.io/) instead
of downloading and installing MongoDB locally. You will only need to update the
`db` property in `config/secrets.js`.

### I get an error when I deploy my app, why?
Chances are you haven't changed the *Database URI* in `secrets.js`. If `db` is
set to `localhost`, it will only work on your machine as long as MongoDB is
running. When you deploy to Heroku, OpenShift or some other provider, you will not have MongoDB
running on `localhost`. You need to create an account with [MongoLab](https://mongolab.com/)
or [Compose](https://www.compose.io/), then create a free tier database.
See [Deployment](#deployment) for more information on how to setup an account
and a new database step-by-step with MongoLab.

### Why Jade instead of Handlebars?
When I first started this project I didn't have any experience with Handlebars. Since then I have worked on Ember.js apps and got myself familiar with the Handlebars syntax. While it is true Handlebars is easier, because it looks like good old HTML, I have no regrets picking Jade over Handlebars. First off, it's the default template engine in Express, so someone who has built Express apps in the past already knows it. Secondly, I find `extends` and `block` to be indispensable, which as far as I know, Handlebars does not have out of the box. And lastly, subjectively speaking, Jade looks much cleaner and shorter than Handlebars, or any non-HAML style for that matter.

### I don't need a sticky footer, can I delete it?
Absolutely. But unlike a regular footer there is a bit more work involved.
First, delete `#wrap` and `#footer` ID selectors and `html, body { height: 100%; }`
from **main.less**. Next, delete `#wrap` and `#footer` lines from **layout.jade**
(By the way, if no element is specified before class or id, Jade assumes it is
a `div` element). Don't forget to indent everything under `#wrap` to the left
once, since this project uses two spaces per block indentation.


### How do I switch SendGrid for another email delivery service?
Run `node setup.js` bundled with Hackathon Starter, then select
**Email Service** option. It will automatically replace appropriate strings in
your code. Currently there are three options: SendGrid, Mandrill, and Mailgun.

How It Works (mini guides)
--------------------------

This section is intended for giving you a detailed explanation about
how a particular functionality works. Maybe you are just curious about
how it works, or maybe you are lost and confused while reading the code,
I hope it provides some guidance to you.

###Custom HTML and CSS Design 101

[HTML5 UP](http://html5up.net/) has many beautiful templates that you can download for free.

When you download the ZIP file, it will come with *index.html*, *images*, *css* and *js* folders. So, how do you
integrate it with Hackathon Starter? Hackathon Starter uses Bootstrap CSS framework, but these templates do not.
Trying to use both CSS files at the same time will likely result in undesired effects.

**Note:** Using the custom templates approach, you should understand that you cannot reuse any of the views I have created: layout, home page, api browser, login, signup, account management, contact. Those views were built using Bootstrap grid and styles. You will have to manually update the grid using a different syntax provided in the template. **Having said that, you can mix and match if you want to do so: Use Bootstrap for main app interface, and a custom template for a landing page.**

Let's start from the beginning. For this example I will use [Escape Velocity](http://html5up.net/escape-velocity/) template:
![Alt](http://html5up.net/uploads/images/escape-velocity.jpg)

**Note:** For the sake of simplicity I will only consider `index.html`, and skip `left-sidebar.html`,
`no-sidebar.html`, `right-sidebar.html`.

Move all JavaScript files from `html5up-escape-velocity/js` to `public/js`. Then move all CSS files from `html5up-escape-velocity/css` to `public/css`. And finally, move all images from `html5up-escape-velocity/images` to `public/images`. You could move it to the existing **img** folder, but that would require manually changing every `img` reference. Grab the contents of `index.html` and paste it into [HTML To Jade](http://html2jade.aaron-powell.com/).

**Note:** Do not forget to update all the CSS and JS paths accordingly.

Create a new file `escape-velocity.jade` and paste the Jade markup in `views` folder.
Whenever you see the code `res.render('account/login')` - that means it will search for `views/account/login.jade` file.

Let's see how it looks. Create a new controller **escapeVelocity** inside `controllers/home.js`:

```js
exports.escapeVelocity = function(req, res) {
  res.render('escape-velocity', {
    title: 'Landing Page'
  });
};
```

And then create a route in `app.js`. I placed it right after the index controller:
```js
app.get('/escape-velocity', homeController.escapeVelocity);
```

Restart the server (if you are not using **nodemon**), then you should see the new template at [http://localhost:3000/escape-velocity](http://localhost:3000/escape-velocity).

I will stop right here, but if you would like to use this template as more than just a single page, take a look at how these Jade templates work: `layout.jade` - base template, `index.jade` - home page, `partials/header.jade` - Bootstrap navbar, `partials/footer.jade` - sticky footer. You will have to manually break it apart into smaller pieces. Figure out which part of the template you want to keep the same on all pages - that's your new `layout.jade`.
Then, each page that changes, be it `index.jade`, `about.jade`, `contact.jade`
will be embedded in your new `layout.jade` via `block content`. Use existing templates as a reference.

This is a rather lengthy process, and templates you get from elsewhere,
might have yet another grid system. That's why I chose *Bootstrap* for the Hackathon Starter.
 Many people are already familiar with *Bootstrap*, plus it's easy to get started with it if you have never used *Bootstrap*.
 You can also buy many beautifully designed *Bootstrap* themes at [Themeforest](http://themeforest.net/), and use them as a drop-in replacement for Hackathon Starter. However, if you would like to go with a completely custom HTML/CSS design, this should help you to get started!

<hr>

### How do flash messages work in this project?
Flash messages allow you to display a message at the end of the request and access
it on next request and only next request. For instance, on a failed login attempt, you would
display an alert with some error message, but as soon as you refresh that page or visit a different
page and come back to the login page, that error message will be gone. It is only displayed once.
This project uses *express-flash* module for flash messages. And that
module is built on top of *connect-flash*, which is what I used in
this project initially. With *express-flash* you don't have to
explicity send a flash message to every view inside `res.render()`.
All flash messages are available in your views via `messages` object by default,
thanks to *express-flash*.

Flash messages have a two-step process. You use `req.flash('errors', { msg: 'Error messages goes here' }`
to create a flash message in your controllers, and then display them in your views:
```jade
if messages.errors
  .alert.alert-danger.fade.in
    for error in messages.errors
      div= error.msg
```
In the first step, `'errors'` is the name of a flash message, which should match the
name of the property on `messages` object in your views. You place alert messages
inside `if message.errors` because you don't want to show them flash messages are actually present.
The reason why you pass an error like `{ msg: 'Error messages goes here' }` instead
of just a string - `'Error messages goes here'`, is for the sake of consistency.
To clarify that, *express-validator* module which is used for validating and sanitizing user's input,
returns all errors as an array of objects, where each object has a `msg` property with a message
why an error has occurred. Here is a more general example of what express-validator returns when there are errors present:

```js
[
  { param: "name", msg: "Name is required", value: "<received input>" },
  { param: "email", msg: "A valid email is required", value: "<received input>" }
]
```

To keep consistent with that style, you should pass all flash messages
as `{ msg: 'My flash message' }` instead of a string. Otherwise you will just see an alert box
without an error message. That is because, in **partials/flash.jade** template it will try to output
`error.msg` (i.e. `"My flash message".msg`), in other words it will try to call a `msg` method on a *String* object,
which will return *undefined*. Everything I just mentioned about errors, also applies
to "info" and "success" flash messages, and you could even create a new one yourself, such as:

**Data Usage Controller (Example)**
```
req.flash('warning', { msg: 'You have exceeded 90% of your data usage' });
```

**User Account Page (Example)**
```jade
if messages.warning
  .alert.alert-warning.fade.in
    for warning in messages.warning
      div= warning.msg
```

`partials/flash.jade` is a partial template that contains how flash messages
are formatted. Previously, flash
messages were scattered throughout each view that used flash messages
(contact, login, signup, profile), but now, thankfully it is uses a *DRY* approach.

The flash messages partial template is *included* in the `layout.jade`, along with footer and navigation.
```jade
body
  #wrap
    include partials/navigation
    .container
      include partials/flash
      block content
  include partials/footer
```

If you have any further questions about flash messages,
please feel free to open an issue and I will update this mini-guide accordingly,
or send a pull request if you  would like to include something that I missed.

<hr>

### How do I create a new page?
A more correct way to be to say "How do I create a new route". The main file `app.js` contains all the routes.
Each route has a callback function associated with it. Sometimes you will see 3 or more arguments
to routes. In cases like that, the first argument is still a URL string, while middle arguments
are what's called middleware. Think of middleware as a door. If this door prevents you from
continuing forward, you won't get to your callback function. One such example is a route that requires authentication.

```js
app.get('/account', passportConf.isAuthenticated, userController.getAccount);
```

It always goes from left to right. A user visits `/account` page. Then `isAuthenticated` middleware
checks if you are authenticated:

```js
exports.isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};
```

If you are authenticated, you let this visitor pass through your "door" by calling `return next();`. It then proceeds to the
next middleware until it reaches the last argument, which is a callback function that typically renders a template on `GET` requests or redirects on `POST` requests. In this case, if you are authenticated, you will be redirected to *Account Management* page, otherwise you will be redirected to *Login* page.

```js
exports.getAccount = function(req, res) {
  res.render('account/profile', {
    title: 'Account Management'
  });
};
```

Express.js has `app.get`, `app.post`, `app.put`, `app.delete`, but for the most part you will only use the first two HTTP verbs, unless you are building a RESTful API.
If you just want to display a page, then use `GET`, if you are submitting a form, sending a file then use `POST`.

Here is a typical workflow for adding new routes to your application. Let's say we are building
a page that lists all books from database.

**Step 1.** Start by defining a route.
```js
app.get('/books', bookController.getBooks);
```

---

**Note:** As of Express 4.x you can define you routes like so:

```js
app.route('/books')
  .get(bookController.getBooks)
  .post(bookController.createBooks)
  .put(bookController.updateBooks)
  .delete(bookController.deleteBooks)
```

And here is how a route would look if it required an *authentication* and an *authorization* middleware:

```js
app.route('/api/twitter')
  .all(passportConf.isAuthenticated)
  .all(passportConf.isAuthorized)
  .get(apiController.getTwitter);
  .post(apiController.postTwitter)
```

Use whichever style that makes sense to you. Either one is acceptable. I really think that chaining HTTP verbs on
`app.route` is very clean and elegant approach, but on the other hand I can no longer see all my routes at a glance
when you have one route per line.

**Step 2.** Create a new schema and a model `Book.js` inside the *models* directory.
```js
var bookSchema = new mongoose.Schema({
  name: String
});

var Book = mongoose.model('Book', bookSchema);
module.exports = Book;
```

**Step 3.** Create a new controller file called `book.js` inside the *controllers* directory.
```js
/**
 * GET /books
 * List all books.
 */
var Book = require('../models/Book.js');

exports.getBooks = function(req, res) {
  Book.find(function(err, docs) {
    res.render('books', { books: docs });
  });
};
```

**Step 4.** Import that controller in `app.js`.
```js
var bookController = require('./controllers/book');
```

**Step 5.** Create `books.jade` template.
```jade
extends layout

block content
  .page-header
    h3 All Books

  ul
    for book in books
      li= book.name
```

That's it! I will say that you could have combined Step 1, 2, 3 as following:

```js
app.get('/books', function(req, res) {
  Book.find(function(err, docs) {
    res.render('books', { books: docs });
  });
});
```

Sure, it's simpler, but as soon as you pass 1000 lines of code in `app.js` it becomes a little difficult to navigate the file.
I mean, the whole point of this boilerplate project was to separate concerns, so you could
work with your teammates without running into *MERGE CONFLICTS*. Imagine you have 4 developers
working on a single `app.js`, I promise you it won't be fun resolving merge conflicts all the time.
If you are the only developer then it's fine. But as I said, once it gets up to a certain LoC size, it becomes
difficult to maintain everything in a single file.

That's all there is to it. Express.js is super simple to use.
Most of the time you will be dealing with other APIs to do the real work:
[Mongoose](http://mongoosejs.com/docs/guide.html) for querying database, socket.io for sending and receiving messages over websockets,
sending emails via [Nodemailer](http://nodemailer.com/), form validation using [express-validator](https://github.com/ctavan/express-validator) library,
parsing websites using [Cheerio](https://github.com/cheeriojs/cheerio), and etc.

<hr>

Mongoose Cheatsheet
-------------------

#### Find all users:
```js
User.find(function(err, users) {
  console.log(users);
});
```

#### Find a user by email:
```js
var userEmail = 'example@gmail.com';
User.findOne({ email: userEmail }, function(err, user) {
  console.log(user);
});
```

#### Find 5 most recent user accounts:
```js
User
  .find()
  .sort({ _id: -1 })
  .limit(5)
  .exec(function(err, users) {
    console.log(users);
  });
```

#### Get total count of a field from all documents:
Let's suppose that each user has a `votes` field and you would like to count
the total number of votes in your database across all users. One very
inefficient way would be to loop through each document and manually accumulate
the count. Or you could use [MongoDB Aggregation Framework](https://docs.mongodb.org/manual/core/aggregation-introduction/) instead:

```js
User.aggregate({ $group: { _id: null, total: { $sum: '$votes' } } }, function(err, votesCount) {
  console.log(votesCount.total);
});
```

Deployment
----------

Once you are ready to deploy your app, you will need to create an account with
a cloud platform to host it. These are not the only choices, but they are my top
picks. From my experience, **Heroku** is the easiest to get started with, it will
automatically restart your Node.js process when it crashes, zero-downtime
deployments and custom domain support on free accounts. Additionally, you can
create an account with **MongoLab** and then pick one of the *4* providers below.
Again, there are plenty of other choices and you are not limited to just the ones
listed below.

### 1-Step Deployment with Heroku

<img src="http://blog.exadel.com/wp-content/uploads/2013/10/heroku-Logo-1.jpg" width="200">
- Download and install [Heroku Toolbelt](https://toolbelt.heroku.com/)
- In terminal, run `heroku login` and enter your Heroku credentials
- From *your app* directory run `heroku create`
- Run `heroku addons:create mongolab`.  This will set up the MongoLab add-on and configure the `MONGOLAB_URI` environment variable in your Heroku app for you.
- Lastly, do `git push heroku master`.  Done!

**Note:** To install Heroku add-ons your account must be verified.

---

<img src="http://i.imgur.com/7KnCa5a.png" width="200">
- Open [mongolab.com](https://mongolab.com) website
- Click the yellow **Sign up** button
- Fill in your user information then hit **Create account**
- From the dashboard, click on **:zap:Create new** button
- Select **any** cloud provider (I usually go with AWS)
- Under *Plan* click on **Single-node (development)** tab and select **Sandbox** (it's free)
 - *Leave MongoDB version as is - `2.4.x`*
- Enter *Database name** for your web app
- Then click on **:zap:Create new MongoDB deployment** button
- Now, to access your database you need to create a DB user
- Click to the recently created database
- You should see the following message:
 - *A database user is required to connect to this database.* **Click here** *to create a new one.*
- Click the link and fill in **DB Username** and **DB Password** fields
- Finally, in `secrets.js` instead of `db: 'localhost'`, use the following URI with your credentials:
 - `db: 'mongodb://USERNAME:PASSWORD@ds027479.mongolab.com:27479/DATABASE_NAME'`

**Note:** As an alternative to MongoLab, there is also [Compose](https://www.compose.io/).


<img src="http://www.opencloudconf.com/images/openshift_logo.png" width="200">
- First, install this Ruby gem: `sudo gem install rhc` :gem:
- Run `rhc login` and enter your OpenShift credentials
- From your app directory run `rhc app create MyApp nodejs-0.10`
 - **Note:** *MyApp* is the name your app (no spaces)
- Once that is done, you will be provided with **URL**, **SSH** and **Git Remote** links
- Visit provided **URL** and you should see the *Welcome to your Node.js application on OpenShift* page
- Copy and and paste **Git Remote** into `git remote add openshift YOUR_GIT_REMOTE`
- Before you push your app, you need to do a few modifications to your code

Add these two lines to `app.js`, just place them anywhere before `app.listen()`:
```js
var IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
```

Then change `app.listen()` to:
```js
app.listen(PORT, IP_ADDRESS, function() {
  console.log("�? Express server listening on port %d in %s mode", PORT, app.settings.env);
});
```
Add this to `package.json`, after *name* and *version*. This is necessary because, by default, OpenShift looks for `server.js` file. And by specifying `supervisor app.js` it will automatically restart the server when node.js process crashes.

```js
"main": "app.js",
"scripts": {
  "start": "supervisor app.js"
},
```

- Finally, you can now push your code to OpenShift by running `git push -f openshift master`
 - **Note:** The first time you run this command, you have to pass `-f` (force) flag because OpenShift creates a dummy server with the welcome page when you create a new Node.js app. Passing `-f` flag will override everything with your *Hackathon Starter* project repository. **Do not** run `git pull` as it will create unnecessary merge conflicts.
- And you are done!

<img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Windows_Azure_logo.png" width="200">

- Login to [Windows Azure Management Portal](https://manage.windowsazure.com/)
- Click the **+ NEW** button on the bottom left of the portal
- Click **COMPUTE**, then **WEB APP**, then **QUICK CREATE**
- Enter a name for **URL** and select the datacenter **REGION** for your web site
- Click on **CREATE WEB APP** button
- Once the web site status changes to *Running*, click on the name of the web site to access the Dashboard
- At the bottom right of the Quickstart page, select **Set up a deployment from source control**
- Select **Local Git repository** from the list, and then click the arrow
- To enable Git publishing, Azure will ask you to create a user name and password
- Once the Git repository is ready, you will be presented with a **GIT URL**
- Inside your *Hackathon Starter* directory, run `git remote add azure [Azure Git URL]`
- To push your changes simply run `git push azure master`
 - **Note:** *You will be prompted for the password you created earlier*
- On **Deployments** tab of your Windows Azure Web App, you will see the deployment history

<img src="http://www.comparethecloud.net/wp-content/uploads/2014/06/ibm-bluemix_pr-030514.jpg" width="200">

- Go to [Codename: Bluemix](http://bluemix.net) to signup for the free trial, or login with your *IBM id*
- Install [Cloud Foundry CLI](https://github.com/cloudfoundry/cli)
- Navigate to your **hackathon-starter** directory and then run `cf push [your-app-name] -m 512m` command to deploy the application
 - **Note:** You must specify a unique application name in place of `[your-app-name]`
- Run `cf create-service mongodb 100 [your-service-name]` to create a [MongoDB service](https://www.ng.bluemix.net/docs/#services/MongoDB/index.html#MongoDB)
- Run `cf bind-service [your-app-name] [your-service-name]` to associate your application with a service created above
- Run `cf files [your-app-name] logs/env.log` to see the *environment variables created for MongoDB.
- Copy the **MongoDB URI** that should look something like the following: `mongodb://68638358-a3c6-42a1-bae9-645b607d55e8:46fb97e6-5ce7-4146-9a5d-d623c64ff1fe@192.155.243.23:10123/db`
- Then set it as an environment variable for your application by running `cf set-env [your-app-name] MONGODB [your-mongodb-uri]`
- Run `cf restart [your-app-name]` for the changes to take effect.
- Visit your starter app at **http://[your-app-name].ng.bluemix.net**
- Done!

**Note:** Alternative directions, including how to setup the project with a DevOps pipeline are available at [http://ibm.biz/hackstart](http://ibm.biz/hackstart).
A longer version of these instructions with screenshots is available at [http://ibm.biz/hackstart2](http://ibm.biz/hackstart2).
Also, be sure to check out the [Jump-start your hackathon efforts with DevOps Services and Bluemix](https://www.youtube.com/watch?v=twvyqRnutss) video.

License
-------

The MIT License (MIT)

Copyright (c) 2014-2015 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
