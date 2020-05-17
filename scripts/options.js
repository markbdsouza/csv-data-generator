export const ALL_OPTIONS = [
  //Address
  {
    name: 'Street Name',
    value: 'streetName',
    type: 'address',
    getData() {
      return faker.address.streetName();
    },
  },
  {
    name: 'street Address',
    value: 'streetAddress',
    type: 'address',
    getData() {
      return faker.address.streetAddress();
    },
  },
  {
    name: 'secondary Address',
    value: 'secondaryAddress',
    type: 'address',
    getData() {
      return faker.address.secondaryAddress();
    },
  },
  {
    name: 'Zip Code',
    value: 'zipCode',
    type: 'address',
    getData() {
      return faker.address.zipCode();
    },
  },
  {
    name: 'County',
    value: 'county',
    type: 'address',
    getData() {
      return faker.address.county();
    },
  },
  {
    name: 'City',
    value: 'city',
    type: 'address',
    getData() {
      return faker.address.city();
    },
  },
  {
    name: 'State',
    value: 'state',
    type: 'address',
    getData() {
      return faker.address.state();
    },
  },
  {
    name: 'State Abbr',
    value: 'stateAbbr',
    type: 'address',
    getData() {
      return faker.address.stateAbbr();
    },
  },
  {
    name: 'Country',
    value: 'country',
    type: 'address',
    getData() {
      return faker.address.country();
    },
  },
  {
    name: 'Country Code',
    value: 'countryCode',
    type: 'address',
    getData() {
      return faker.address.countryCode();
    },
  },
  {
    name: 'latitude',
    value: 'latitude',
    type: 'address',
    getData() {
      return faker.address.latitude();
    },
  },
  {
    name: 'longitude',
    value: 'longitude',
    type: 'address',
    getData() {
      return faker.address.longitude();
    },
  },
  //Commerce
  {
    name: 'Color',
    value: 'color',
    type: 'commerce',
    getData() {
      return faker.commerce.color();
    },
  },
  {
    name: 'price',
    value: 'price',
    type: 'commerce',
    getData() {
      return faker.commerce.price();
    },
  },
  {
    name: 'product',
    value: 'product',
    type: 'commerce',
    getData() {
      return faker.commerce.product();
    },
  },
  //Company

  {
    name: 'Company Name',
    value: 'companyName',
    type: 'company',
    getData() {
      return faker.company.companyName();
    },
  },
  {
    name: 'bs',
    value: 'bs',
    type: 'company',
    getData() {
      return faker.company.bs();
    },
  },
  {
    name: 'companySuffix',
    value: 'companySuffix',
    type: 'company',
    getData() {
      return faker.company.companySuffix();
    },
  },
  {
    name: 'catchPhraseAdjective',
    value: 'catchPhraseAdjective',
    type: 'company',
    getData() {
      return faker.company.catchPhraseAdjective();
    },
  },
  //database
  {
    name: 'column',
    value: 'column',
    type: 'database',
    getData() {
      return faker.database.column();
    },
  },
  {
    name: 'DBtype',
    value: 'type',
    type: 'database',
    getData() {
      return faker.database.type();
    },
  },
  {
    name: 'collation',
    value: 'collation',
    type: 'database',
    getData() {
      return faker.database.collation();
    },
  },
  {
    name: 'engine',
    value: 'engine',
    type: 'database',
    getData() {
      return faker.database.engine();
    },
  },
  //Date

  {
    name: 'past',
    value: 'past',
    type: 'database',
    getData() {
      return faker.date.past();
    },
  },
  {
    name: 'future',
    value: 'future',
    type: 'database',
    getData() {
      return faker.date.future();
    },
  },
  {
    name: 'recent',
    value: 'recent',
    type: 'database',
    getData() {
      return faker.date.recent();
    },
  },
  {
    name: 'month',
    value: 'month',
    type: 'database',
    getData() {
      return faker.date.month();
    },
  },

  {
    name: 'weekday',
    value: 'weekday',
    type: 'database',
    getData() {
      return faker.date.weekday();
    },
  },

  //////////OTHERS
  {
    name: 'Random String',
    value: 'randomString',
    type: 'other',
    getData() {
      let characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      return characters[Math.floor(Math.random() * characters.length)];
    },
  },
  {
    name: 'Sequence Generated Integer',
    value: 'index',
    index: 0,
    type: 'a0',
    getData: function () {
      //   console.log(this.index);
      //   console.log(this);
      return this.index;
    },
  },
  {
    name: 'Random Integer',
    value: 'randomInteger',
    type: 'other',
    getData() {
      return Math.floor(Math.random() * 100);
    },
  },
  {
    name: 'Full Name',
    value: 'fullName',
    type: 'name',
    getData() {
      return faker.name.findName();
    },
  },
  {
    name: 'Phone',
    value: 'phone',
    type: 'phone',
    getData() {
      return faker.phone.phoneNumber();
    },
  },
  {
    name: 'e-mail',
    value: 'email',
    type: 'internet',
    getData() {
      return faker.internet.email();
    },
  },
];
