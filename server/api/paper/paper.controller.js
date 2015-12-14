/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /papers              ->  index
 * POST    /papers              ->  create
 * GET     /papers/:id          ->  show
 * PUT     /papers/:id          ->  update
 * DELETE  /papers/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var paper = require('./paper.model');

// Get list of papers
exports.index = function(req, res) {
  paper.find(function (err, papers) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(papers);
  });
};

// Get a single paper
exports.show = function(req, res) {
  paper.findById(req.params.id, function (err, paper) {
    if(err) { return handleError(res, err); }
    if(!paper) { return res.status(404).send('Not Found'); }
    return res.json(paper);
  });
};

// Creates a new paper in the DB.
exports.create = function(req, res) {
  paper.create(req.body, function(err, paper) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(paper);
  });
};

// Updates an existing paper in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  paper.findById(req.params.id, function (err, paper) {
    if (err) { return handleError(res, err); }
    if(!paper) { return res.status(404).send('Not Found'); }
    var updated = _.merge(paper, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(paper);
    });
  });
};

// Deletes a paper from the DB.
exports.destroy = function(req, res) {
  paper.findById(req.params.id, function (err, paper) {
    if(err) { return handleError(res, err); }
    if(!paper) { return res.status(404).send('Not Found'); }
    paper.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}