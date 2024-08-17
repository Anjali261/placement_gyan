module.exports = {
  "development": {
      'web_port': process.env.PORT || 3000,
      // 'db_connection_string': 'mongodb+srv://placements-gyaan:WLlYUmkuwe9UH0kf@cluster0.8x3e8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      'db_connection_string': 'mongodb+srv://mail2anjalisingh2610:uFd30VAT43ojV82T@cluster0.ybo0zd5.mongodb.net/',

      'jwt_secret': 'PlacementsGyaanTracker',
      log_level: 'info',

    },
  "production": {
      'web_port': process.env.PORT || 80,
      'db_connection_string': process.env.DB_CONNECTION_STRING || 'mongodb+srv://placements-gyaan:WLlYUmkuwe9UH0kf@cluster0.8x3e8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      'jwt_secret': process.env.JWT_SECRET || 'PlacementsGyaanTracker',
      log_level: 'info',
    },
  get_active_config: function() {
      var config_profile = process.env.PGENV || 'development';
      console.log("CONFIG PROFILE SELECTED IS:  " + config_profile);
      return this[config_profile];
  }
}


