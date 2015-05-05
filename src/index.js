var Request = require('request-promise')

const API_ENDPOINT = "https://bolt-api.herokuapp.com"

var Bolt = function(appId) {
    this.config = {
        postTweetUrl: API_ENDPOINT + "/twitter/tweet?appId=" + appId,
        followUsersUrl: API_ENDPOINT + "/twitter/follow?appId=" + appId,
        sendEmailUrl: API_ENDPOINT + "/emails?appId=" + appId,
        sendNotificationUrl: API_ENDPOINT + "/notifications?appId=" + appId
    }

    return this
}

Bolt.prototype.postTweet = function(message) {
    var payload = {
            message: message
    }
    var options = {
        uri: this.config.postTweetUrl,
        method: "POST",
        json: true,
        body: payload
    }
    return Request(options)
}

Bolt.prototype.followUsers = function(userIds) {
    var payload = {
            userIds: userIds
    }
    var options = {
        uri: this.config.followUsersUrl,
        method: "POST",
        json: true,
        body: payload
    }
    return Request(options)
}

Bolt.prototype.sendEmail = function(parameters) {
    var options = {
        uri: this.config.sendEmailUrl,
        method: "POST",
        json: true,
        body: parameters
    }
    return Request(options)
}

Bolt.prototype.sendNotification = function(parameters) {
    var options = {
        uri: this.config.sendNotificationUrl,
        method: "POST",
        json: true,
        body: parameters
    }
    return Request(options)
}

module.exports = Bolt
