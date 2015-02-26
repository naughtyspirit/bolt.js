var Request = require('request-promise')

var Bolt = function(appId) {
    this.config = {
        postTweetUrl: "https://bolt-api.herokuapp.com/tweets?appId=" + appId
    }

    return this
}

Bolt.prototype.postTweet = function* postTweet(message) {
    payload = {links: [{
            message: message
        }]
    }
    var options = {
        uri: this.config.postTweetUrl,
        method: "POST",
        json: true,
        body: payload
    }
    return yield Request(options)
}

module.exports = Bolt
