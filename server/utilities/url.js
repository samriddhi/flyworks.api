module.exports = function(app) {
    return {
        getRestApiBaseUrl: function() {
            return app.get('url').replace(/\/$/, '');
        }
    }
};