'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jqUploads = require('fng-jq-upload');

var MentorsLoanSchema = new Schema({
  surnameeeee: {type:String, required:true, index:true},
  forename: {type:String, index:true},
  dateOfBirth: {type:Date},
  photo: {type: [new Schema(jqUploads.FileSchema)], form: { directive: 'fng-jq-upload-form', fngJqUploadForm:{sizeLimit:524288, autoUpload:true, single:true, width: 100, height: 100 }}},
  whyApplied: {type: String, form: {type: 'textarea', editor: 'ckEditor'}},
  status: {type: String, default:'Pending', enum:['Pending','Rejected','Shortlist'], form: {select2: {}}}
});

var MentorsLoan;
var modelName = 'MentorsLoan';

try {
  MentorsLoan = mongoose.model(modelName);
} catch(e) {
  MentorsLoan = mongoose.model(modelName, MentorsLoanSchema);
}

module.exports = MentorsLoan;
