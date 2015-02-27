var Request = require('request-promise')

const API_ENDPOINT = "https://bolt-api.herokuapp.com"

var Bolt = function(appId) {
    this.config = {
        postTweetUrl: API_ENDPOINT + "/tweets?appId=" + appId,
        sendEmailUrl: API_ENDPOINT + "/emails?appId=" + appId
    }

    return this
}

Bolt.prototype.postTweet = function* postTweet(message) {
    var payload = {
            message: message
    }
    var options = {
        uri: this.config.postTweetUrl,
        method: "POST",
        json: true,
        body: payload
    }
    return yield Request(options)
}

Bolt.prototype.sendEmail = function* sendEmail(parameters) {
    console.log(this.config.sendEmailUrl)

    var options = {
        uri: this.config.sendEmailUrl,
        method: "POST",
        json: true,
        body: parameters
    }
    return yield Request(options)
}

module.exports = Bolt
