'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jqUploads = require('fng-jq-upload');

var MentorsViolationSchema = new Schema({
  surnameeeee: {type:String, required:true, index:true},
  forename: {type:String, index:true},
  dateOfBirth: {type:Date},
  photo: {type: [new Schema(jqUploads.FileSchema)], form: { directive: 'fng-jq-upload-form', fngJqUploadForm:{sizeLimit:524288, autoUpload:true, single:true, width: 100, height: 100 }}},
  whyApplied: {type: String, form: {type: 'textarea', editor: 'ckEditor'}},
  status: {type: String, default:'Pending', enum:['Pending','Rejected','Shortlist'], form: {select2: {}}}
});

var MentorsViolation;
var modelName = 'MentorsViolation';

try {
  MentorsViolation = mongoose.model(modelName);
} catch(e) {
  MentorsViolation = mongoose.model(modelName, MentorsViolationSchema);
}

module.exports = MentorsViolation;
