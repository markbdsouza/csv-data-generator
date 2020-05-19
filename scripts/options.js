export const ALL_OPTIONS = [
  // name
  {
    name: 'First Name',
    value: 'firstName',
    type: 'Name',
    getData() {
      return faker.name.firstName();
    },
  },
  {
    name: 'Last Name',
    value: 'lastName',
    type: 'Name',
    getData() {
      return faker.name.lastName();
    },
  },
  {
    name: 'Full Name',
    value: 'findName',
    type: 'Name',
    getData() {
      return faker.name.findName();
    },
  },
  {
    name: 'Job Title',
    value: 'jobTitle',
    type: 'Name',
    getData() {
      return faker.name.jobTitle();
    },
  },
  {
    name: 'Name Prefix',
    value: 'prefix',
    type: 'Name',
    getData() {
      return faker.name.prefix();
    },
  },
  {
    name: 'Name Suffix',
    value: 'suffix',
    type: 'Name',
    getData() {
      return faker.name.suffix();
    },
  },
  {
    name: 'Name Title',
    value: 'title',
    type: 'Name',
    getData() {
      return faker.name.title();
    },
  },
  {
    name: 'Job Descriptor',
    value: 'jobDescriptor',
    type: 'Name',
    getData() {
      return faker.name.jobDescriptor();
    },
  },
  {
    name: 'Job Area',
    value: 'jobArea',
    type: 'Name',
    getData() {
      return faker.name.jobArea();
    },
  },
  {
    name: 'Job Type',
    value: 'jobType',
    type: 'Name',
    getData() {
      return faker.name.jobType();
    },
  },

  //Address
  {
    name: 'Street Name',
    value: 'streetName',
    type: 'Address',
    getData() {
      return faker.address.streetName();
    },
  },
  {
    name: 'Street Address',
    value: 'streetAddress',
    type: 'Address',
    getData() {
      return faker.address.streetAddress();
    },
  },
  {
    name: 'Secondary Address',
    value: 'secondaryAddress',
    type: 'Address',
    getData() {
      return faker.address.secondaryAddress();
    },
  },
  {
    name: 'Zip Code',
    value: 'zipCode',
    type: 'Address',
    getData() {
      return faker.address.zipCode();
    },
  },
  {
    name: 'County',
    value: 'county',
    type: 'Address',
    getData() {
      return faker.address.county();
    },
  },
  {
    name: 'City',
    value: 'city',
    type: 'Address',
    getData() {
      return faker.address.city();
    },
  },
  {
    name: 'State',
    value: 'state',
    type: 'Address',
    getData() {
      return faker.address.state();
    },
  },
  {
    name: 'State Abbr',
    value: 'stateAbbr',
    type: 'Address',
    getData() {
      return faker.address.stateAbbr();
    },
  },
  {
    name: 'Country',
    value: 'country',
    type: 'Address',
    getData() {
      return faker.address.country();
    },
  },
  {
    name: 'Country Code',
    value: 'countryCode',
    type: 'Address',
    getData() {
      return faker.address.countryCode();
    },
  },
  {
    name: 'Latitude',
    value: 'latitude',
    type: 'Address',
    getData() {
      return faker.address.latitude();
    },
  },
  {
    name: 'Longitude',
    value: 'longitude',
    type: 'Address',
    getData() {
      return faker.address.longitude();
    },
  },
  //Company

  {
    name: 'Company Name',
    value: 'companyName',
    // type: 'company',
    type: 'Finance',
    getData() {
      return faker.company.companyName();
    },
  },
  //   {
  //     name: 'bs',
  //     value: 'bs',
  //     type: 'company',
  //     getData() {
  //       return faker.company.bs();
  //     },
  //   },
  //   {
  //     name: 'companySuffix',
  //     value: 'companySuffix',
  //     type: 'company',
  //     getData() {
  //       return faker.company.companySuffix();
  //     },
  //   },
  //   {
  //     name: 'catchPhraseAdjective',
  //     value: 'catchPhraseAdjective',
  //     type: 'company',
  //     getData() {
  //       return faker.company.catchPhraseAdjective();
  //     },
  //   },

  //finance
  {
    name: 'Account',
    value: 'account',
    type: 'Finance',
    getData() {
      return faker.finance.account();
    },
  },
  {
    name: 'Account Name',
    value: 'accountName',
    type: 'Finance',
    getData() {
      return faker.finance.accountName();
    },
  },
  {
    name: 'Currency Code',
    value: 'currencyCode',
    type: 'Finance',
    getData() {
      return faker.finance.currencyCode();
    },
  },

  {
    name: 'Currency Name',
    value: 'currencyName',
    type: 'Finance',
    getData() {
      return faker.finance.currencyName();
    },
  },
  {
    name: 'Currency Symbol',
    value: 'currencySymbol',
    type: 'Finance',
    getData() {
      return faker.finance.currencySymbol();
    },
  },
  {
    name: 'Bitcoin Address',
    value: 'bitcoinAddress',
    type: 'Finance',
    getData() {
      return faker.finance.bitcoinAddress();
    },
  },
  {
    name: 'IBAN',
    value: 'iban',
    type: 'Finance',
    getData() {
      return faker.finance.iban();
    },
  },
  //internet
  {
    name: 'Email',
    value: 'email',
    type: 'Internet',
    getData() {
      return faker.internet.email();
    },
  },
  {
    name: 'User Name',
    value: 'userName',
    type: 'Internet',
    getData() {
      return faker.internet.userName();
    },
  },
  {
    name: 'URL',
    value: 'url',
    type: 'Internet',
    getData() {
      return faker.internet.url();
    },
  },
  {
    name: 'Domain Name',
    value: 'domainName',
    type: 'Internet',
    getData() {
      return faker.internet.domainName();
    },
  },
  {
    name: 'IP Address',
    value: 'ip',
    type: 'Internet',
    getData() {
      return faker.internet.ip();
    },
  },

  //Date
  {
    name: 'Past Date',
    value: 'past',
    type: 'Date',
    getData() {
      return faker.date.past();
    },
  },
  {
    name: 'Future Date',
    value: 'future',
    type: 'Date',
    getData() {
      return faker.date.future();
    },
  },
  {
    name: 'Recent Date',
    value: 'recent',
    type: 'Date',
    getData() {
      return faker.date.recent();
    },
  },
  {
    name: 'Month',
    value: 'month',
    type: 'Date',
    getData() {
      return faker.date.month();
    },
  },
  {
    name: 'Weekday',
    value: 'weekday',
    type: 'Date',
    getData() {
      return faker.date.weekday();
    },
  },
  //random

  {
    name: 'UUID',
    value: 'uuid',
    type: 'Other',
    getData() {
      return faker.random.uuid();
    },
  },
  {
    name: 'Boolean',
    value: 'boolean',
    type: 'Other',
    getData() {
      return faker.random.boolean();
    },
  },
  {
    name: 'word',
    value: 'word',
    type: 'Other',
    getData() {
      return faker.random.word();
    },
  },
  {
    name: 'Random Character',
    value: 'randomCharacter',
    type: 'Other',
    getData() {
      let characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      return characters[Math.floor(Math.random() * characters.length)];
    },
  },
  //   {
  //     name: 'Sequence Generated Integer',
  //     value: 'index',
  //     index: 0,
  //     type: 'a0',
  //     getData: function () {
  //       return this.index;
  //     },
  //   },
  {
    name: 'Random Integer',
    value: 'randomInteger',
    type: 'Other',
    getData() {
      return Math.floor(Math.random() * 10000);
    },
  },

  //Commerce
  {
    name: 'Color',
    value: 'color',
    // type: 'commerce',
    type: 'Other',
    getData() {
      return faker.commerce.color();
    },
  },
  // {
  //   name: 'Price',
  //   value: 'price',
  //   type: 'commerce',
  //   getData() {
  //     return faker.commerce.price();
  //   },
  // },
  {
    name: 'Product',
    value: 'product',
    type: 'Other',
    getData() {
      return faker.commerce.product();
    },
  },
  //database
  // {
  //   name: 'DataBase Column',
  //   value: 'column',
  //   type: 'database',
  //   getData() {
  //     return faker.database.column();
  //   },
  // },

  {
    name: 'Database Column Type',
    value: 'type',
    type: 'Other',
    getData() {
      return faker.database.type();
    },
  },
  {
    name: 'Database Collation',
    value: 'collation',
    type: 'Other',
    getData() {
      return faker.database.collation();
    },
  },
  {
    name: 'Database Engine',
    value: 'engine',
    type: 'Other',
    getData() {
      return faker.database.engine();
    },
  },

  {
    name: 'Phone',
    value: 'phone',
    type: 'Other',
    getData() {
      return faker.phone.phoneNumber();
    },
  },
];
