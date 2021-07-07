const fb_credentials = require('./facebook_credentials');
module.exports = {
    'secretKey': '12345-67890-09876-54321',
    'mongoUrl': 'mongodb://localhost:27017/nucampsite',
    'facebook': {
        clientId:fb_credentials.clientId_FB,
        clientSecret: fb_credentials.clientSecret_FB
    }
}