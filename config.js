var env = require('node-env-file');

var config = {};

// Accounts to read the last tweet from. The first one in the list will be
// spoken by the party parrot. The label is be used to label the tweet box.
config.twitter = [
    {user: 'tinycarebot', 'label': ' 💧 '},
    {user: 'selfcare_bot', 'label': ' 💖 '},
    {user: 'magicrealismbot', 'label': ' 💬 '}
  ];

// Set this to false if you want to scrape twitter.com instead of using
// API keys. The tweets may include RTs in this case :(
config.apiKeys = true;

// Directories in which to run git-standup on for a list of your recent commits.
config.repos = ['~/Code'];

// Where to check the weather for. This can be a zip code or a location name
// So both 90210 and "San Francisco, CA" should be ok.
// It's using weather.service.msn.com behind the curtains.
config.weather = 'San Francisco';

// Set to false if you're an imperial savage. <3
config.celsius = true;


// From the .env file.
config.keys = {};
try {
  env(__dirname + '/.env');
  config.keys.consumer_key = process.env.CONSUMER_KEY;
  config.keys.consumer_secret = process.env.CONSUMER_SECRET;
  config.keys.access_token = process.env.ACCESS_TOKEN;
  config.keys.access_token_secret = process.env.ACCESS_TOKEN_SECRET;
}
catch(err) {
  console.warn('P.S.: You haven\'t created a .env file.');
  config.apiKeys = false;

  config.keys.consumer_key = 'none';
  config.keys.consumer_secret = 'none';
  config.keys.access_token = 'none';
  config.keys.access_token_secret = 'none';
}

module.exports = config;
