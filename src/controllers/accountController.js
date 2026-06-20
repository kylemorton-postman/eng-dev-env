const service = require('../services/accountService');

exports.getLatestStatement = async (req, res, next) => {
  try {
    const statement = await service.latestStatement(req.params.accountNumber);
    res.json(statement);
  } catch (err) {
    next(err);
  }
};

exports.getOverview = async (req, res, next) => {
  try {
    res.json(await service.overview(req.params.accountNumber));
  } catch (err) {
    next(err);
  }
};

exports.updateAccount = async (req, res, next) => {
  try {
    res.json(await service.update(req.params.accountNumber, req.body));
  } catch (err) {
    next(err);
  }
};

exports.deleteAccount = async (req, res, next) => {
  try {
    res.json(await service.remove(req.params.accountNumber));
  } catch (err) {
    next(err);
  }
};

exports.createAccount = async (req, res, next) => {
  try {
    res.json(await service.create(req.params.accountNumber, req.body));
  } catch (err) {
    next(err);
  }
};
