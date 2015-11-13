/* jshint node: true */
'use strict';

var ssh2 = require('ssh2');
var Promise = require('ember-cli/lib/ext/promise');

var BasePlugin = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-index-ssh',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      defaultConfig: {
        destinationPort: 22,
        dstHost: 'localhost',
        privateKeyPath: '~/.ssh/id_rsa',
      },

      requiredConfig: [
        'host',
        'port'
      ],

      setup: function(context) {
        return {
          client: new ssh2.Client()
        };
      },

      willDeploy: function(context) {
        this.log(context.client);
      },

      didBuild: function(context) {
        //do something amazing here once the project has been built
        this.log('ARE YOU READY TO ROCK?' { color: 'blue' });
      },

      upload: function(context) {
        //do something here to actually deploy your app somewhere
      },

      didDeploy: function(context) {
        //do something here like notify your team on slack
      }
    });

    return new DeployPlugin();
  }
};
