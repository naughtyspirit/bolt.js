var Request = require('request-promise')

const API_ENDPOINT = "https://bolt-api.herokuapp.com"

var Bolt = function(appId) {
    this.config = {
        postTweetUrl: API_ENDPOINT + "/tweets?appId=" + appId
        sendEmailUrl: API_ENDPOINT + "/emails?appId=" + appId
    }

    return this
}

Bolt.prototype.postTweet = function* postTweet(message) {
    payload = {
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

Bolt.prototype.sendEmail = function* (from, to, subject, message, tags) {

    payload = {
        from: from,
        to: to,
        subject: subject,
        message: message,
        tags: tags
    }
    var options = {
        uri: this.config.sendEmailUrl,
        method: "POST",
        json: true,
        body: payload
    }
    return yield Request(options)
}

module.exports = Bolt
