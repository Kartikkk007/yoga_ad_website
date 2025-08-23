const AdminJS = require('adminjs');
// Corrected import path for AdminJSExpress
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
const bcrypt = require('bcryptjs');

// Import your Mongoose models
const User = require('../models/User');
const Schedule = require('../models/Schedule');
const Program = require('../models/Program');

// Register the Mongoose adapter for AdminJS
AdminJS.registerAdapter(AdminJSMongoose);

const adminJs = new AdminJS({
  resources: [
    {
      resource: User,
      options: {
        properties: {
          password: {
            type: 'string',
            isVisible: { list: false, show: false, edit: true, filter: false },
          },
        },
      },
    },
    {
      resource: Schedule,
      options: {
        properties: {
          _id: { isVisible: { list: false, show: true, edit: false, filter: true } },
          day: { isVisible: { list: true, show: true, edit: true, filter: true } },
          time: { isVisible: { list: true, show: true, edit: true, filter: true } },
          className: { isVisible: { list: true, show: true, edit: true, filter: true } },
          location: { isVisible: { list: true, show: true, edit: true, filter: true } },
          classType: { isVisible: { list: true, show: true, edit: true, filter: true } },
        },
        sort: {
          sortBy: 'day',
          direction: 'asc',
        },
      },
    },
    {
      resource: Program,
      options: {
        properties: {
          _id: { isVisible: { list: false, show: true, edit: false, filter: true } },
          title: { isVisible: { list: true, show: true, edit: true, filter: true } },
          price: { isVisible: { list: true, show: true, edit: true, filter: true } },
          description: { isVisible: { list: true, show: true, edit: true, filter: false } },
          image: { isVisible: { list: true, show: true, edit: true, filter: false } },
          details: { isVisible: { list: true, show: true, edit: true, filter: false } },
        },
      },
    },
  ],
  rootPath: '/admin',
  branding: {
    companyName: 'Mansi Sharma Yoga Admin',
  },
  authentication: {
    authenticate: async (email, password) => {
      const user = await User.findOne({ username: email });
      if (user) {
        const matched = await bcrypt.compare(password, user.password);
        if (matched) {
          return user;
        }
      }
      return null;
    },
  },
});

const router = AdminJSExpress.buildRouter(adminJs);

module.exports = { adminJs, router };
