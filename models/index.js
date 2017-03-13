var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

var Page = db.define('page', {
  title: {type: Sequelize.STRING, allowNull: false, defaultValue: 'Wikistack'},
  urlTitle: {type: Sequelize.TEXT, allowNull: false},
  content: {type: Sequelize.TEXT, allowNull: false},
  status: {type: Sequelize.ENUM('open', 'closed')},
  date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW}
}, {
    hooks: {
      beforeValidate: function(page){
        if (!page.title){
          page.urlTitle = Math.random().toString(36).substring(2, 7);
        }
        else {
          page.urlTitle = page.title.replace(/\s+/g, '_');
          page.urlTitle.replace(/\W/, '');
        }
      }
    },
  getterMethods: {
    route : function() { return '/wiki/' + this.urlTitle}//is syntax correct?
  }
})

var User = db.define('user', {
  name: {type: Sequelize.STRING, allowNull: false},
  email: {type: Sequelize.STRING, allowNull: false, validate: {isEmail: true}}
})

module.exports = {
  Page: Page,
  User: User
};


