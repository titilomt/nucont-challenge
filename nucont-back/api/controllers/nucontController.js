'use strict';
const Nucont = require('../models/nucontModel');
const nucont = new Nucont();

exports.status = (req, res) => {
  res.send("Tá tudo em cima!");
};

exports.levelOne = (req, res) => {
  let data = req.body.data;

  let sanatize = data.split('\n').map(cur => {
    let tmpCur = cur.split('  ').filter(x => x !== '').map( y => y.trim());
    let parent = null;

    if(tmpCur.length > 0) {
      let tree = tmpCur[0].split('0');
      
      if (tree[0].length > 1) {
        parent = tree.reduce((acc, t) => {
          if(t === '') return `${acc}0`;

          return `${acc}${t.replace(/.$/,"0")}`;
        }, '');
      }
    }

    tmpCur.push(parent);

    return tmpCur;
  });
  
  let doit = doIt(sanatize);

  nucont.save(doit);

  res.send({ status: 200, data: doit, error: false });
};

exports.levelTwo = (req, res) => {
  let data = req.body.data;

  let sanatizeX = data.split('\n').map(cur => cur.split(' ').filter(y => y !== ''));

  let sanatizeY = sanatizeX.reduce((acc, cur) => {
    let tmp = '';

    if(cur.length === 0) return acc;

    if(cur.length > 0) tmp = cur.reduce((xys, targ) => { return `${xys} ${targ}`; }, '');
    
    acc.push(tmp);

    return acc;
  }, []);
  
  sanatizeY = sanatizeY.map( cur => {
    let tmpCur = cur.split('\t').filter(c => c !== '' ).map( str => str.trim() );
    let tree = tmpCur[0].split('.');
    let parent = null;
    if(tree.length > 1) {
      
      parent = tree.slice(0, tree.length-1);

      parent = parent.reduce((acc, p, idx, arr) => {
        if (arr.length === 1) return p;
        if (idx === 0) return p;
        return `${acc}.${p}`;

      }, '');

    } 

    tmpCur.push(parent);

    return tmpCur;
  });

  let doit = doIt(sanatizeY);

  nucont.save(doit);

  res.send({ status: 200, data: doit, error: false });
};

exports.levelThree = (req, res) => {
  let data = req.body.data;

  console.log(data);

  res.send({ status: 200, data: [], error: false });
};

function doIt (data){
  // let template = new Nucont();
  let feedBack = []; 
  data.map(target => {
    let nucont = new Nucont();

    if(target.length > 0 && target[0]) {
      nucont.description = target[0];
      nucont.classifier = target[1];
      nucont.openingBalance = formatNumber(target[2]).value;
      nucont.debit = formatNumber(target[3]).value;
      nucont.credit = formatNumber(target[4]).value;
      nucont.finalBalance = formatNumber(target[5]).value;
      nucont.parent = target[6] ? target[6].toString(): null;
      feedBack.push(nucont);
    } 
  });

  return feedBack;
}

function formatNumber(numb) {
  if(numb) {

    let operator = numb.search('D') > -1 ? 'D' : numb.search('C') > -1 ? 'C' : 'N';
    let number = Number(numb.replace('.', '').replace(',', '.').replace('D', '').replace('C', ''));
    if(operator === 'D') number = number * -1; 
    return { op: operator, value: number};
  } else {
    return false;
  }  
}
