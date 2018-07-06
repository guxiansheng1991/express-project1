let util = {
  handleError(err, errMessage) {
    return {
      message: errMessage,
      error: err
    };
  }
};

module.exports = util;