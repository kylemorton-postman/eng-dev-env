// Account domain model. In a real service this maps to the persistence layer.
class Account {
  constructor({ id, name, currency, status }) {
    this.id = id;
    this.name = name;
    this.currency = currency;
    this.status = status;
  }

  isActive() {
    return this.status === 'active';
  }
}

module.exports = Account;
