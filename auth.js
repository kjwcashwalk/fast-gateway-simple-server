const jwt = require('jsonwebtoken');

const tokenVerify = (req, res, next) => {
  try{
    if (req.path.indexOf('/token') < 0) {
      const decoded = jwt.verify(req.headers['x-access-token'], 'secret_key');
      if (decoded) {
        req.headers['decoded'] = JSON.stringify(decoded);
        next()
      } else {
        res.send({
          'message': '잘못된 토큰'
        }, 401);
      }
    } else {
      next()
    }
  } catch (e) {
    console.error(e);
    res.send({
      'message': '토큰 확인시 오류'
    }, 401);
  }
};

exports.tokenVerify = tokenVerify;
