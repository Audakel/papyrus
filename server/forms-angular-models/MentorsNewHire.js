'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jqUploads = require('fng-jq-upload');

var MentorsNewHireSchema = new Schema({
  surnameeeee: {type:String, required:true, index:true},
  forename: {type:String, index:true},
  dateOfBirth: {type:Date},
  photo: {type: [new Schema(jqUploads.FileSchema)], form: { directive: 'fng-jq-upload-form', fngJqUploadForm:{sizeLimit:524288, autoUpload:true, single:true, width: 100, height: 100 }}},
  whyApplied: {type: String, form: {type: 'textarea', editor: 'ckEditor'}},
  status: {type: String, default:'Pending', enum:['Pending','Rejected','Shortlist'], form: {select2: {}}}
});

var MentorsNewHire;
var modelName = 'MentorsNewHire';

try {
  MentorsNewHire = mongoose.model(modelName);
} catch(e) {
  MentorsNewHire = mongoose.model(modelName, MentorsNewHireSchema);
}

module.exports = MentorsNewHire;
