import {color} from '../src/utils/theme'
const Mock = require('mockjs')
import mockStorge from '../src/utils/mockStorge'

let dataKey = mockStorge('Dashboard', Mock.mock({
  'sales|8': [
    {
      'name|+1': 2008,
      'Clothes|200-500': 1,
      'Food|180-400': 1,
      'Electronics|300-550': 1
    }
  ],
  'cpu': {
    'usage|50-600': 1,
    space: 825,
    'cpu|40-90': 1,
    'data|20': [
      {
        'cpu|20-80': 1
      }
    ]
  },
  'sales_2|8': [
    {
      'name|+1': 2009,
      'a|400-100': 1,
      'b|580-400': 1,
      'c|300-150': 1
    }
  ],
  
  'browser': [
    {
      name: 'Google Chrome',
      percent: 43.3,
      status: 1
    },
    {
      name: 'Mozilla Firefox',
      percent: 33.4,
      status: 2
    },
    {
      name: 'Apple Safari',
      percent: 34.6,
      status: 3
    },
    {
      name: 'Internet Explorer',
      percent: 12.3,
      status: 4
    },
    {
      name: 'Opera Mini',
      percent: 3.3,
      status: 1
    },
    {
      name: 'Chromium',
      percent: 2.53,
      status: 1
    }
  ],
  'todo': [
    {
      name: 'Go to the Dentist',
      date: function () {
        return '2016-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      },
      status: 1
    },
    {
      name: 'Upload Photos',
       date: function () {
        return '2016-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      },
      status: 0
    },
    {
      name: 'Write a New Story',
       date: function () {
        return '2016-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      },
      status: 0
    },
    {
      name: 'Call John',
      date: function () {
        return '2016-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      },
      status: 0
    },
    {
      name: 'Schedule Meeting',
       date: function () {
        return '2016-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      },
      status: 0
    },
    {
      name: 'Comments',
       date: function () {
        return '2016-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      },
      status: 0
    },
     {
      name: 'Write Message Susan',
       date: function () {
        return '2016-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      },
      status: 0
    },
     {
      name: 'Go to Gymn',
       date: function () {
        return '2016-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      },
      status: 0
    }
  ],
  user: {
    name: 'john',
    email: 'john@.gmail.com',
    sales: 3241,
    sold: 3556,
    avatar: './assets/people/11.jpg'
  },
  'completed|12': [
    {
      'name|+1': 2008,
      'Task complete|200-1000': 1,
      'Cards Complete|200-1000': 1
    }
  ],
  'comments|5': [
    {
      name: '@last',
      'status|1-3': 1,
      content: '@sentence',
      avatar: function () {
        return Mock.Random.image('48x48', Mock.Random.color(), '#757575', 'png', this.name.substr(0, 1))
      },
      date: function () {
        return '2016-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      }
    }
  ],
  'recentSales|12': [
    {
      'id|+1': 1,
      name: '@last',
      'status|1-4': 1,
      date: function () {
        return Mock.Random.integer(2015, 2016) + '-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      },
      'price|10-200.1-2': 1,
	  type: '1',
    }
  ],
   'recentSales_2|12': [
    {
      'id|+1': 1,
      name: '@last',
      'status|5-8': 1,
      date: function () {
        return Mock.Random.integer(2015, 2016) + '-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      },
      'price|10-200.1-2': 1,
	  type: '2'
    }
  ],
  
   'recentSales_3|12': [
    {
      'id|+1': 1,
      name: '@last',
      'status|9-12': 1,
      date: function () {
        return Mock.Random.integer(2015, 2016) + '-' + Mock.Random.date('MM-dd') + ' ' + Mock.Random.time('HH:mm:ss')
      },
      'price|10-200.5-2': 1,
	  type: '3'
    }
  ],
  quote: {
    name: 'Joho Doe',
    title: 'Graphic Designer',
    content: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
    avatar: './assets/people/9.jpg'
  },
   quote_2: {
    name: 'John Doe',
    title: 'Style Manager',
    content: `Being Lucky in life is the result of putting yourself into action for good luck to happen to you`,
    avatar: './assets/people/10.jpg'
  },
   quote_3: {
    name: 'Luke OLSEN',
    title: 'Designer',
    content: `Comment On The Importance Of Human Life, And off he walked very, very scornfully.`,
    avatar: './assets/people/7.jpg'
  },
  numbers: [
    {
      icon: 'pay-circle-o',
      color: color.green,
      title: 'Online Review',
      number: 2781
    }, {
      icon: 'team',
      color: color.blue,
      title: 'New Customers',
      number: 3241
    }, {
      icon: 'message',
      color: color.purple,
      title: 'Active Projects',
      number: 253
    }, {
      icon: 'shopping-cart',
      color: color.red,
      title: 'Referrals',
      number: 4324
    }
  ],
  numbers_2: [
    {
      icon: 'book',
      color: color.plump_purple,
      title: 'Book Store',
      number: 6582
    }, {
      icon: 'team',
      color: color.green,
      title: 'Users',
      number: 3241
    }, {
      icon: 'inbox',
      color: color.blue,
      title: 'Emails',
      number: 253
    }
  ],
  numbers_3: [
    {
      icon: 'customer-service',
      color: color.green,
      title: 'Online Review',
      number: 2500,
      percent: 25
    }, {
      icon: 'key',
      color: color.blue,
      title: 'New Customers',
      number: 5000,
      percent: 50
    }, {
      icon: 'coffee',
      color: color.purple,
      title: 'Active Projects',
      number: 7500,
      percent: 75
    }, {
      icon: 'trophy',
      color: color.yellow,
      title: 'Referrals',
      number: 10000,
      percent: 100
    }
  ],
}))

module.exports = {
  'GET /api/dashboard' (req, res) {
    res.json(global[dataKey])
  }
}
