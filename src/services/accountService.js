const Account = require('../models/account');

// Business logic for account operations. Persistence is stubbed for brevity.
exports.latestStatement = async (accountNumber) => {
  return {
    balance: { opening: 834.85, closing: 118.51, currency: 'USD' },
    money: { in: 167.49, out: 730.71 },
    transactions: [],
  };
};

exports.overview = async (accountNumber) => {
  return {
    account: new Account({ id: accountNumber, name: 'Primary Business Account', currency: 'USD', status: 'active' }),
    balance: { current: 118.51, available: 118.51 },
  };
};

exports.update = async (accountNumber, body) => {
  return { account: { id: accountNumber, ...body }, message: 'Account updated successfully' };
};

exports.remove = async (accountNumber) => {
  return { account: { id: accountNumber, status: 'closed' }, message: 'Account deleted successfully' };
};

exports.create = async (accountNumber, body) => {
  return { account: { id: accountNumber, ...body, status: 'active' }, message: 'Account created' };
};
