'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jqUploads = require('fng-jq-upload');

var xkcdSchema = new Schema({
  lalal: {type:String, required:true, index:true},
  adsf: {type:String, index:true},
  qwet: {type:Date},
  zcxv: {type: [new Schema(jqUploads.FileSchema)], form: { directive: 'fng-jq-upload-form', fngJqUploadForm:{sizeLimit:524288, autoUpload:true, single:true, width: 100, height: 100 }}},
  fdsa: {type: String, form: {type: 'textarea', editor: 'ckEditor'}},
  jhgf: {type: String, default:'Pending', enum:['Pending','Rejected','Shortlist'], form: {select2: {}}}
});

var xkcd;
var modelName = 'xkcd';

try {
  xkcd = mongoose.model(modelName);
} catch(e) {
  xkcd = mongoose.model(modelName, xkcdSchema);
}

module.exports = xkcd;
