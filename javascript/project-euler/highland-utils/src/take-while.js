import _ from 'highland'

export default (f) => {
  return (err, x, push, next) => {
    if (err) {
      push(err);
      next();
    }
    else if (x === _.nil) {
      push(null, x);
    }
    else {
      if (f(x)) {
        push(null, x);
        next();
      } else {
        push(null, _.nil)
      }
    }
  }
}
