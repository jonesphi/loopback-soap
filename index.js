// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback-soap
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

var SoapGenerator = require('./lib/codegen/generator-soap');

function getGenerator() {
  var generator = new SoapGenerator();
  return generator;
}

/**
 * Generate model definitions
 * @param {Object} spec soap spec
 * @param {Object} options
 * @returns {Object}
 */
exports.generateModels = function(wsdl, operations, options) {
  return getGenerator().generateModels(wsdl, operations);
};

exports.getGenerator = getGenerator;

