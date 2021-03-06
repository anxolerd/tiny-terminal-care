# tiny-terminal-care
This is a little dashboard that tries to take care of you when you're using your terminal.
It tells you cute, self care things, and tries not to stress you out. It shows:
- the last tweets from [@tinycarebot](https://twitter.com/tinycarebot),
[@selfcare_bot](https://twitter.com/aloebud) and
[@magicrealismbot](https://twitter.com/magicrealismbot). The first two tend
to tweet reminders about taking breaks, drinking water and looking outside, and the latter
tells you strange, whimsical stories. If you don't like these bots,
they're configurable!
- your `git` commits from today and the last 7 days. When I get stressed out
because I think I haven't done anything, it turns out that I only think about
big and serious commits, and forget about all the tiny amounts of work I've
actually done throughout. Hopefully this will help you too <3
- the weather, because you might get rained on.

It looks like this, and updates every 20 minutes.

<img width="1000" alt="tiny terminal care screenshot" src="https://cloud.githubusercontent.com/assets/1369170/25066240/adc3b1ac-21d5-11e7-9811-508b6bcfcc89.png">

## Make it go

The dashboard has two alternatives for reading tweets: using your API keys
or scraping. API keys is preferred (because lol scraping), but if you're
really not into that, then just update `config.js` and set `config.apiKeys = false;`

### Set up API keys

You need [Twitter API keys](https://apps.twitter.com/) for the tweets to work.
It should be pretty easy to create a new app, and get these 4 values.
After you've set them up, create an `.env` file in the root of this
folder, and add these variables to it (see the `sample.env` for an
example):

```
CONSUMER_KEY='...'
CONSUMER_SECRET='...'
ACCESS_TOKEN='...'
ACCESS_TOKEN_SECRET='...'
```

### Configure the dashboard
All the settings the dashboard looks at are in `config.js`:
  - `config.twitter` are the 3 twitter bots to check. The first entry
  in this list will be displayed in the party parrot. The other two will be
  displayed in little boxes, with the `config.twitter[i].label` title.
  - `config.repos`, a list of repos to look at for `git` commits.
  This is using [`git-standup`](https://github.com/kamranahmedse/git-standup) under
  the hood, and looks one subdirectory deep (so if you have all your code
  directories in a `~/Code`, you only need to list that one)
  - `config.zipcode` and `config.celsius` for weather reporting

### Do the npm dance

```
npm install
npm start
# or
node ~/location-of-this-folder/care.js
```
You can exit the dashboard by pressing `esc` or `q`.

## Take care of yourself, ok? 💖
