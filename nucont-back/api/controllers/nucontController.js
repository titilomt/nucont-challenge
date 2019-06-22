'use strict';
const Nucont = require('../models/nucontModel');

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

  res.send({ status: 200, data: doit, error: false });
};

exports.levelThree = (req, res) => {
  let data = req.body.data;
  let sanatizeX = data.split('\n');
  sanatizeX = sanatizeX.slice(4, sanatizeX.length);
  let sanatizeY = sanatizeX.reduce((acc, cur) => {
    let y = cur.split('  ').filter( yx => yx !== '');
    if (y.length === 0) return acc;
    acc.push(y);
    return acc;
  }, []).map(cur => {
    return cur[0].split('\t').filter(xs => xs != '');
  });

  let sanatizeXY = sanatizeY.map(cur => {
    let tmpC = cur.indexOf('C');
    
    if(tmpC !== -1) {
      while(tmpC !== -1) {
        cur[tmpC - 1] = cur[tmpC - 1] + 'C';
        cur.splice(tmpC, 1);
        tmpC = cur.indexOf('C');
      }
    }
    
    let tmpD = cur.indexOf('D');

    if(tmpD !== -1) {
      while(tmpD !== -1) {
        cur[tmpD - 1] = cur[tmpD - 1] + 'D';
        cur.splice(tmpD, 1);
        tmpD = cur.indexOf('D');
      }
    }
    return cur;
  });

  let doit = doIt(sanatizeParent(sanatizeXY));

  res.send({ status: 200, data: doit, error: false });
};

exports.levelFour = (req, res) => {
  let data = req.body.data;

  // get ride of headers !!!
  let sanatize = data.split('\f').map(cur => {
    let tmp = cur.split('\n').filter(x => x !== '');
    
    return tmp.splice(11, tmp.length);
  });

  let sanatizeX = sanatize.map(curX => {
    return curX.map(curxy => {
      return curxy.split('  ').filter( x => x !== '');
    });
  }).map(curY => {
    let tmp = curY.filter(x => x.length > 0).map( y => y.splice(1, y.length).map( yx => yx.trim() ));
    return tmp;
  });

  let proccess = sanatizeX.map(curx => {
    return sanatizeParent(curx);
  });

  let doit = proccess.map(cur => {
    return doIt(cur);
  });

  res.send({status: 200, data: doit, error: false});
};

exports.saveBalance = (req, res) => {
  let bals = req.body.balances;
  
  Nucont.insertMany(bals);

  res.send({status: 200});
};

function doIt (data){
  // let template = new Nucont();
  let feedBack = []; 
  data.map(target => {
    let nucont = new Nucont();

    if(target.length > 0 && target[0]) {
      nucont.classifier = target[0];
      nucont.description = target[1];
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
    let number = Number(numb.replace('.', '').replace('.', '').replace('.', '').replace(',', '.').replace('D', '').replace('C', ''));
    if(operator === 'D') number = number * -1; 
    return { op: operator, value: number };
  } else {
    return false;
  }  
}

function sanatizeParent (sanity) {
  let sp = sanity.map(cur => {

    if(cur[0].length === 1) {
      cur.push(null);
      return cur;
    } else {

      let tmp = cur[0].split('0').filter(c => c !== '');

      if(tmp.length === 1) {
        cur.push(tmp[0].substring(0, tmp[0].length - 1));
        return cur;
      } else {
        tmp = tmp.reduce((acc, target, idx, arr) => {
          
          if(idx === arr.length - 1) return acc;

          if(idx === 0) return `${target}`;

          return `${acc}0${target}`;
        }, '');

        cur.push(tmp);
        
        return cur;
      }
    }
    
  });
  return sp;
}
