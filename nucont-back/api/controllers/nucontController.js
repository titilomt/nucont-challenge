'use strict';
const Nucont = require('../models/nucontModel');

exports.status = (req, res) => {
  res.send("Tá tudo em cima!");
};

exports.filterData = (req, res) => {
  let data = req.body.data;
  let feedBack = [];
  let nucont = new Nucont();
  
  data.split('\n').map(cur => {
    return cur.split(' ').filter(y => y !== '');
  }).map(target => {
    if(target.length > 0) {
      nucont.description = target[0];
      nucont.classifier = target[1];
      nucont.openingBalance = Number(target[2]);
      nucont.debit = Number(target[3]);
      nucont.credit = Number(target[4]);
      nucont.finalBalance = Number(target[5]);
      nucont.parent = (!target[6]) ? null: target[6];
      feedBack.push(nucont);
    }
  });

  nucont.save(feedBack);

  res.send({ status: 200, data: feedBack });
};
