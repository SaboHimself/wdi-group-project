const mongoose = require('mongoose')
const env = require('../config/environment')
const Space = require('../models/space')
const User =  require('../models/user')

mongoose.connect(env.db.development , { useNewUrlParser: true }, (err, db) => {

  db.dropDatabase()

  User.create([
    {
      username: 'Harry1',
      email: 'harrymcdonald@hotmail.com',
      password: 'harry1',
      passwordConfirmation: 'harry1',
      number: '+447345928372'
    },
    {
      username: 'JaneOwen',
      email: 'jc123@hotmail.co.uk',
      password: 'passwordJane',
      passwordConfirmation: 'passwordJane',
      number: '+447345928374'
    },
    {
      username: 'MichealOgrant',
      email: 'mikeyj@hotmail.com',
      password: 'mo246',
      passwordConfirmation: 'mo246',
      number: '+447345948372'
    },
    {
      username: 'DavetheRave',
      email: 'davidtinkleberry@yahoo.co.uk',
      password: 'tinkers1',
      passwordConfirmation: 'tinkers1',
      number: '+447745928372'
    },
    {
      username: 'JohnSmith',
      email: 'johnnyboy@hotmail.com',
      password: 'harry1',
      passwordConfirmation: 'harry1',
      number: '+447345928372'
    },
    {
      username: 'Martinorigin',
      email: 'missionstatement@hotmail.com',
      password: 'Statement1',
      passwordConfirmation: 'Statement1',
      number: '+447935263374'
    },
    {
      username: 'Luke-Skywalker',
      email: 'thelastjedi@gmail.com',
      password: 'lightsaber',
      passwordConfirmation: 'lightsaber',
      number: '+447823776732'
    },
    {
      username: 'Adam_O_Reilly',
      email: 'adders90@gmail.com',
      password: 'adam',
      passwordConfirmation: 'adam',
      number: '+447283494883'
    },
    {
      username: 'ArmyCadet89',
      email: 'camoflauge@gmail.com',
      password: 'camo',
      passwordConfirmation: 'camo',
      number: '+447283493283'
    },
    {
      username: 'MathewMcdonald',
      email: 'MathewMc@gmail.com',
      password: 'Matty',
      passwordConfirmation: 'Matty',
      number: '+447283493883'
    },
    {
      username: 'ThomasAndrews',
      email: 'tommyt@yahoo.com',
      password: 'tomthedom',
      passwordConfirmation: 'tomthedom',
      number: '+447283499383'
    },
    {
      username: 'alexandergreat',
      email: 'alexgreen105@hotmail.com',
      password: 'password123',
      passwordConfirmation: 'password123',
      number: '+447283493110'
    },
    {
      username: 'Amy-Right',
      email: 'amyright@am.com',
      password: 'iamright',
      passwordConfirmation: 'iamright',
      number: '+447283493221'
    },
    {
      username: 'Purlicue',
      email: 'bjornk@yahoo.com',
      password: 'Matty9',
      passwordConfirmation: 'Matty9',
      number: '+447283493233'
    },
    {
      username: 'Abstar1Varia',
      email: 'uqmcolyv@outlook.com',
      password: 'XyeLxTYpl',
      passwordConfirmation: 'XyeLxTYpl',
      number: '+447284293883'
    },
    {
      username: 'Thecate',
      email: 'msroth@yahoo.ca',
      password: 'VnimxwiyB',
      passwordConfirmation: 'VnimxwiyB',
      number: '+447283493943'
    },
    {
      username: 'chalon.alan',
      email: 'pthomsen@optonline.net',
      password: 'hSUQyzSrI',
      passwordConfirmation: 'hSUQyzSrI',
      number: '+447283409883'
    },
    {
      username: 'raisehayes',
      email: 'ivoibs@verizon.net',
      password: 'mxzCkXIzm',
      passwordConfirmation: 'mxzCkXIzm',
      number: '+447283493093'
    },
    {
      username: 'hayes_the_praise',
      email: 'boein@hotmail.com',
      password: 'eDcXCOqFU',
      passwordConfirmation: 'eDcXCOqFU',
      number: '+447283493843'
    },
    {
      username: 'claudius93ozumv',
      email: 'arnold@outlook.com',
      password: 'beIlsBakS',
      passwordConfirmation: 'beIlsBakS',
      number: '+447283493093'
    },
    {
      username: 'Bronomeister',
      email: 'haddawy@comcast.net',
      password: 'jUejUcKCz',
      passwordConfirmation: 'jUejUcKCz',
      number: '+447283493880'
    },
    {
      username: 'Brony',
      email: 'seano@comcast.net',
      password: 'kqIlsJKjx',
      passwordConfirmation: 'kqIlsJKjx',
      number: '+447283493881'
    },
    {
      username: 'Brooksy',
      email: 'majordick@yahoo.com',
      password: 'PxWuZHBWY',
      passwordConfirmation: 'PxWuZHBWY',
      number: '+447283423903'
    },
    {
      username: 'Claudettebug',
      email: 'mugwump@aol.com',
      password: 'duzqExNGK',
      passwordConfirmation: 'duzqExNGK',
      number: '+447283413893'
    },
    {
      username: 'Claudbob',
      email: 'dhrakar@gmail.com',
      password: 'qgtJIKMTq',
      passwordConfirmation: 'qgtJIKMTq',
      number: '+447283499093'
    },
    {
      username: 'EricssonAnything',
      email: 'pizza@aol.com',
      password: 'OvHAAupWU',
      passwordConfirmation: 'OvHAAupWU',
      number: '+447283493874'
    },
    {
      username: 'AnythingSwallow',
      email: 'ramollin@aol.com',
      password: 'bKLPqQPuf',
      passwordConfirmation: 'bKLPqQPuf',
      number: '+447283424883'
    },
    {
      username: 'GilletteAnything',
      email: 'jkegl@att.net',
      password: 'tdsOxEmVN',
      passwordConfirmation: 'tdsOxEmVN',
      number: '+447281393883'
    },
    {
      username: 'StationAnything',
      email: 'lstaf@outlook.com',
      password: 'BOJrFUmvS',
      passwordConfirmation: 'BOJrFUmvS',
      number: '+447283192833'
    },
    {
      username: 'tastebrogley',
      email: 'itstatus@verizon.net',
      password: 'ynbkPvYws',
      passwordConfirmation: 'ynbkPvYws',
      number: '+447283903883'
    },
    {
      username: 'huddlesort',
      email: 'shaffei@outlook.com',
      password: 'HbCVIaSpA',
      passwordConfirmation: 'HbCVIaSpA',
      number: '+447283493123'
    },
    {
      username: 'reducedstrike',
      email: 'mxiao@mac.com',
      password: 'ldapFzMUy',
      passwordConfirmation: 'ldapFzMUy',
      number: '+447283493113'
    },
    {
      username: 'wastefulfaculty',
      email: 'penna@outlook.com',
      password: 'xgLDuHMHh',
      passwordConfirmation: 'xgLDuHMHh',
      number: '+447283409893'
    },
    {
      username: 'disksbarrage',
      email: 'paina@yahoo.ca',
      password: 'qwEPEguuD',
      passwordConfirmation: 'qwEPEguuD',
      number: '+447283493003'
    },
    {
      username: 'paralysisrefund',
      email: 'mlewan@hotmail.com',
      password: 'weqVQUNQY',
      passwordConfirmation: 'weqVQUNQY',
      number: '+447283493001'
    },
    {
      username: 'spanishstray',
      email: 'syncnine@gmail.com',
      password: 'ZYLWiJTwu',
      passwordConfirmation: 'ZYLWiJTwu',
      number: '+447283493804'
    },
    {
      username: 'depravedhug',
      email: 'johnh@comcast.net',
      password: 'OOSizjZwT',
      passwordConfirmation: 'OOSizjZwT',
      number: '+447283493823'
    },
    {
      username: 'stoppableruffian',
      email: 'ryanvm@icloud.com',
      password: 'SnRpeUJXk',
      passwordConfirmation: 'SnRpeUJXk',
      number: '+447283890483'
    },
    {
      username: 'storkspecialist',
      email: 'nweaver@gmail.com',
      password: 'nFOhEdfYI',
      passwordConfirmation: 'nFOhEdfYI',
      number: '+447283409083'
    },
    {
      username: 'neodymiumbeetle',
      email: 'smcnabb@gmail.com',
      password: 'jfvCqQVfQ',
      passwordConfirmation: 'jfvCqQVfQ',
      number: '+447283449587'
    },
    {
      username: 'commodoreplates',
      email: 'zyghom@verizon.net',
      password: 'BrAZpBaKw',
      passwordConfirmation: 'BrAZpBaKw',
      number: '+447283493883'
    },
    {
      username: 'puncturedcramer',
      email: 'rwelty@outlook.com',
      password: 'cdECwzDxh',
      passwordConfirmation: 'cdECwzDxh',
      number: '+447283493883'
    },
    {
      username: 'renovatorhyperlink',
      email: 'bwcarty@hotmail.com',
      password: 'ZJyVuHqtk',
      passwordConfirmation: 'ZJyVuHqtk',
      number: '+447289889323'
    },
    {
      username: 'slouchinglabored',
      email: 'fviegas@verizon.net',
      password: 'shCAHeDyV',
      passwordConfirmation: 'shCAHeDyV',
      number: '+447283490000'
    },
    {
      username: 'andromedadocument',
      email: 'djpig@yahoo.ca',
      password: 'hJpSTLurA',
      passwordConfirmation: 'hJpSTLurA',
      number: '+447283490001'
    },
    {
      username: 'indianwhooper',
      email: 'spadkins@gmail.com',
      password: 'dLSsBKwhR',
      passwordConfirmation: 'dLSsBKwhR',
      number: '+447283490002'
    },
    {
      username: 'dbasesteamy',
      email: 'yamla@yahoo.com',
      password: 'zRnVmVKVa',
      passwordConfirmation: 'zRnVmVKVa',
      number: '+447283493883'
    },
    {
      username: 'sassyshiny',
      email: 'crusader@att.net',
      password: 'UwKcuDFNn',
      passwordConfirmation: 'UwKcuDFNn',
      number: '+447283493883'
    },
    {
      username: 'kindredhalo',
      email: 'granboul@comcast.net',
      password: 'bbpyeMFxZ',
      passwordConfirmation: 'bbpyeMFxZ',
      number: '+447283493883'
    },
    {
      username: 'fermatdoudy',
      email: 'parrt@me.com',
      password: 'IyMbfCRaN',
      passwordConfirmation: 'IyMbfCRaN',
      number: '+447283493883'
    },
    {
      username: 'swaggerriches',
      email: 'dunstan@msn.com',
      password: 'smHhQNQGJ',
      passwordConfirmation: 'smHhQNQGJ',
      number: '+447283493883'
    },
    {
      username: 'Cocoa1',
      email: 'drezet@yahoo.com',
      password: 'lUsBknRzm',
      passwordConfirmation: 'lUsBknRzm',
      number: '+447283493883'
    },
    {
      username: 'Abattoir56',
      email: 'philen@icloud.com',
      password: 'ZoyVRujip',
      passwordConfirmation: 'ZoyVRujip',
      number: '+447283493883'
    },
    {
      username: 'Luminous',
      email: 'wainwrig@comcast.net',
      password: 'mUorQdYII',
      passwordConfirmation: 'mUorQdYII',
      number: '+447283493883'
    },
    {
      username: 'Cecilsce5000',
      email: 'dpitts@comcast.net',
      password: 'dLeCZUUPm',
      passwordConfirmation: 'dLeCZUUPm',
      number: '+447283493883'
    },
    {
      username: 'Brayergor141201',
      email: 'wortmanj@live.com',
      password: 'IOSClhyDC',
      passwordConfirmation: 'IOSClhyDC',
      number: '+447283493883'
    },
    {
      username: 'LanterGirdle',
      email: 'malvar@me.com',
      password: 'ssCHhiXom',
      passwordConfirmation: 'ssCHhiXom',
      number: '+447283493883'
    },
    {
      username: 'JakekGewgaw',
      email: 'bflong@mac.com',
      password: 'ORMnclXNR',
      passwordConfirmation: 'ORMnclXNR',
      number: '+447283493883'
    },
    {
      username: 'BosstasFlink',
      email: 'enintend@live.com',
      password: 'YcpgjRCaB',
      passwordConfirmation: 'YcpgjRCaB',
      number: '+447283493883'
    },
    {
      username: 'Benlet1Unau',
      email: 'aardo@outlook.com',
      password: 'SSSDdUCcsd',
      passwordConfirmation: 'SSSDdUCcsd',
      number: '+447283493883'
    },
    {
      username: 'Harry1',
      email: 'harrymcdonald@hotmail.com',
      password: 'harry1',
      passwordConfirmation: 'harry1',
      number: '+447345928372'
    },
    {
      username: 'JaneOwen',
      email: 'jc123@hotmail.co.uk',
      password: 'passwordJane',
      passwordConfirmation: 'passwordJane',
      number: '+447345928374'
    },
    {
      username: 'MichealOgrant',
      email: 'mikeyj@hotmail.com',
      password: 'mo246',
      passwordConfirmation: 'mo246',
      number: '+447345948372'
    },
    {
      username: 'DavetheRave',
      email: 'davidtinkleberry@yahoo.co.uk',
      password: 'tinkers1',
      passwordConfirmation: 'tinkers1',
      number: '+447745928372'
    },
    {
      username: 'JohnSmith',
      email: 'johnnyboy@hotmail.com',
      password: 'harry1',
      passwordConfirmation: 'harry1',
      number: '+447345928372'
    },
    {
      username: 'Martinorigin',
      email: 'missionstatement@hotmail.com',
      password: 'Statement1',
      passwordConfirmation: 'Statement1',
      number: '+447935263374'
    },
    {
      username: 'Luke-Skywalker',
      email: 'thelastjedi@gmail.com',
      password: 'lightsaber',
      passwordConfirmation: 'lightsaber',
      number: '+447823776732'
    },
    {
      username: 'Adam_O_Reilly',
      email: 'adders90@gmail.com',
      password: 'adam',
      passwordConfirmation: 'adam',
      number: '+447283494883'
    },
    {
      username: 'ArmyCadet89',
      email: 'camoflauge@gmail.com',
      password: 'camo',
      passwordConfirmation: 'camo',
      number: '+447283493283'
    },
    {
      username: 'MathewMcdonald',
      email: 'MathewMc@gmail.com',
      password: 'Matty5',
      passwordConfirmation: 'Matty',
      number: '+447283493883'
    },
    {
      username: 'ThomasAndrews',
      email: 'tommyt@yahoo.com',
      password: 'tomthedom',
      passwordConfirmation: 'tomthedom',
      number: '+447283499383'
    },
    {
      username: 'alexandergreat',
      email: 'alexgreen105@hotmail.com',
      password: 'password123',
      passwordConfirmation: 'password123',
      number: '+447283493110'
    },
    {
      username: 'Amy-Right',
      email: 'amyright@am.com',
      password: 'iamright',
      passwordConfirmation: 'iamright',
      number: '+447283493221'
    },
    {
      username: 'GutenWabbit',
      email: 'offthelip@gmail.com',
      password: 'Matty3',
      passwordConfirmation: 'Matty',
      number: '+447283493883'
    },
    {
      username: 'Poundage',
      email: 'caronni@comcast.net',
      password: 'SSSDdUCcs',
      passwordConfirmation: 'SSSDdUCcs',
      number: '+447283493883'
    },
    {
      username: 'Hawsehole',
      email: 'martink@msn.com',
      password: 'vFBXPghJn',
      passwordConfirmation: 'vFBXPghJn',
      number: '+447283493883'
    },
    {
      username: 'Factive',
      email: 'hoangle@optonline.net',
      password: 'xyBjKfOPF',
      passwordConfirmation: 'xyBjKfOPF',
      number: '+447283493883'
    },
    {
      username: 'Astacology',
      email: 'hager@att.net',
      password: 'klaloUIJX',
      passwordConfirmation: 'klaloUIJX',
      number: '+447283493883'
    },
    {
      username: 'Zyriancalf10',
      email: 'evilopie@sbcglobal.net',
      password: 'EQULRgNdy',
      passwordConfirmation: 'EQULRgNdy',
      number: '+447283493883'
    },
    {
      username: 'CountMojo',
      email: 'durist@me.com',
      password: 'tulzSHY',
      passwordConfirmation: 'tulzSHY',
      number: '+447283493883'
    },
    {
      username: 'Eavesdrop',
      email: 'bogjobber@optonline.net',
      password: 'gwEhKbvoW',
      passwordConfirmation: 'gwEhKbvoW',
      number: '+447283493883'
    },
    {
      username: 'Gobbledygook',
      email: 'murdocj@yahoo.ca',
      password: 'KMNmtyRFL',
      passwordConfirmation: 'KMNmtyRFL',
      number: '+447283493883'
    },
    {
      username: 'Onomatopoeia',
      email: 'punkis@gmail.com',
      password: 'gTwfzTrFS',
      passwordConfirmation: 'gTwfzTrFS',
      number: '+447283493883'
    },
    {
      username: 'Wisecrack',
      email: 'klaudon@att.net',
      password: 'XLhDhAeFR',
      passwordConfirmation: 'XLhDhAeFR',
      number: '+447283493883'
    },
    {
      username: 'Endeavor',
      email: 'tmccarth@comcast.net',
      password: 'bQF',
      passwordConfirmation: 'bQF',
      number: '+447283493883'
    },
    {
      username: 'Byreco1260',
      email: 'ardagna@outlook.com',
      password: 'KjrTbZVMb',
      passwordConfirmation: 'KjrTbZVMb',
      number: '+447283493883'
    },
    {
      username: 'ChamilQuaff',
      email: 'esasaki@verizon.net',
      password: 'reform',
      passwordConfirmation: 'reform',
      number: '+447283493883'
    },
    {
      username: 'BellasmSlosh',
      email: 'rjones@att.net',
      password: 'angle',
      passwordConfirmation: 'angle',
      number: '+447283493883'
    },
    {
      username: 'Poppycock',
      email: 'mglee@att.net',
      password: 'privilege',
      passwordConfirmation: 'privilege',
      number: '+447283493883'
    },
    {
      username: 'Finicky',
      email: 'bmidd@aol.com',
      password: 'discourage',
      passwordConfirmation: 'discourage',
      number: '+447283493883'
    },
    {
      username: 'Pyrometer',
      email: 'mastinfo@live.com',
      password: 'grind',
      passwordConfirmation: 'grind',
      number: '+447283493883'
    },
    {
      username: 'Navette',
      email: 'ranasta@icloud.com',
      password: 'separate',
      passwordConfirmation: 'separate',
      number: '+447283493883'
    },
    {
      username: 'Reguerdon',
      email: 'balchen@icloud.com',
      password: 'weight',
      passwordConfirmation: 'weight',
      number: '+447283493883'
    },
    {
      username: 'Verecund',
      email: 'hmbrand@att.net',
      password: 'mature',
      passwordConfirmation: 'mature',
      number: '+447283493883'
    },
    {
      username: 'Stevedorage',
      email: 'jfinke@gmail.com',
      password: 'analyst',
      passwordConfirmation: 'analyst',
      number: '+447283493883'
    },
    {
      username: 'Charterhouse',
      email: 'purvis@yahoo.com',
      password: 'skeleton',
      passwordConfirmation: 'skeleton',
      number: '+447283493883'
    },
    {
      username: 'Luminous',
      email: 'ovprit@gmail.com',
      password: 'committee',
      passwordConfirmation: 'committee',
      number: '+447283493883'
    },
    {
      username: 'Foutermeis',
      email: 'jrkorson@aol.com',
      password: 'proposal',
      passwordConfirmation: 'proposal',
      number: '+447283493883'
    },
    {
      username: 'Obfuscation',
      email: 'donev@me.com',
      password: 'attract3',
      passwordConfirmation: 'attract3',
      number: '+447283493883'
    },
    {
      username: 'Drizzle',
      email: 'kevinm@comcast.net',
      password: 'mask34',
      passwordConfirmation: 'mask34',
      number: '+447283493883'
    },
    {
      username: 'RheinMiasma',
      email: 'kalpol@hotmail.com',
      password: 'frame',
      passwordConfirmation: 'frame',
      number: '+447283493883'
    },
    {
      username: 'Hippocampus',
      email: 'hoangle@hotmail.com',
      password: 'convince',
      passwordConfirmation: 'convince',
      number: '+447283493883'
    },
    {
      username: 'Sprinkles',
      email: 'mahbub@verizon.net',
      password: 'fold',
      passwordConfirmation: 'fold',
      number: '+447283493883'
    },
    {
      username: 'Scirocco',
      email: 'dieman@live.com',
      password: 'consciousness',
      passwordConfirmation: 'consciousness',
      number: '+447283493883'
    },
    {
      username: 'Quirkyrains0920',
      email: 'cantu@msn.com',
      password: 'mouse',
      passwordConfirmation: 'mouse',
      number: '+447283493883'
    },
    {
      username: 'Aglettro12',
      email: 'mlewan@sbcglobal.net',
      password: 'confuse',
      passwordConfirmation: 'confuse',
      number: '+447283493883'
    },
    {
      username: 'Conundrum',
      email: 'philb@optonline.net',
      password: 'slant',
      passwordConfirmation: 'slant',
      number: '+447283493883'
    },
    {
      username: 'Gimcrack',
      email: 'bjoern@outlook.com',
      password: 'confuse',
      passwordConfirmation: 'confuse',
      number: '+447283493883'
    },
    {
      username: 'Lineaments',
      email: 'dhwon@msn.com',
      password: 'forward',
      passwordConfirmation: 'forward',
      number: '+447283493883'
    },
    {
      username: 'Seismology',
      email: 'caronni@icloud.com',
      password: 'therapist',
      passwordConfirmation: 'therapist',
      number: '+447283493883'
    },
    {
      username: 'Digitiform',
      email: 'marnanel@sbcglobal.net',
      password: 'crossing4',
      passwordConfirmation: 'crossing4',
      number: '+447283493883'
    },
    {
      username: 'SpidercGasbag',
      email: 'adamk@comcast.net',
      password: 'remedy1',
      passwordConfirmation: 'remedy1',
      number: '+447283493883'
    },
    {
      username: 'Rickshaw',
      email: 'crowl@mac.com',
      password: 'voyagee2',
      passwordConfirmation: 'voyagee2',
      number: '+447283493883'
    },
    {
      username: 'Ensorcell',
      email: 'offthelip@live.com',
      password: 'brother',
      passwordConfirmation: 'brother',
      number: '+447283493883'
    },
    {
      username: 'Oxymoron',
      email: 'jpflip@optonline.net',
      password: 'cruel',
      passwordConfirmation: 'cruel',
      number: '+447283493883'
    },
    {
      username: 'LolkimEcru',
      email: 'facet@me.com',
      password: 'buy',
      passwordConfirmation: 'buy',
      number: '+447283493883'
    },
    {
      username: 'Joementum',
      email: 'lbaxter@comcast.net',
      password: 'passion',
      passwordConfirmation: 'passion',
      number: '+447283493883'
    },
    {
      username: 'Jerkinraft4',
      email: 'jlbaumga@yahoo.com',
      password: 'giant',
      passwordConfirmation: 'giant',
      number: '+447283493883'
    },
    {
      username: 'Ornerybin808',
      email: 'jusdisgi@me.com',
      password: '8dMaUAX7',
      passwordConfirmation: '8dMaUAX7',
      number: '+447283493883'
    },
    {
      username: 'Buckaroo',
      email: 'rfoley@mac.com',
      password: 'gtXYuAyy',
      passwordConfirmation: 'gtXYuAyy',
      number: '+447283493883'
    },
    {
      username: 'Interrobang',
      email: 'scato@yahoo.ca',
      password: 'AQEgHCCj',
      passwordConfirmation: 'AQEgHCCj',
      number: '+447283493883'
    },
    {
      username: 'Jumbofxgl',
      email: 'kourai@outlook.com',
      password: '4frfqh98',
      passwordConfirmation: '4frfqh98',
      number: '+447283493883'
    },
    {
      username: 'Fizzper7891',
      email: 'nasor@verizon.net',
      password: 'SjdJqPpb',
      passwordConfirmation: 'SjdJqPpb',
      number: '+447283493883'
    },
    {
      username: 'Shneeeminftp',
      email: 'drhyde@optonline.net',
      password: 'mbXK2qNK',
      passwordConfirmation: 'mbXK2qNK',
      number: '+447283493883'
    },
    {
      username: 'Piddling',
      email: 'lamprecht@yahoo.com',
      password: 'MXF7BFya',
      passwordConfirmation: 'MXF7BFya',
      number: '+447283493883'
    },
    {
      username: 'Ulotrichous',
      email: 'mcrawfor@icloud.com',
      password: 'JDPLReES',
      passwordConfirmation: 'JDPLReES',
      number: '+447283493883'
    },
    {
      username: 'BilietBumf',
      email: 'greear@comcast.net',
      password: 'U5mXRq5M',
      passwordConfirmation: 'U5mXRq5M',
      number: '+447283493883'
    },
    {
      username: 'KillasSalve',
      email: 'nelson@msn.com',
      password: 'YGnHa7fB',
      passwordConfirmation: 'YGnHa7fB',
      number: '+447283493883'
    },
    {
      username: 'Telekinesis',
      email: 'ghost@mac.com',
      password: '6e3WgDPt',
      passwordConfirmation: '6e3WgDPt',
      number: '+447283493883'
    },
    {
      username: 'Blubber',
      email: 'brickbat@msn.com',
      password: 'vW4BW2Eu',
      passwordConfirmation: 'vW4BW2Eu',
      number: '+447283493883'
    },
    {
      username: 'Orgulous',
      email: 'aracne@yahoo.com',
      password: 'aFYMG35E',
      passwordConfirmation: 'aFYMG35E',
      number: '+447283493883'
    },
    {
      username: 'Luminous',
      email: 'sinclair@me.com',
      password: 'ThFYc54T',
      passwordConfirmation: 'ThFYc54T',
      number: '+447283493883'
    },
    {
      username: 'Diphysitism',
      email: 'kevinm@verizon.net',
      password: '8t2LbPW7',
      passwordConfirmation: '8t2LbPW7',
      number: '+447283493883'
    },
    {
      username: 'Kippage',
      email: 'rfoley@mac.com',
      password: 'dazyAkKz',
      passwordConfirmation: 'dazyAkKz',
      number: '+447283493883'
    },
    {
      username: 'Luminous',
      email: 'jwarren@optonline.net',
      password: '7Ec6qTWe',
      passwordConfirmation: '7Ec6qTWe',
      number: '+447283493883'
    },
    {
      username: 'Pareunia',
      email: 'birddog@comcast.net',
      password: 'tuDYYQur',
      passwordConfirmation: 'tuDYYQur',
      number: '+447283493883'
    },
    {
      username: 'Quinnat',
      email: 'squirrel@gmail.com',
      password: 'Qc3LdMf6',
      passwordConfirmation: 'Qc3LdMf6',
      number: '+447283493883'
    },
    {
      username: 'Ammophilous',
      email: 'ajohnson@aol.com',
      password: '49SrJMsA',
      passwordConfirmation: '49SrJMsA',
      number: '+447283493883'
    },
    {
      username: 'Ophidian',
      email: 'willg@yahoo.com',
      password: 'FedWdzgB',
      passwordConfirmation: 'FedWdzgB',
      number: '+447283493883'
    },
    {
      username: 'JappaapPomade',
      email: 'gward@mac.com',
      password: 'dBAntcD9',
      passwordConfirmation: 'dBAntcD9',
      number: '+447283493883'
    },
    {
      username: 'Accidie',
      email: 'geekgrl@yahoo.com',
      password: 'spX&7Q',
      passwordConfirmation: 'spX&7Q',
      number: '+447283493883'
    },
    {
      username: 'Catarolysis',
      email: 'seanq@sbcglobal.net',
      password: 'smgwgpgquet',
      passwordConfirmation: 'smgwgpgquet',
      number: '+447283493883'
    },
    {
      username: 'claudius_likes_animals',
      email: 'MathewMc@gmail.com',
      password: 'azshdeedxgp',
      passwordConfirmation: 'azshdeedxgp',
      number: '+447283493883'
    }
  ])
    .then(user => {
      return Space.create([
        {
          // 143
        // mini-map on profile site?, people only give first part  of address? google street view??
          location: '83 Upper St, London, N1 0NU',
          type: 'Sheletered drive-way',
          suitability: 'Motorcyle, Car, Bicycle, Van',
          images: ['https://static.yourparkingspace.co.uk/large/3584d3ecb8f045f2c538d3886b663e7b.jpeg', 'https://static.yourparkingspace.co.uk/large/8813c357bbcdbe36010e350d7ffadd2d.jpeg', 'https://static.yourparkingspace.co.uk/large/e7ae6513832863ccf5838aa72d053612.jpeg'],
          availability: true,
          rating: 4.6,
          description: 'One space located on Upper Street in London. The space is close to Central London tube stations allowing easy access to most places. The space is suitable for vehicles up to the size of a Van. On-site there is Electric Charging and Disabled Access. The space is available 24 hours on all days. The parking is available alongside our street (Upper Street) and many neighbouring areas (Highbury & Islington) and there is usually plenty of parking space available.',
          comments: { text: ['Perfect parking spot in a good location, highly recommend', 'Desperatly needed a parking spot, found this one and booked it in less than 10 seconds.', 'Nice driveway, felt like I knew my car will be safe when I first saw it', 'Bit of a tight squeeze, but well sheltered']},
          price: 4,
          electricChargingPoint: false,
          owner: user[0]
        },
        {
          location: '47, FLAT 6, Hollycroft Avenue, Camden Town, Greater London, London, NW3 7QJ',
          type: 'Roadside parking',
          suitability: 'Car, Motorcyle, Small van',
          images: ['https://static.yourparkingspace.co.uk/large/676c3655480fdaf8df01c82972271c2e.png', 'https://static.yourparkingspace.co.uk/large/f9bddbc00a7aaf64b68c9ca961e177fe.png'],
          availability: true,
          rating: 4.3,
          description: 'Parking spaces located on Shaping Change Ltd in Camden London. The spaces are close to St Bedes Hall. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space and Security Lighting. The spaces are available 24 hours on all days.',
          comments: { text: ['Had a problem with fitting my car into this small place, surrounding houses make it hard to fit your car in to.', 'good price for where its located, found it hard to reverse park into but happy with what i paid for']},
          price: 3,
          electricChargingPoint: false,
          owner: user[1]
        },
        {
          location: '54 Islington Park St, London, N1 1PX',
          type: 'Underground parking',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/e0810ece91b52a6ace3c701e0943d1a2.png', 'https://static.yourparkingspace.co.uk/large/b085ebf836699f666c89cb5018cf4621.png', 'https://static.yourparkingspace.co.uk/large/30690419b7308bdc2f7a5fc973e9d183.png'],
          availability: true,
          rating: 4.8,
          description: 'Parking spaces located on Islington Park st in London. The spaces are close to Hidden London (TFL Down Street Churchills secret station), Frost & Reed Ltd and Curzon Mayfair. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Security Guards and Underground Parking. The spaces are available 6AM-7PM on weekdays. Secure underground car park located in Mayfair, excellent central spaces available to rent both daily and monthly. Located a 5 minute walk from Hyde Park and Hyde Park corner station so perfect parking for all nearby attractions. This car park is not open Weekends or Bank Holidays. Overnight parking is not permitted. Height Restriction: 2.50m',
          comments: { text: ['Perfect safe parking spot, in a good location, highly recommend', 'Could rest and relax knowing my car was parked in a locked garage', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 8,
          electricChargingPoint: false,
          owner: user[1]
        },
        {
          location: '207 Upper Street, Islington, LONDON, N1 1RL',
          type: 'Underground parking',
          suitability: 'Motorcyle, Hatchback, Car, 4X4, small van',
          images: ['https://static.yourparkingspace.co.uk/large/131618fd5ea7047b7a9ea02acd1ca4e9.jpeg', 'https://static.yourparkingspace.co.uk/large/69bef4309e5874edb751f49e520b8864.png'],
          availability: false,
          rating: 3.9,
          description: 'Parking available at a central London basement car park located on Upper Street in Mayfair. Located right by the BT Tower, and a 5 minute walk from Great Portland Street tube station, 8 minute walk to Oxford Circus, 5 minute walk to University College London. The car park is located inside the Congestion Charge Zone. If you drive a van please be aware there is a height restriction of 1.90m in place at this car park. When booking monthly you will be contacted to provide your postal address as a permit will need to be sent to you. Please note, it takes CitiPark 2 full working days to process a monthly booking request, so your start date may need to be adjusted to accommodate this. Any monthly bookings received after 3pm Friday, will not be processed until the following Monday, and therefore you start date will need to be adjusted to ensure you receive the permit',
          comments: { text: ['Came back to my vehicle after leaving it there for the weekend, my wingmirror was missing, didnt get any compensation, do not use', 'Dark and dingy underground parking, not the most secure spot']},
          price: 2,
          electricChargingPoint: false,
          owner: user[2]
        },
        {
          location: 'Holland Street, London W8',
          type: 'Sheletered driveway',
          suitability: 'Motorcyle, Hatchback, Estate, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/ed9bdf7a4981bfa7c5e49b0d61b2b997.png'],
          availability: true,
          rating: 4.0,
          description: 'Parking available on driveway, located within a 25 minute walk to Kings Cross Station (ideal for Eurostar trips) and a 20 minute walk to the Emirates. The space can be accessed 24/7. Suitable for vehicles up to the size of a Large - (4x4). Important notice: The full address of the parking space/garage/car park will be provided following a successful booking',
          comments: { text: ['Quite far away from where we wanted to be but not a bad spot, for a good price.', 'Had no problems parking here, highly recommend']},
          price: 9,
          electricChargingPoint: false,
          owner: user[3]
        },
        {
          location: 'Marylebone Road, London NW1',
          type: 'Roadside parking',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/198dae89307d1cc86e0f31b6bb53f465.jpeg', 'https://static.yourparkingspace.co.uk/large/8313bf03771953cce4924910772b652f.jpeg'],
          availability: true,
          rating: 4.6,
          description: 'Parking spaces located on Marylebone Road in London . The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, CCTV and Security Guards. The spaces are available 6:30AM-7PM on weekdays. Road-side park available in Farringdon. Great location, walking distance to City University London. Close to Sadlers Wells Theatre. IMPORTANT: Only open Monday to Friday from 6.30am to 7pm - you cannot enter/exit the car park outside of these hours.',
          comments: { text: ['Luxury location.', 'Slightly concerned leaving my car on the side of the road for the weekend, but very nice area', 'No problems parking here, worked out well in the end']},
          price: 11,
          electricChargingPoint: false,
          owner: user[4]
        },
        {
          location: 'Seymour Place, London W1H',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/e0810ece91b52a6ace3c701e0943d1a2.png', 'https://static.yourparkingspace.co.uk/large/b085ebf836699f666c89cb5018cf4621.png', 'https://static.yourparkingspace.co.uk/large/30690419b7308bdc2f7a5fc973e9d183.png'],
          availability: true,
          rating: 4.8,
          description: 'Parking spaces located on Ebury Bridge Road in London . The spaces are close to Peace and Colour Gallery, 88-GALLERY and Movie Starr. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking.The spaces are available 24 hours on all days. Only vehicles up to the size of a 4x4 are permitted',
          comments: { text: ['Perfect safe parking spot, in a good location, highly recommend', 'Could rest and relax knowing my car was parked in a locked garage', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 8,
          electricChargingPoint: true,
          owner: user[5]
        },
        {
          location: 'Fursecroft, George Street, Marble Arch, London W1H',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/c8e5e3fd5f6252f4602ef60fc6aa9f0d.jpeg, https://static.yourparkingspace.co.uk/large/6beb1e0f8d568bc4fa8129c7d2f2dae3.jpeg'],
          availability: true,
          rating: 4.9,
          description: 'Parking spaces located on George Street in London . The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, CCTV, Security Lighting and Security Guards. The spaces are available 24 hours on all days. Secure car park located in the heart of central London. Situated just off Oxford Street this car park is perfect for anyone shopping or visiting the nearby attractions, including Hyde Park. Spaces available for both daily and monthly bookings. Covered parking, open 24/7, with CCTV access. If you\'\re driving a van please be aware that there is a height restriction of 1.98m. The car park is located inside the Congestion Charge Zone.',
          comments: { text: ['Easy to find and fairly near to where i needed to get to. Lots of good sized spaces when i arrived at 0745. i would recommend pre-booking and will be back again next week', 'best car park ever best value wide spaces secure staff very attentive could be cleaner but then again people could be less of pigs', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 12,
          electricChargingPoint: false,
          owner: user[6]
        },
        {
          location: 'Abbey Road, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, 4X4, Estate',
          images: ['https://static.yourparkingspace.co.uk/large/e7d09757461a0b11f2ec6610f35800f7.png'],
          availability: true,
          rating: 4.2,
          description: 'One allocated space located on Abbey Road in London. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, CCTV, Security Lighting and Underground Parking. The space is available 24 hours on all days. The space is accessed via a security fob which will be provided to you on arrival.',
          comments: { text: ['Possibly the cheapest parking for lengths up to 4-5hrs. Very secure underground parking and easy to set up contact with conceirge.', 'CAmazing spot, very private!', 'Very private, secure and good price']},
          price: 10,
          electricChargingPoint: false,
          owner: user[7]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/f2f0b786a927118614ad1c92fbe54929.png', 'https://static.yourparkingspace.co.uk/large/2373d0eadd01367eda7fc25de1673e6a.png', 'https://static.yourparkingspace.co.uk/large/bf01bd1b495d989a4bb1c50d9c93297e.png'],
          availability: true,
          rating: 4.8,
          description: 'Parking available at a central London basement car park located on Clipstone Street in Clipstone Mews. Located right by the BT Tower, and a 5 minute walk from Great Portland Street tube station, 8 minute walk to Oxford Circus, 5 minute walk to University College London. The car park is located inside the Congestion Charge Zone. If you drive a van please be aware there is a height restriction of 1.90m in place at this car park.',
          comments: { text: ['Was a bit pricey for just someones parking spot in front of their house', 'Very handy for the Den - providing you are willing to take a chance! Spoke to the owner the night before arriving and was advised parking would be available in the street (private road -residents only) outside the house and someone would be in when we were due to arrive if any problems. Arrived to find three cars parked in the street outside the house and the only space available was to park in front of the first car (the owner\'s I think), over the corner with Varcoe Road, with the front of the vehicle in Varcoe Road. House in darkness so as we had to get to the match took a chance and left the cab there. Will not use this space again.']},
          price: 8.9,
          electricChargingPoint: true,
          owner: user[8]
        },
        {
          location: 'Bethnal Green, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/d9f83477b78423b7dbb483e1750c81b1.jpeg'],
          availability: true,
          rating: 4,
          description: 'Parking spaces located on Stafford Cripps House in London. The spaces are close to Roman Road, Stairway to Heaven, Bethnal Green Memorial and Bethnal Green. The spaces are suitable for vehicles up to the size of a Van. On-site there is Disabled Access.  The spaces are available 24 hours on all days.',
          comments: { text: []},
          price: 8.5,
          electricChargingPoint: false,
          owner: user[9]
        },
        {
          location: 'Canada Water, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/71e4a922c561ec140774a3168a0fa69f.jpeg'],
          availability: true,
          rating: 4.3,
          description: 'One allocated space located on Redriff Rd in Canada Water Jubilee Line . The space is suitable for vehicles up to the size of a Van. On-site there is Allocated Space and Security Lighting.',
          comments: { text: ['Good, clear instructions, good spot, good price', 'very easy to find and very close to canada water jubilee line']},
          price: 7.50,
          electricCh4rgingPoint: false,
          owner: user[10]
        },
        {
          location: 'Stepney Green, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/3ad12946ba9bc6a16145301cb56e2d6b.jpeg', 'https://static.yourparkingspace.co.uk/large/d77db3db216442fa59ef7aceb405fcde.jpeg'],
          availability: true,
          rating: 4,
          description: 'One space located on Massingham Street in London. The space is close to Stepney Green Station, The Essential School of Painting and Cinema Italia UK. The space is suitable for vehicles up to the size of a Minibus.',
          comments: { text: ['Great place to park, safe, owner was very friendly and would recommend this space']},
          price: 8,
          electricChargingPoint: false,
          owner: user[11]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/c62fee9fdcec06cc2073a7786c5b328d.jpeg', 'https://static.yourparkingspace.co.uk/large/a68efed783d855ffc1bb66d716b45527.jpeg'],
          availability: true,
          rating: 3.8,
          description: 'One allocated space located on Brunswick Quay in London. The space is suitable for vehicles up to the size of a Small - (2 Door). On-site there is Security Lighting and Covered Parking. The space is available 24 hours on all days.',
          comments: { text: ['Easy to find, large enough for a hatchback with oarking sensors to go bumper to wall and not overhanging.', 'Good location, polite host, very safe area!']},
          price: 9.35,
          electricChargingPoint: false,
          owner: user[8]
        },
        {
          location: 'Soho, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/0b45cff975df7b36fe961ec6bcd9dc59.jpeg', 'https://static.yourparkingspace.co.uk/large/8abf86bd2b31b611ff7b6e83fd41b2c4.jpeg'],
          availability: true,
          rating: 4.6,
          description: 'Secure underground parking at the heart of Soho. Minutes walk from Oxford street, Regent’s Street and Carnaby Street. 24 hour access with cctv security and card key entry. Available only for long term let, for more information please email.',
          comments: { text: ['Always great, easy to use, friendly staff. I use this car park regularly, because of how effortless it is', 'Very convenient location. Easy to find and park. Checkout was immediate with a very friendly operator. Highly recommended!!!', 'Easy to park and good rates!']},
          price: 10.50,
          electricChargingPoint: true,
          owner: user[12]
        },
        {
          location: 'Vauxhall, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/c3c4ab4398681f506554b00c67ae6e95.png', 'https://static.yourparkingspace.co.uk/large/aa9ed700b784bb4749763c9c3b49b85f.png'],
          availability: true,
          rating: 4.1,
          description: 'One space located on Rosewood House in London. The space is close to Vauxhall, Vauxhall Station and Art First. The space is suitable for vehicles up to the size of a Medium - (4 Door). On-site there is Covered Parking and Underground Parking.',
          comments: { text: ['I would recommend highly. So easy to book, park and enjoy London knowing your car is secure and safe in the underground car park! Will use this again!', 'Very easy to find space, many spaces available at a peak time. Easy to contact provider and accessible entrances and lifts with a pram']},
          price: 10.65,
          electricChargingPoint: true,
          owner: user[13]
        },
        {
          location: 'Vauxhall, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/8abf0c11b9ab1460c1cbac88e0fe54d9.jpeg', 'https://static.yourparkingspace.co.uk/large/9cb97cfff125640792758067cf0a2f55.jpeg'],
          availability: true,
          rating: 4.5,
          description: 'PSecure underground parking located in Pimlico. Right next to the Vauxhall bridge and also Pimlico tube station. 24 hour access with cctv security, key card entry. For more information please email. Available on a long term let minimum of 2 months.',
          comments: { text: ['very difficult to find but the parking was A Ok.', 'Safety and..just the best']},
          price: 8.9,
          electricChargingPoint: true,
          owner: user[14]
        },
        {
          location: 'Essex Road, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/1aa47845d8b2bf321d878a10e36ff7ab.png', 'https://static.yourparkingspace.co.uk/large/118ddbe0709f6cd3ece3149735641e38.png'],
          availability: true,
          rating: 4.1,
          description: 'Secure underground parking located in Essex Road.  24 hour access with CCTV security and key card entry.  For more information please send an enquiry. Minimum of 3 months rent.',
          comments: { text: ['Very cramped', 'Great location and a fair price. But when we arrived the attendant said it was full, despite our having booked. The attendant directed is to park where we would clearly obstruct a fire door, even though there was a free space right next to his hut ("You can\'t park there, company policy"). In the end one of the car rental spaces came free and we parked. (When I picked up my car later, I saw someone was blocking the fire doors.)']},
          price: 7.40,
          electricChargingPoint: true,
          owner: user[15]
        },
        {
          location: 'Canonbury Street, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/caebc1cfe3923d5ce3343abf4df688cf.jpeg', 'https://static.yourparkingspace.co.uk/large/4fb36a96eb3f674606e5e7394cf152f8.jpeg'],
          availability: true,
          rating: 4.8,
          description: 'One allocated space located on Canonbury St in London. The space is less than one mile walking distance from Essex Road, The Place and Estorick Collection of Modern Italian Art. The space is suitable for vehicles up to the size of a Medium - (4 Door). On-site there is Covered Parking, Allocated Space, CCTV and Security Lighting. The space is available 24 hours on all days. The space is accessed via a security fob which will be provided to you on arrival.',
          comments: { text: ['Easy to find. Brilliant idea would defo use again.']},
          price: 8.67,
          electricChargingPoint: false,
          owner: user[16]
        },
        {
          location: 'Westminster, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/36535e0b36274cb0b1276c868e77cbd6.jpeg', 'https://static.yourparkingspace.co.uk/large/c83df3afdb6700407a0e35f22a8d89c2.jpeg'],
          availability: true,
          rating: 4.8,
          description: 'One allocated space located on Palace Place in Westminster, London. The space is less than one mile walking distance from The Queen\'s Gallery, Buckingham Palace, The Queen\'s Gallery, Buckingham Palace and Victoria Station. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, Allocated Space, CCTV and Security Lighting.',
          comments: { text: ['First class throughout - easy to book and great value for money given London prices, helpful customer service, easy communications with very helpful space owner. Location is fantastic just behind the Rubens Hotel and in a quiet street. Thereâs a snazzy car lift to take you up to the parking lot, for which you get a key fob from the very friendly and helpful concierge of the block, and the security is excellent. The space itself may take a bit of manoeuvring and patience as its right up in the corner, but I had an SUV and the space next to it was a large Range Rover and I didnât have any problems. It was a godsend for a few weeks in London. Highly recommended.', 'Great parking location in a great central London location', 'Never seen parking like this before' ]},
          price: 13.50,
          electricChargingPoint: true,
          owner: user[17]
        },
        {
          location: 'Trundleys Road, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/906df719ec65a5914592a03867edee5d.jpeg', 'https://static.yourparkingspace.co.uk/large/84328d9b3d5d3c35e526d4eb6b100ddd.jpeg'],
          availability: true,
          rating: 3.9,
          description: 'One space located on Trundleys Road in London. The space is close to the Agency, The New Den and Millwall F C Museum. The space is suitable for vehicles up to the size of a Large - (4x4).',
          comments: { text: ['Easy to navigate and very convenient. Recommended']},
          price: 8.75,
          electricChargingPoint: false,
          owner: user[18]
        },
        {
          location: 'Gillingham St, London NW8',
          type: 'Underground Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/bf22665c7e630db7cd5ff80c9ddbc818.png', 'https://static.yourparkingspace.co.uk/large/30cd13c684d2ab81b14fbeb87f4f941a.jpeg'],
          availability: true,
          rating: 4.1,
          description: 'Parking spaces located on Gillingham Street in London. The spaces are suitable for vehicles up to the size of a Van. On-site there is Covered Parking, Allocated Space, CCTV, Security Guards and Disabled Access. The spaces are available 24 hours on all days. The spaces are accessed via a security fob which will be provided to you on arrival.',
          comments: { text: ['Really good parking facility. Price was reasonable. Would use again.']},
          price: 9.20,
          electricChargingPoint: false,
          owner: user[19]
        },
        {
          location: 'Riverside, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/79896439e7b415c21ff128aaa450a4b1.png', 'https://static.yourparkingspace.co.uk/large/87088001db6e30983a9b620498738e4d.png'],
          availability: true,
          rating: 4.2,
          description: 'Parking spaces located on Canary Riverside Car Park in London. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, Security Lighting, Security Guards and Underground Parking.',
          comments: { text: ['good service but too expensive 18 pounds for 8 hours.']},
          price: 10.10,
          electricChargingPoint: true,
          owner: user[20]
        },
        {
          location: 'Brick St, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/3fcd27babff8db37c04780e5a222afbb.jpeg', 'https://static.yourparkingspace.co.uk/large/d2a409d69ceaab0dfba4e56c4a9cb2b6.jpeg', 'https://static.yourparkingspace.co.uk/large/bf01bd1b495d989a4bb1c50d9c93297e.png'],
          availability: true,
          rating: 4.6,
          description: 'Parking spaces located on Brick Street in London. The spaces are close to Hidden London (TFL Down Street Churchill\'s secret station), Frost & Reed Ltd and Curzon Mayfair. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Security Guards and Underground Parking.',
          comments: { text: ['Easy to find. Very helpful chap on duty. Well placed for the West End.', 'Good for Transit van 2.5 m headlight Only small but attendant is hpful with parking I\'ll use it again Price is good']},
          price: 12.10,
          electricChargingPoint: true,
          owner: user[21]
        },
        {
          location: 'Shad Thames, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/ab9d95e28b6f9c58ba75d8146fdc142d.jpeg', 'https://static.yourparkingspace.co.uk/large/2ca9d6d65746825d40659604bd65867a.jpeg'],
          availability: false,
          rating: 4.2,
          description: 'One allocated space located on , Shad Thames in London. The space is close to Tower Bridge Exhibition Offices, Anise Gallery and St Katharine Docks Practice. The space is suitable for vehicles up to the size of a Medium - (4 Door). On-site there is Allocated Space, CCTV, Security Lighting, Security Guards, Underground Parking and Covered Parking.',
          comments: { text: ['Great experience. There is a 24h desk at the residence to pick up and give back the fob. Carpark is safe and new. Everything went very well.']},
          price: 4.5,
          electricChargingPoint: true,
          owner: user[22]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle',
          images: ['https://static.yourparkingspace.co.uk/large/6e367aa03deb333a6e29a56a28be0131.jpeg'],
          availability: true,
          rating: 4.2,
          description: 'Motorcycle Space available for bookings of one month or longer. Secure, shuttered basement car park. Space not suitable for small cars.',
          comments: { text: ['Prepaid on line and all was well. Needed to extend time by half hour so did this on line and paid the extra required and received reciept and verification of extended time. On exiting 10 minutes before expiry time the ticket machine asked for £6 extra which I reluctantly paid as I was in a hurry YPS EDIT: Funds refunded', 'For parking in central London, I thought this was good value. The information on entry and exit procedure worked well. however it is a bit dark and dingy, compared to the most modern places', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 8,
          electricChargingPoint: false,
          owner: user[23]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Sheltered drive-way',
          suitability: 'Motorcyle, Hatchback, Car, 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/0a39a688fcd7b50651b266f96d1b42c9.jpeg', 'https://static.yourparkingspace.co.uk/large/139ed5efde61c3d52983e329e43d5020.jpeg'],
          availability: true,
          rating: 4.3,
          description: 'This parking space is located in a gated car park. Access is via a remote control which we will provide upon arrival. Excellent location just outside the boundary of the congestion charge zone area - no need to pay if you are commuting to London. Just 10 mins walk to London Bridge Station otherwise excellent bus routes just outside the front heading into the city.',
          comments: { text: ['Very good parking', 'Quite easy to find. Safe secure central London location Friendly parking attendant I would use this car park again Highly recommended']},
          price: 8.45,
          electricChargingPoint: false,
          owner: user[24]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/5c9225475d4271392a135e395819c108.png', 'https://static.yourparkingspace.co.uk/large/f9863d3d498096f4ebf77822fdaad282.png'],
          availability: true,
          rating: 4.7,
          description: 'Parking spaces located on Mill House in London. The spaces are close to Bermondsey Gallery, St Saviours Dock and Bermondsey. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, CCTV, Security Lighting and Underground Parking.',
          comments: { text: ['Great location for Leicester Square, Soho, China Town etc. I JUST squeezed into a space in my Passat estate car but be warned the entrance is extremely tight for large vehicles as is the parking. The owner does make this clear on the advert but I took a chance and managed to park fine.']},
          price: 10.50,
          electricChargingPoint: true,
          owner: user[25]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://uploads.justpark.com/media/uploaded/listing-photos/5409841dcd462-normal.jpg', 'https://uploads.justpark.com/media/uploaded/listing-photos/54098434b2a47-normal.jpg'],
          availability: true,
          rating: 4.5,
          description: '2 exclusive parking spaces located just behind Charing Cross Station, just for JustPark customers.24/7 gated access (code provided in post-booking instructions). Moments from Charing Cross Station and The Strand 5 minute walk to Trafalgar Square and The National Gallery 5 minute walk to Embankment.',
          comments: { text: ['Had to go around a couple times as didnt see Bootsas described because its behind you as you enter Corner House Street. You literally have to drive straight ahead into an area that is the back of the shops with shutters.']},
          price: 12.50,
          electricChargingPoint: false,
          owner: user[26]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://uploads.justpark.com/cdn/media/uploaded/listing-photos/5b76a69e5e087-normal.jpg'],
          availability: true,
          rating: 4.2,
          description: 'Secure underground parking just off Tottenham Court Road.Height restriction 2m - not suitable for vans and trucks You may enter and exit as many times as needed over the duration of your booking. Please note: this car park is within the London congestion charge zone.',
          comments: { text: ['Great little car park hidden out of the. Easy to find and great location.', 'Such a great price and location', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 7.45,
          electricChargingPoint: false,
          owner: user[13]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Sheltered  driveway',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://uploads.justpark.com/cdn/media/uploaded/listing-photos/583aee09b5076-normal.jpg'],
          availability: true,
          rating: 4.6,
          description: 'This parking space is wide and can also accommodate 4 x 4 vehicles. It is 3 mins to Lambeth North Tube station and 4 mins to Waterloo station. Buses to central London 2 mins away. Hassle free driveway in the front of a residential house, in a small close of houses very secure. Overall the transport links are excellent in knowledge that your car will be safe on a clean, well maintained driveway!',
          comments: { text: ['Ideal spot close to the hotel we were staying, easy to find will definitely park here again, thanks']},
          price: 5.40,
          electricChargingPoint: false,
          owner: user[14]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://www.yourparkingspace.co.uk/search?end_date=26-03-2019&end_time=11%3A30&lat=51.5078788&lng=-0.08773210000003928&location=London%20Bridge%2C%20London%2C%20UK&page=3&per_page=50&radius=10mi&rental=long&space_size=&spaces_available=1&start_date=26-03-2019&start_time=11%3A00&type=both', 'https://www.yourparkingspace.co.uk/search?end_date=26-03-2019&end_time=11%3A30&lat=51.5078788&lng=-0.08773210000003928&location=London%20Bridge%2C%20London%2C%20UK&page=3&per_page=50&radius=10mi&rental=long&space_size=&spaces_available=1&start_date=26-03-2019&start_time=11%3A00&type=both'],
          availability: true,
          rating: 4.83,
          description: 'Parking spaces available to rent on a monthly basis at the Barbican Centre. Located close to Barbican tube station and a short walk from Moorgate tube station and the Museum of London. The car park is covered, secure and has CCTV monitoring.',
          comments: { text: ['Perfect parking spot', 'For parking in central London, I thought this was good value. The information on entry and exit procedure worked well. however it is a bit dark and dingy, compared to the most modern places', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 7,
          electricChargingPoint: true,
          owner: user[15]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/3eab234063d6095ad9a516338144a3bb.jpeg', 'https://static.yourparkingspace.co.uk/large/a0e8a8316c442cdaf335eec3e130096b.jpeg'],
          availability: false,
          rating: 4.1,
          description: 'One allocated space located on Leroy Street in London. The space is close to Bermondsey Square, Tower Bridge and Maltby Street Market. The space is suitable for vehicles up to the size of a Van. On-site there is Allocated Space.',
          comments: { text: ['I would recommend highly. So easy to book, park and enjoy London knowing your car is secure and safe in the underground car park! Will use this again!']},
          price: 6.90,
          electricChargingPoint: false,
          owner: user[16]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://uploads.justpark.com/media/uploaded/listing-photos/56703d9e671c4-normal.jpg', 'hhttps://uploads.justpark.com/media/uploaded/listing-photos/56703d922e217-normal.jpg'],
          availability: true,
          rating: 4.4,
          description: 'Secure underground parking located at Charter House, Crown Court just round the corner to Covent Garden. Minutes walk from Covent Garden tube station and Royal Opera House. Suitable for a small car only 24 hour access with CCTV security and key card entry. Entrance from Drury Lane. AVAILABLE ON A LONG TERM LET MINIMUM OF 2 MONTHS.',
          comments: { text: ['Ideal spot close to the hotel we were staying, easy to find will definitely park here again, thanks']},
          price: 11,
          electricChargingPoint: false,
          owner: user[17]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://uploads.justpark.com/media/uploaded/listing-photos/56703de711438-normal.jpg', 'https://uploads.justpark.com/media/uploaded/listing-photos/56703dd859395-normal.jpg'],
          availability: true,
          rating: 4.8,
          description: ' A central underground car park, 2 minutes walk to covent garden.This is a valet service car park. Your car will be parked for you and you have to leave your car keys with the valet attendant. You will be given your keys back when you collect your vehicle after your booking.  24 hours car park with security and CCTV. Height restrictions in place (max height 1.98m) Please pay attention to overstay reminders. If you overstay in this car park a fine will be issued on the spot by the valet attendants.',
          comments: { text: []},
          price: 7.20,
          electricChargingPoint: false,
          owner: user[18]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://uploads.justpark.com/media/uploaded/listing-photos/51af1fb1c0e9d-normal.jpg'],
          availability: false,
          rating: 4.7,
          description: 'Secure underground parking located in Holborn at Catton Street.24 hour access with CCTV security and key entry. Minutes walk from Holborn tube station. For further information please email.',
          comments: { text: ['Excellent service. Easy to use alesys get parking required', 'Excellent communication, very clear and precise instructions. This is my first time using JustPark and it will be my go to parking from now on. I highly recommend it.']},
          price: 11.50,
          electricChargingPoint: false,
          owner: user[19]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://uploads.justpark.com/media/uploaded/listing-photos/52fb7c561fec0-normal.jpg', 'https://uploads.justpark.com/media/uploaded/listing-photos/52fb78f1912df-normal.jpg'],
          availability: true,
          rating: 4.2,
          description: 'This is a gated, secure car park space in SE1 just outside the congestion charge zone (Tower Bridge/Bermondsey Sq) with key-fob. Available 24/7. You will need to display my parking permit at all times when the car is at the car park.',
          comments: { text: ['Takes about 10-15 mins to have your car collected or returned.', 'excellent facility especially for nearby theatres and restaurants , it was a very busy time of year so there was a slight delay and some confusion but friendly staff made up for any let down']},
          price: 9.0,
          electricChargingPoint: false,
          owner: user[20]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Secure car park',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/3ab8285ba37055e0b036820e922dca38.png'],
          availability: true,
          rating: 4.3,
          description: 'Parking spaces located on Lambs Passage in London. The spaces are close to Last wood blocks in London, Image Press Gallery and Barbican Cinema 1. The spaces are suitable for vehicles up to the size of a Van. The spaces are available 24 hours on all days.',
          comments: { text: ['excellent service', 'Excellent parking It\'s very difficult to find a place to park a large van in London All we had to do was keys to concierge on arrival and they parked it for us On return our van was waiting for us by entrance of car park']},
          price: 8,
          electricChargingPoint: false,
          owner: user[21]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Gated car park',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/9ba0c444d9364b752bfb614518de7ae5.png', 'https://static.yourparkingspace.co.uk/large/0b7843c1f1dc2c8e2d90da9a93b2e1a4.png'],
          availability: true,
          rating: 4.1,
          description: 'Allocated parking bay in residential gated car park in SE1.. Access is through an electric gate operated by key fob. Located just off the New Kent Rd. Within a 10 minute walk of Elephant & Castle. This is outside the congestion charge zone. Available for rental on a monthly rolling contract.',
          comments: { text: ['Great location, no issues with parking. Good directions', 'Good and easy to use', 'No problems. Would do again...ideal']},
          price: 7.8,
          electricChargingPoint: false,
          owner: user[22]
        },
        {
          location: 'Clipstone Street, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://uploads.justpark.com/cdn/media/uploaded/listing-photos/5ab0dea7a37fe-normal.jpg'],
          availability: true,
          rating: 4.45,
          description: 'Parking available at a central London basement car park located on Clipstone Street in Clipstone Mews. Located right by the BT Tower, and a 5 minute walk from Great Portland Street tube station, 8 minute walk to Oxford Circus, 5 minute walk to University College London. The car park is located inside the Congestion Charge Zone. If you drive a van please be aware there is a height restriction of 1.90m in place at this car park.',
          comments: { text: ['Great location but tight entry. Glad I dont have a large car.', 'Great location for west end . Directions good and opening the gate from the app on your phone really cool. Spaces easy to find', 'Highly recommend']},
          price: 8.20,
          electricChargingPoint: false,
          owner: user[23]
        },
        {
          location: 'New Kent Road, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/e82029a2ec491654e58f16aca7babfa3.png', 'https://static.yourparkingspace.co.uk/large/6dc492dc4afa935177b8694df2ccc14d.png'],
          availability: true,
          rating: 3.7,
          description: 'Parking spaces located on New Kent Road in London. The spaces are close to Elephant and Castle Tube Station. The spaces are suitable for vehicles up to the size of a Large - (4x4). The spaces are available 8:30AM-6PM on weekdays and 8:30AM-5PM on Saturday.',
          comments: { text: ['It is a Kwik Fit car park. Some parking space were right behind the other. Make sure you do not get blocked if someone parks behind you and do not turn up before you. About half hour an walk to London Eye. You cannot be late as the gate will be locked at 6pm. Recommended.', 'easy to find but the postcode did try to take me to Rodney place which is around the corner, as you have to drive past kwik fit to get there it is still easy to find. no hassle value for money']},
          price: 7.50,
          electricChargingPoint: false,
          owner: user[24]
        },
        {
          location: 'Commercial Rd, London NW8',
          type: 'Car park',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/6e3588bafd2caf90e230bc3733a2aefe.jpeg', 'https://static.yourparkingspace.co.uk/large/07be673a8c90d597395ef661de4614a5.jpeg'],
          availability: true,
          rating: 4,
          description: 'Parking spaces located on Commercial Rd in London. The spaces are suitable for vehicles up to the size of a Van. On-site there is CCTV, Security Lighting, Security Guards, Underground Parking, Covered Parking and Allocated Space.',
          comments: { text: ['Very good location and good safety with gates.John was very helpful guy. I will use it again in future.thank you.', 'Very good. Nothing more!!']},
          price: 8.2,
          electricChargingPoint: false,
          owner: user[25]
        },
        {
          location: 'Aldgate, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/c8a37cf53e45acdfa4f93e41d26a5b21.png', 'https://static.yourparkingspace.co.uk/large/684222fb701f4e8f811b5567316a16b0.jpeg'],
          availability: true,
          rating: 4.2,
          description: 'One allocated space located on Commercial Road in ALDGATE . The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space. The space is available 24 hours on all days. The space is accessed via a security fob which will be provided to you on arrival.',
          comments: { text: ['Very central, easy to find and access. Felt a little nervous on my own coming back late as its underground and you have to go through a secluded staircase to access the car park as a pedestrian but I probably would use it again.', 'Everything about this experience from start to finish was fantastic it all went to plan so smoothly.']},
          price: 8,
          electricChargingPoint: false,
          owner: user[26]
        },
        {
          location: 'Wapping, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/a31b1432e9f4d1a1b220a121c9c840c8.png', 'https://static.yourparkingspace.co.uk/large/0a60767da45c1563b28d6a0b94e0edcf.png'],
          availability: true,
          rating: 3.9,
          description: 'Secure Underground Parking available on Wapping High Street for rentals lasting a minimum of one month. The location is ideal for anyone looking to park within a 10 minutes walk from Tower Hill tube, DLR & Fenchurch Street mainline stations. Space available with 24/7 access. Please note that the space is unsuitable for large 4x4 cars.',
          comments: { text: ['A bit small for bigger vehicles', 'Great little car park hidden out of the. Easy to find and great location.']},
          price: 7.8,
          electricChargingPoint: false,
          owner: user[27]
        },
        {
          location: 'Bermondsey, London NW8',
          type: 'Roadside',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/5a91cbf2850df714a841181e3b0aa9f4.jpeg'],
          availability: true,
          rating: 4.3,
          description: 'Parking space available in a secure electric-gated car park. 5 minutes walk from Bermondsey Underground station. Security lighting installed. Requires key fob for entry. Accessible 24 hours a day from Monday to Sunday and available to rent on a long-term monthly basis.',
          comments: { text: ['Very safe neighbouring']},
          price: 8,
          electricChargingPoint: false,
          owner: user[28]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/77a61a638fb5009aa22afee9cb16e465.jpeg', 'https://static.yourparkingspace.co.uk/large/7197865962bd25498c5ac2b019346b17.jpeg'],
          availability: true,
          rating: 4.8,
          description: 'Parking spaces located on The Red House in London. The spaces are close to St John Priory Church, Frameless Gallery and THAMES REACH AIRPORT LTD. The spaces are suitable for vehicles up to the size of a Medium - (4 Door). On-site there is Allocated Space and Covered Parking.',
          comments: { text: []},
          price: 7.3,
          electricChargingPoint: false,
          owner: user[29]
        },
        {
          location: 'Robin Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, 4X4, Van',
          images: ['https://static.yourparkingspace.co.uk/large/a914fb48dc43ea21e1c293beec24aa67.jpeg'],
          availability: true,
          rating: 4.3,
          description: 'One allocated space located on Robin Court in London. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space, Security Lighting and Disabled Access. The space is available 6AM until midnight on all days. The space is accessed via a pincode which will be provided to you after the booking. A parking space in small, private residential car park available for monthly or daily rentals.',
          comments: { text: ['This customer rated the space 5 stars but chose not to leave a comment.', 'Very easy to find, convenient, and instructions for the gate were easy to follow']},
          price: 10.45,
          electricChargingPoint: false,
          owner: user[30]
        },
        {
          location: 'Wapping Lane, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/a452a92e9ded7d90ac5df967e43a6719.jpeg', 'https://static.yourparkingspace.co.uk/large/4212462585b3b10a9731ad2742a1b34d.jpeg'],
          availability: true,
          rating: 4.8,
          description: 'One allocated space located on Wapping Lane in Wapping. The space is close to Paulina Berry creative art direction, Health Centre and Shadwell. The space is suitable for vehicles up to the size of a Small - (2 Door). On-site there is Allocated Space.',
          comments: { text: []},
          price: 6.20,
          electricChargingPoint: false,
          owner: user[31]
        },
        {
          location: 'Clipstone St, London NW8',
          type: 'Sheleted Carpark',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/4d2fe77341969a099ea0b8d9ef1275bf.jpeg', 'https://static.yourparkingspace.co.uk/large/ae3b034f7973b97f2f0687b4c83d33b6.jpeg'],
          availability: true,
          rating: 3.9,
          description: 'Parking available at a central London basement car park located on Clipstone Street in Clipstone Mews. Located right by the BT Tower, and a 5 minute walk from Great Portland Street tube station, 8 minute walk to Oxford Circus, 5 minute walk to University College London. The car park is located inside the Congestion Charge Zone. If you drive a van please be aware there is a height restriction of 1.90m in place at this car park.',
          comments: { text: ['Prepaid on line and all was well. Needed to extend time by half hour so did this on line and paid the extra required and received reciept and verification of extended time. On exiting 10 minutes before expiry time the ticket machine asked for £6 extra which I reluctantly paid as I was in a hurry YPS EDIT: Funds refunded', 'For parking in central London, I thought this was good value. The information on entry and exit procedure worked well. however it is a bit dark and dingy, compared to the most modern places', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 8.2,
          electricChargingPoint: false,
          owner: user[32]
        },
        {
          location: 'Elephant & Castle, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/f2f0b786a927118614ad1c92fbe54929.png', 'https://static.yourparkingspace.co.uk/large/2373d0eadd01367eda7fc25de1673e6a.png', 'https://static.yourparkingspace.co.uk/large/bf01bd1b495d989a4bb1c50d9c93297e.png'],
          availability: true,
          rating: 4.2,
          description: 'One allocated space located on , Amelia St in London. The space is less than one mile walking distance from Perspective, Elephant & Castle and Palace Superbowl. The space is suitable for vehicles up to the size of a Van. On-site there is Covered Parking, Allocated Space, CCTV, Security Lighting, Security Guards and Underground Parking.',
          comments: { text: ['I would like to star saying thank to melissa the owner of this car space this car par is the best and safe you can get in and out 24/7 is right opposite the police station i would definitely recommend this car park if you staying around that area thank again melissa for you help', 'I had a good experience. Space in a parking lot therefore owner necessary to point out exactly where therefore it would be better to have quicker response to texts.']},
          price: 8.9,
          electricChargingPoint: false,
          owner: user[33]
        },
        {
          location: 'Cheshire St, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/d31a4eb0065ed79120627c0263957a7f.jpeg', 'https://static.yourparkingspace.co.uk/large/bd5830f68cbc9452eca57e52fa5e1089.jpeg'],
          availability: true,
          rating: 3.7,
          description: 'One space located on Cheshire Street in London. The space is close to Urban Street Art Tours London, Golden Tree Gallery and Close-Up Cinema. The space is suitable for vehicles up to the size of a Motorcycles only. On-site there is Allocated Space.',
          comments: { text: ['Just what we needed - easy and reasonably priced parking to enjoy time on the the Southbank - especially great for London Eye']},
          price: 7.60,
          electricChargingPoint: false,
          owner: user[34]
        },
        {
          location: 'Waterloo, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/528fb5788209fd5f9a77cdb08535f70d.jpeg'],
          availability: true,
          rating: 4.2,
          description: 'One space located on Forum Magnum Square in Waterloo. The space is close to London Aquarium, Namco Funscape and Florence Nightingale Museum. The space is suitable for vehicles up to the size of a Medium - (4 Door). On-site there is Covered Parking, CCTV, Security Lighting and Underground Parking.',
          comments: { text: ['very difficult to find but the parking was A Ok.', 'Great location and a fair price. But when we arrived the attendant said it was full, despite our having booked. The attendant directed is to park where we would clearly obstruct a fire door, even though there was a free space right next to his hut (You cant park there, company policy). In the end one of the car rental spaces came free and we parked. When I picked up my car later, I saw someone was blocking the fire doors.']},
          price: 8,
          electricChargingPoint: false,
          owner: user[35]
        },
        {
          location: 'St John\'s St, London NW8',
          type: 'Roadside',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/5381f570cdb6e5629411b1dc47af74fd.jpeg'],
          availability: true,
          rating: 4.1,
          description: 'Underground car park on St John Street 10 minutes from Farringdon Station. CCTV available around the clock. Available on a monthly basis and accessible 24hr.',
          comments: { text: ['Excellent communication, very clear and precise instructions. This is my first time using JustPark and it will be my go to parking from now on. I highly recommend it.', 'Excellent service. Easy to use alesys get parking required']},
          price: 8.70,
          electricChargingPoint: false,
          owner: user[36]
        },
        {
          location: 'Clerkenwell, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/a68efed783d855ffc1bb66d716b45527.jpeg', 'https://static.yourparkingspace.co.uk/large/c62fee9fdcec06cc2073a7786c5b328d.jpeg'],
          availability: true,
          rating: 4.4,
          description: 'Underground secured parking on St. John Street in Clerkenwell. 3 separate spaces available. 2 side by side so could accomodate a larger vehicle. Fob access. Available indefinitely',
          comments: { text: ['Is was a fantastic smooth operation', 'Parked here as needed to drive into central London for an event, fantastic little car park hidden away, pretty easy to find but helpful if you know your way around the maze of one-way streets of central London.. Know the width of your car, mines a Ford Focus and as the shutter went up its a steep drop down so take it really slowly, once down the ramp, plenty of spaces, again the spaces are perfect but if in a large SUV take your time,otherwise good to know for next time,']},
          price: 10.6,
          electricChargingPoint: false,
          owner: user[37]
        },
        {
          location: 'Catton St, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://uploads.justpark.com/media/uploaded/listing-photos/51af1fa0603c3-normal.jpg', 'https://uploads.justpark.com/media/uploaded/listing-photos/51af1edf8b455-normal.jpg'],
          availability: true,
          rating: 3.8,
          description: 'Secure underground parking located in Holborn at Catton Street 24 hour access with CCTV security and key entry.Minutes walk from Holborn tube station. For further information please email.',
          comments: { text: ['Perfect parking for a hassle free trip into London. Lots of spaces available when I visited.']},
          price: 11.50,
          electricChargingPoint: false,
          owner: user[38]
        },
        {
          location: 'The Strand, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/87c8e4f3eb33e717e234e2abd58025e3.jpeg', 'https://static.yourparkingspace.co.uk/large/322ed77ae0e4323309a6d6ff5f249854.jpeg'],
          availability: true,
          rating: 4.7,
          description: 'Parking spaces located on The Strand in London. The spaces are close to Temple Tube Station, Covent Garden Tube Station, Kings College London and Royal Opera House. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, CCTV and Security Lighting.',
          comments: { text: ['Ideal spot close to the hotel we were staying, easy to find will definitely park here again, thanks', 'First time used this app - location ideal for us. Would not hesitate to use again. Many thanks!']},
          price: 11.70,
          electricChargingPoint: false,
          owner: user[39]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/8813c357bbcdbe36010e350d7ffadd2d.jpeg', 'https://static.yourparkingspace.co.uk/large/3584d3ecb8f045f2c538d3886b663e7b.jpeg'],
          availability: true,
          rating: 4.2,
          description: 'The only parking space in County Halls secure gated car park which does not have restrictive covenants on it and can therefore be let to non-residents. Located next to the London Eye and Waterloo Station. This 1st level parking space is in a superb position virtually directly ahead of the entry slipway to the car park. Suitable for a vehicle up to the size of a standard van. 24 hour access. The space can be accessed 24/7. Suitable for vehicles up to the size of a Van.',
          comments: { text: ['Easy to find and clean and tidy', 'Easy to park and close to public transport links']},
          price: 9.40,
          electricChargingPoint: true,
          owner: user[40]
        },
        {
          location: 'Hoffman Square, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/b21cd92c14b872c94ed7d716e04b2416.jpeg'],
          availability: true,
          rating: 4.7,
          description: 'One allocated space located on Hoffman Square in London. The space is close to Old Street, Shoreditch and Hoxton. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is CCTV, Security Lighting and Disabled Access. The space is available . The space is accessed via a pincode which will be provided to you after the booking. GATED & SECURE!',
          comments: { text: ['The entrance and the exit are the same ramp which is a aural so to can\'\t see the on coming cars until you nearly crash. The spaces themselves are good and lots of room']},
          price: 8,
          electricChargingPoint: false,
          owner: user[41]
        },
        {
          location: 'Morton Close, London NW8',
          type: 'Car park',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/6c8ccc543ae767a6aaade6006caea463.jpeg', 'https://static.yourparkingspace.co.uk/large/48382755645c475aff7ed982a39b2fbc.jpeg'],
          availability: true,
          rating: 4.5,
          description: 'One allocated space located on Morton Close in London. The space is close to 4th Floor Studios, Brayford Square Surgery and Shadwell. The space is suitable for vehicles up to the size of a Medium - (4 Door). On-site there is Disabled Access and Security Lighting.',
          comments: { text: ['Great location for our needs on that day, very friendly and helpful hotel staff and a great price!']},
          price: 8.20,
          electricChargingPoint: false,
          owner: user[42]
        },
        {
          location: 'Bevenden Street, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/d17528bdfd0a73d594b8d0fe7ced2b38.jpeg'],
          availability: true,
          rating: 4.7,
          description: 'One allocated space located on Bevenden Street in London . The space is close to Shoredige, ourscreen and Veysel Baba Art House. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space, Covered Parking and Security Lighting.',
          comments: { text: ['Good little parking space, very easy to find with picture exactly showing entrance and numbered space too. Would use again if I were in the area', 'This customer rated the space 5 stars but chose not to leave a comment']},
          price: 7.60,
          electricChargingPoint: false,
          owner: user[43]
        },
        {
          location: 'Shadwell, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/96cd23d47a4aacd3c8eaafc5dfe23690.jpeg'],
          availability: true,
          rating: 4.4,
          description: 'One allocated space located on Martinue Estate in LONDON. The space is close to Paulina Berry creative art direction, Brayford Square Surgery and Shadwell. The space is suitable for vehicles up to the size of a Minibus. On-site there is Allocated Space, CCTV and Covered Parking.',
          comments: { text: ['Easy. Friendly. Simple. Good value. What is not to like?', 'we couldn\'\t get out in the same direction we drove in because we had a large car and the street is too narrow to turn in']},
          price: 6.05,
          electricChargingPoint: false,
          owner: user[44]
        },
        {
          location: 'Holborn, London NW8',
          type: 'Underground Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/49ff4e3a8f675e76c5dae5ccfb6413ce.png', 'https://static.yourparkingspace.co.uk/large/1413c0ed3763eb9480847c010b0f2aeb.png'],
          availability: true,
          rating: 4.2,
          description: 'Parking spaces available to rent on a daily and monthly basis. The car park is located 1 minute away from Russell Square Tube Station, 4 minute walk from Great Ormond Street Hospital and a 6 minute walk from University of London',
          comments: { text: ['I would recommend highly. So easy to book, park and enjoy London knowing your car is secure and safe in the underground car park! Will use this again!']},
          price: 9.40,
          electricChargingPoint: false,
          owner: user[45]
        },
        {
          location: 'Bevenden Street, London NW8',
          type: 'Secure gated parking',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/e4d7df218f4123ae2785bc56b20719a3.jpeg'],
          availability: true,
          rating: 4,
          description: 'Parking spaces located on Bevenden Street in London. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Security Lighting and Disabled Access.',
          comments: { text: ['Very easy to find space, many spaces available at a peak time. Easy to contact provider and accessible entrances and lifts with a pram.', 'some of the spaces are small or awkward shapes, and I have a large car, however, there has always been sufficient space for me to avoid those spaces.']},
          price: 11.40,
          electricChargingPoint: true,
          owner: user[46]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Sheltered driveway',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/299b5ab37d2ea84b7dfe6681b7a29050.jpeg', 'https://static.yourparkingspace.co.uk/large/1bfad0183490a2ef224daa5167ef70db.jpeg'],
          availability: true,
          rating: 4.2,
          description: '1.£187.50 pcm 2.Available with 2 weeks notice, minimum 3mth let 3. Exclusive Allocated space 5.	24/7 access 6.	Popular residential private car park 7.	Very safe 8.	CCTV 9.	Ideal for commuter or resident or long term storage 10.	suitable for any sized car/4x4 /vans up to 2.3m height 11.	5 mins walk to city 12.	Outside congestion zone 13.	Close to underground and public transport 14.	Gated shutter style entrance accessible only by remote fob 15.	Fob provided',
          comments: { text: ['Very reasonable parking cost and efficient', 'Great location and very easy to get to. Big spaces.', 'Excellent communication, very clear and precise instructions. This is my first time using JustPark and it will be my go to parking from now on. I highly recommend it.']},
          price: 8,
          electricChargingPoint: false,
          owner: user[47]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Underground Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/645e529ee66fdcea81557424efa95585.jpeg', 'https://static.yourparkingspace.co.uk/large/f289e14634c3f8b385907d40ca5e0748.jpeg'],
          availability: true,
          rating: 4.7,
          description: 'Secure Underground and Gated Private Parking space in zone 1. Outside of Congestion zone.',
          comments: { text: ['Prepaid on line and all was well. Needed to extend time by half hour so did this on line and paid the extra required and received reciept and verification of extended time. On exiting 10 minutes before expiry time the ticket machine asked for £6 extra which I reluctantly paid as I was in a hurry YPS EDIT: Funds refunded', 'For parking in central London, I thought this was good value. The information on entry and exit procedure worked well. however it is a bit dark and dingy, compared to the most modern places', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 12.50,
          electricChargingPoint: true,
          owner: user[48]
        },
        {
          location: 'Simms Rd, London NW8',
          type: 'Driveway',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/419feb456cd970ad2dedc5de7b3af898.jpeg'],
          availability: true,
          rating: 3.9,
          description: 'One allocated space located on Simms Road in London. The space is close to Almanac, Bermondsey and London Stone Carving. The space is suitable for vehicles up to the size of a Van. On-site there is Security Lighting and Allocated Space.',
          comments: { text: ['Easy to use. Perfect access 24 hours. Helpful staff. Big spaces']},
          price: 8.90,
          electricChargingPoint: false,
          owner: user[49]
        },
        {
          location: 'Hoxton Street, London NW8',
          type: 'Roadside parking',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/7e8db1728dcfacba5b4b7b8414b51b5b.jpeg', 'https://static.yourparkingspace.co.uk/large/e82d8867ed80532cb64baad498f49bb5.jpeg'],
          availability: true,
          rating: 4.4,
          description: 'Parking spaces located on Hoxton Street in London. The spaces are close to Hoxton and haggerston. The spaces are suitable for vehicles up to the size of a Large - (4x4). The spaces are available 24 hours on all days.',
          comments: { text: ['Parking code wouldn\'\t open the pedestrian door to get back in. Had to wait for someone coming out to get back to the car']},
          price: 10,
          electricChargingPoint: false,
          owner: user[50]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Underground Garage',
          suitability: 'Motorcyle, Hatchback, Car, 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/e4d7df218f4123ae2785bc56b20719a3.jpeg'],
          availability: true,
          rating: 4.7,
          description: 'Secure underground parking. FOB access. Concierge Monday to Friday 9-5. Parking is underneath a block of flats. Suitable for a 4x4 or smaller. 24 hour access.',
          comments: { text: ['The location is brilliant and the price was good. Just the door code to return to the car park did not work - once we followed local perople in, once we have to call someone to open the door for us where there were quite few people gathered at the gate already.', 'Good value for money']},
          price: 11.90,
          electricChargingPoint: true,
          owner: user[51]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Secure car park',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/f2f0b786a927118614ad1c92fbe54929.png', 'https://static.yourparkingspace.co.uk/large/2373d0eadd01367eda7fc25de1673e6a.png', 'https://static.yourparkingspace.co.uk/large/bf01bd1b495d989a4bb1c50d9c93297e.png'],
          availability: false,
          rating: 3.9,
          description: 'One allocated space located on Erlich Cottages in London. The space is suitable for vehicles up to the size of a Large - (4x4). The space is available 24 hours on all days. The space is accessed via a security fob which will be provided to you on arrival.',
          comments: { text: ['Excellent location and price for theatre trip to Palladium! Would definitely use again']},
          price: 10.60,
          electricChargingPoint: false,
          owner: user[52]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/02b7389c31b51babad2b380e2ba1c5ae.jpeg', 'https://static.yourparkingspace.co.uk/large/0436803127a988d7e2ffbb09b2b95f65.jpeg'],
          availability: true,
          rating: 4.2,
          description: 'One allocated space located on St. Pauls Terrace in London. The space is suitable for vehicles up to the size of a Van. On-site there is Allocated Space. The space is available 24 hours on all days. The space is in a quiet residential cul-de-sac. A 5 minute walk to Kennington Tube station, or 10mins to Waterloo (via the tube). You can fit anything up to a small transit van into the space.',
          comments: { text: ['The parking spaces are a bit tight,is not enough room to exit straight away,you have to do a couple of manoeuvre to exit if you have a long car.']},
          price: 8.5,
          electricChargingPoint: false,
          owner: user[53]
        },
        {
          location: 'Holborn, London NW8',
          type: 'Underground Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/118ddbe0709f6cd3ece3149735641e38.png', 'https://static.yourparkingspace.co.uk/large/1aa47845d8b2bf321d878a10e36ff7ab.png'],
          availability: true,
          rating: 4.5,
          description: 'Excellent secure parking available in Holborn for daily and monthly rentals. We have covered and uncovered spaces depending on availability, You will be instructed to your space on arrival. 24/7 access CCTV. 4 minute walk from Russell Square Tube and 7 minute walk to Holborn station. This location is a 30 second walk from Great Ormand Street Hospital so it provides convenient parking for anyone visiting or working at the hospital.',
          comments: { text: ['Very good secure parking. The traffic on a Saturday to get to the car park was the only issue! Allow more time than you thought.', 'Very good Car Park. The instructions wer clear, the Car Park clean and very good illuminated. We will use it again.', 'I have to say that this is the best parking company so far. Never had any problems even I was late more than an hour they didn\'\t charge me any extra they where really helpful. Recommend it 100%']},
          price: 9.65,
          electricChargingPoint: true,
          owner: user[54]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/b357e1acaa2861d18562359dc44855f4.jpeg'],
          availability: false,
          rating: 3.9,
          description: 'Secure underground parking located in Angel, EC1. The car park is located next to Sadlers Wells theatre, Rosebury Avenue. The car park is protected by security gates operated by a remote key access system and 24 hour CCTV. Available for rental on a long term rolling contract. Accessible 24/7.',
          comments: { text: ['Prepaid on line and all was well. Needed to extend time by half hour so did this on line and paid the extra required and received reciept and verification of extended time. On exiting 10 minutes before expiry time the ticket machine asked for £6 extra which I reluctantly paid as I was in a hurry YPS EDIT: Funds refunded', 'For parking in central London, I thought this was good value. The information on entry and exit procedure worked well. however it is a bit dark and dingy, compared to the most modern places', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 8.90,
          electricChargingPoint: false,
          owner: user[55]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/f2f0b786a927118614ad1c92fbe54929.png', 'https://static.yourparkingspace.co.uk/large/2373d0eadd01367eda7fc25de1673e6a.png', 'https://static.yourparkingspace.co.uk/large/bf01bd1b495d989a4bb1c50d9c93297e.png'],
          availability: true,
          rating: 4.1,
          description: 'This large space is contained in a gated car park on a relatively quiet road in Bethnal Green. The gate is accessible via a code and is extremely safe. The neighboring spaces are continuously unoccupied therefore there is no risk of your car being scratched by other drivers. You will be a 5 minute walk from Bethnal Green Tube and Overground (links to Oxford Circus, Bank, The City) and Overground (5 minutes to Liverpool Streeet) stations and a 10 minute walk from Whitechapel.',
          comments: { text: ['Just a question : why the charging is geting bigger?', 'Bit weird on how to access this place, otherwise all good.', 'Easy to get to and parked with ease.']},
          price: 9.90,
          electricChargingPoint: true,
          owner: user[56]
        },
        {
          location: 'Bermondsey, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/85ef626d96d2023da5f7033d89e5a81e.jpeg'],
          availability: true,
          rating: 2.9,
          description: 'Gated and secured allocated parking space available on a monthly basis with key fob access located just a 10 minute walk to South Bermondsey train station. Great location for commuters.',
          comments: { text: ['The worst parking experience i had so far. Direction shown on app was wrong and i couldnt get into the car park. I spent an hour or even more for looking and still didnt find it. Had to go to different car park and i spend my money again!!!!!!!!!!!!!! So dissipointed with customer Service as no one had answerd the Phone or i didnt get responed for my message!!!!! AVOID THIS COMPANY!!!!!! WOULDNT RECOMENED TO ANYONE!!! WASTE OF MONEY!!!!']},
          price: 10,
          electricChargingPoint: false,
          owner: user[57]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Car Park',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/92113090de1a01cd78f7fe6d40aa71b8.jpeg', 'https://static.yourparkingspace.co.uk/large/67f24a64fc9a5da8148785094d8ce591.jpeg'],
          availability: false,
          rating: 3.7,
          description: 'One allocated space located on Owen Street in London. The space is close to Thomas Paine statue, Open Gallery and Angel Station. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, CCTV, Security Lighting and Security Guards.',
          comments: { text: []},
          price: 8.9,
          electricChargingPoint: false,
          owner: user[58]
        },
        {
          location: 'Albany Mews, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/f4f22d31ab151046dcf461f5b3a0fd78.jpeg'],
          availability: true,
          rating: 4.2,
          description: 'One space located on Albany Mews in London. The space is close to burgess park, elephant and castle and walworth road. The space is suitable for vehicles up to the size of a Medium - (4 Door). The space is available 24 hours on all days. Gated car park for added security. Quick access to Elephant and Castle underground and overground station - 20 minutes walk.',
          comments: { text: ['Friendly attendant and nice and secure. You do need to remember to turn to the left when you go through the exit barrier as the high kerb is hidden on the right by the steep slope but my car is fairly wide and wasn\'\t a problem. Simple easy parking', 'still one of my favourites!']},
          price: 10.50,
          electricChargingPoint: true,
          owner: user[59]
        },
        {
          location: 'The Highway, London NW8',
          type: 'Car Park',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/a2decabfc00fcfa3dace7bc9bc7d86e0.jpeg', 'https://static.yourparkingspace.co.uk/large/35a448a8c18b6ae0dd1fcd0702facb2e.jpeg'],
          availability: true,
          rating: 4.5,
          description: 'One space located on The Highway in London. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, CCTV and Underground Parking. The space is available 24 hours on all days. The space is accessed via a security fob which will be provided to you on arrival.',
          comments: { text: ['Easy on line booking with very clear directions for accessing car park. Much cheaper than NCP. WILL ALWAYS USE', 'Easy to find and park. Exactly as described.']},
          price: 11.1,
          electricChargingPoint: false,
          owner: user[60]
        },
        {
          location: 'Holborn, London NW8',
          type: 'Underground Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/6e95b8997674d1ed56b1fac1cc5cf046.jpeg', 'https://static.yourparkingspace.co.uk/large/b6c1399be372826709f90d51b064d6d7.jpeg'],
          availability: true,
          rating: 4.8,
          description: 'Secure underground parking on Streatham Street. Minutes from the British Museum and Covent Garden with close access to Holborn and Tottenham Court Road.',
          comments: { text: ['Great parking spot, felt very safe']},
          price: 10.2,
          electricChargingPoint: false,
          owner: user[18]
        },
        {
          location: 'Coopers Close, London NW8',
          type: 'Gated Car park',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/ab0a78d877c4aa9511a54d11fdfa6f4c.jpeg', 'https://static.yourparkingspace.co.uk/large/df7a6aa56db5cc2ce24c0e4fb8394298.jpeg'],
          availability: true,
          rating: 4.6,
          description: 'One allocated space located on Coopers Close in London. The space is close to Cinema Italia UK, Genesis Cinema and Spiegelhalter Resistance https://en.wikipedia.org/wiki/Wickhams_(department_store). The space is suitable for vehicles up to the size of a Large - (4x4).',
          comments: { text: ['This customer rated the space 5 stars but chose not to leave a comment.', 'Found it easily enough, very close to relatives and Bethnal Green tube so perfect, would certainly consider using again.']},
          price: 9.70,
          electricChargingPoint: false,
          owner: user[28]
        },
        {
          location: 'Canada Water, London NW8',
          type: 'Roadside Parking',
          suitability: 'Motorcyle, Hatchback, Car, 4X4, Van',
          images: ['https://static.yourparkingspace.co.uk/large/0d624bea327d2897aef4f9a8f076f223.jpeg', 'https://static.yourparkingspace.co.uk/large/b2799ecc662b59483a60b00166d3e6b0.jpeg'],
          availability: false,
          rating: 4.2,
          description: 'Dynamic area, quite and secure with beautiful landscapes around. Minis away from Rotherhithe Station, close by Riverside Thames. 0.3 miles from Canada Water Station and Surry Quays Station. Pleasure walk surrounding by the canal from Canada Water Station, and Surry Quays Shopping Centre to the property with Car park.',
          comments: { text: ['Great space, would use again.', 'Excellent only criticism instructions for how to enter and exit on foot might be useful']},
          price: 8.70,
          electricChargingPoint: false,
          owner: user[29]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Underground Garage',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/1a95c91703d9b61f6040394fa5bbb485.jpeg', 'https://static.yourparkingspace.co.uk/large/5b55bb23e7207df0aad6a1415296e92b.jpeg'],
          availability: true,
          rating: 4.3,
          description: 'One allocated space located on Percy Circus in London. The space is close to Riceyman Steps, Gagosian and Audiology centre, ROYAL NATIONAL THROAT AND EAR HOSPITAL. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Security Lighting and Covered Parking.',
          comments: { text: ['Very good Car Park. The instructions wer clear, the Car Park clean and very good illuminated. We will use it again.', 'Fantastic and so easy. The second time I\'\ve used you for Parking in London.']},
          price: 10.10,
          electricChargingPoint: false,
          owner: user[61]
        },
        {
          location: 'Vernon Rise, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/8cb726c8b7ef9b48bad65a6bc6835df6.jpeg', 'https://static.yourparkingspace.co.uk/large/d34f0647498679cf79aa41e88031c4ec.jpeg'],
          availability: true,
          rating: 3.9,
          description: 'One allocated space located on Vernon Rise in London. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is CCTV and Security Lighting.',
          comments: { text: ['I have to say that this is the best parking company so far. Never had any problems even I was late more than an hour they didn\'\t charge me any extra they where really helpful. Recommend it 100%', 'safe, good space and easy to access']},
          price: 9,
          electricChargingPoint: false,
          owner: user[51]
        },
        {
          location: 'Tabard Street, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/3fcd27babff8db37c04780e5a222afbb.jpeg'],
          availability: false,
          rating: 4.1,
          description: 'Parking spaces located on Empire Square, Tabard Street in London. The spaces are close to Dream door gallery, Southwark Coroners Court and Southwark Local History Library. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space, Security Lighting and Underground Parking.',
          comments: { text: ['Great experience. There is a 24h desk at the residence to pick up and give back the fob. Carpark is safe and new. Everything went very well.']},
          price: 8,
          electricChargingPoint: false,
          owner: user[22]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle',
          images: ['https://static.yourparkingspace.co.uk/large/6e367aa03deb333a6e29a56a28be0131.jpeg'],
          availability: true,
          rating: 4.2,
          description: 'Motorcycle Space available for bookings of one month or longer. Secure, shuttered basement car park. Space not suitable for small cars.',
          comments: { text: ['Easy. Friendly. Simple. Good value. What is not to like?', 'Good, safty pleace, easy to find it and correct price.']},
          price: 7.30,
          electricChargingPoint: false,
          owner: user[17]
        },
        {
          location: 'Bermondsey, London NW8',
          type: 'Residential Parking',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/ee61a35f58915dd5b590c736818221e0.jpeg', 'https://static.yourparkingspace.co.uk/large/d006f2970624f91b4111fe051dca62ee.jpeg'],
          availability: true,
          rating: 4,
          description: 'One allocated space located on Bridge View Court in London. The space is close to london bridge station, borough station, bermondsey high street and excellent bus routes. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is CCTV and Security Lighting.',
          comments: { text: ['Hassle free, good value parking', 'When I got to car park I was told that the car park is full and have to call the customer service. How is this possible as when I booked it, it says your space is reserved so nobody can park in there.']},
          price: 10.25,
          electricChargingPoint: false,
          owner: user[71]
        },
        {
          location: 'Bermondsey, London NW8',
          type: 'Secure parking',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/3eab234063d6095ad9a516338144a3bb.jpeg', 'https://static.yourparkingspace.co.uk/large/a0e8a8316c442cdaf335eec3e130096b.jpeg'],
          availability: true,
          rating: 4.3,
          description: 'This is a gated, secure car park space in SE1 just outside the congestion charge zone (Tower Bridge/Bermondsey Sq) with key-fob. Available 24/7. You will need to display my parking permit at all times when the car is at the car park.',
          comments: { text: ['Very happy with the parking space','There was no parking available when I arrived despite booking. Customer services did find me an alternative but people need to know that if you book a parking space there is a good chance it will not be available when you arrive.']},
          price: 9.35,
          electricChargingPoint: false,
          owner: user[15]
        },
        {
          location: 'Stewart House, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/f2f0b786a927118614ad1c92fbe54929.png', 'https://static.yourparkingspace.co.uk/large/2373d0eadd01367eda7fc25de1673e6a.png', 'https://static.yourparkingspace.co.uk/large/bf01bd1b495d989a4bb1c50d9c93297e.png'],
          availability: true,
          rating: 4.1,
          description: 'One space located on Stewart House in London. The space is close to William Benington Gallery, MedicSpot Clinic Tower Bridge and Kino Bermondsey. The space is suitable for vehicles up to the size of a Medium - (4 Door). On-site there is Covered Parking.',
          comments: { text: ['Excellent communication, very clear and precise instructions. This is my first time using Spaces and it will be my go to parking from now on. I highly recommend it.']},
          price: 8,
          electricChargingPoint: false,
          owner: user[62]
        },
        {
          location: 'Central London, London NW8',
          type: 'Underground Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/a31b1432e9f4d1a1b220a121c9c840c8.png', 'https://static.yourparkingspace.co.uk/large/0a60767da45c1563b28d6a0b94e0edcf.png'],
          availability: true,
          rating: 4.8,
          description: 'Parking spaces located on Royal National Theatre in London. The spaces are close to Prop Store Exhibition, Lyttleton Lounge Gallery and Parking National Park. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Security Lighting and Underground Parking. The spaces are available 6AM until midnight on all days. Secure underground spaces located at the Royal National Theatre in South bank available for daily and monthly rentals. Access from 06:00am (7.00am at weekends) to 00:00am as the car park is closed at 00:00am. Features from CCTV. 7 minute walk from Waterloo station offering excellent links across London. Ideal parking for anyone looking to visit tourist attractions such as the London Eye, London Dungeon and the London Aquarium.',
          comments: { text: ['Easy to find from the upper street. Direct access to the theater. And close to all central London. Exiting is a bit of hassle with human assistance, but still convenient. Recommended.', 'Good and easy access, will definitely use again']},
          price: 12.50,
          electricChargingPoint: true,
          owner: user[64]
        },
        {
          location: 'Elephant & Castle, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/77a61a638fb5009aa22afee9cb16e465.jpeg', 'https://static.yourparkingspace.co.uk/large/7197865962bd25498c5ac2b019346b17.jpeg'],
          availability: true,
          rating: 4.23,
          description: 'One allocated space located on Wollaston Close in London. The space is close to Cuming Museum, Southwark Arts Forum and Elephant & Castle. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, Allocated Space, CCTV, Security Lighting, Security Guards and Underground Parking.',
          comments: { text: ['Parking space well placed close to London Bankside where our hotel was; owner very promptly responsive and helpful to guide us to address and well available for drop off and pick up. Parking place closed and secured. we were very happy with the service.', 'Fantastic spot and really easy to use! Would definitely use again!']},
          price: 9.70,
          electricChargingPoint: false,
          owner: user[65]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/be6d02c0d028f74c399db86ea159f1e5.jpeg', 'https://static.yourparkingspace.co.uk/large/a38efb9325ca78c1b8102d2d104ced73.jpeg'],
          availability: false,
          rating: 4.1,
          description: 'One allocated space located on Eluna Apartments in London. The space is close to Paulina Berry creative art direction, Health Centre and Shadwell. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space. The space is available 24 hours on all days. The space is accessed via a security fob which will be provided to you on arrival.',
          comments: { text: []},
          price: 9.90,
          electricChargingPoint: false,
          owner: user[66]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Roadside Parking',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/2512eef51d4ea7b84cae6bce7b29411f.png', 'https://static.yourparkingspace.co.uk/large/03eeeded8289b4e186c48f0a96861f2d.png'],
          availability: true,
          rating: 4.2,
          description: 'Parking spaces located on Upper Marsh, Waterloo in London. The spaces are close to The Enchanted Group, Florence Nightingale Museum and Lambeth North. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Security Lighting and Security Guards. The spaces are available 24 hours on all days..',
          comments: { text: []},
          price: 8.80,
          electricChargingPoint: false,
          owner: user[67]
        },
        {
          location: 'Clerkenwell, London NW8',
          type: 'Underground Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/c62fee9fdcec06cc2073a7786c5b328d.jpeg', 'https://static.yourparkingspace.co.uk/large/a68efed783d855ffc1bb66d716b45527.jpeg'],
          availability: true,
          rating: 4.5,
          description: 'Underground secured parking on St. John Street in Clerkenwell. 3 separate spaces available. 2 side by side so could accomodate a larger vehicle. Fob access. Available indefinitely',
          comments: { text: ['Prepaid on line and all was well. Needed to extend time by half hour so did this on line and paid the extra required and received reciept and verification of extended time. On exiting 10 minutes before expiry time the ticket machine asked for £6 extra which I reluctantly paid as I was in a hurry YPS EDIT: Funds refunded', 'For parking in central London, I thought this was good value. The information on entry and exit procedure worked well. however it is a bit dark and dingy, compared to the most modern places', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 9.55,
          electricChargingPoint: true,
          owner: user[68]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Residential Driveway',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/8a144059ef4f326aded89b0d3e0b397b.png', 'https://static.yourparkingspace.co.uk/large/8ed37e42d7d95aafc097e5a71351d434.png'],
          availability: true,
          rating: 3.6,
          description: 'One allocated space located on Goldman Close in London. The space is close to Gitoon Gallery, Espacio Gallery and Blithehale Health Centre. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space. The space is available 24 hours on all days. Our driveway is in Goldman close, a residential area a short walk from Shoreditch High Street (10 minutes), Liverpool Street (15 minutes), Bethnal Green (10 minutes), Aldgate East (15 minutes) and Aldgate (17 minutes).',
          comments: { text: ['Easy to use. Perfect access 24 hours. Helpful staff. Big spaces', 'Good location, just quite far outside of town']},
          price: 7.20,
          electricChargingPoint: false,
          owner: user[69]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Residential Driveway',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/bd0d56629e531d2c5944d4f136f9fcda.jpeg'],
          availability: true,
          rating: 4,
          description: 'One space located on Granby Street in London. The space is close to Espacio Gallery, Gitoon Gallery and Close-Up Cinema. The space is suitable for vehicles up to the size of a Minibus. On-site there is Allocated Space, Security Lighting and Disabled Access.The space is available 24 hours on all days.In the area: Brick Lane Markets, Lady Dinah\'s Cat Emporium and Box Park. Plus it is only a 10 minute walk to Spitalfields Markets.',
          comments: { text: ['The guy who has rented to me was so helpful']},
          price: 8.90,
          electricChargingPoint: false,
          owner: user[69]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Private parking',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/70c9b7dc7e59b65d236d0fc307943032.jpeg'],
          availability: true,
          rating: 4.2,
          description: 'One allocated space located on Bath House in London. The space is close to Gitoon Gallery, Gitoon Gallery and Blithehale Health Centre. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is CCTV and Security Lighting.',
          comments: { text: []},
          price: 9.30,
          electricChargingPoint: true,
          owner: user[27]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Private Residential',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/7e8db1728dcfacba5b4b7b8414b51b5b.jpeg', 'https://static.yourparkingspace.co.uk/large/e82d8867ed80532cb64baad498f49bb5.jpeg'],
          availability: true,
          rating: 4.3,
          description: 'One allocated space located on Rosebery Avenue in London. The space is close to Strategie Art, Taylor House Tribunal Hearing Centre and The Museum of Funeral History. The space is suitable for vehicles up to the size of a Medium - (4 Door). On-site there is CCTV. The space is available 24 hours on all days. The space is accessed via a security fob which will be provided to you on arrival.',
          comments: { text: ['easy parking lots of room', 'very difficult to find but the parking was A Ok']},
          price: 8.85,
          electricChargingPoint: false,
          owner: user[70]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Residential driveway',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/a7e426aca21146fb23a53e6d65c1f63e.jpeg', 'https://static.yourparkingspace.co.uk/large/bca09ebf463645fa66d40e87a626b3f3.jpeg'],
          availability: false,
          rating: 3.5,
          description: 'One space located on Ann Moss Way in London. The space is suitable for vehicles up to the size of a Medium - (4 Door). The space is available 24 hours on all days. We are renting out our driveway, at the back of our house, in a quiet residential neighbourhood. It is large enough for a small van. It is a cul-de-sac location with neighbourhood watch, a stone\'s throw from Canada Water tube, Rotherhithe Tunnel, Rotherhithe tube and Bermondsey. Access 24/7, you just turn into the driveway from the side street.',
          comments: { text: ['Even though paid and booked parking space in advance , on arrival no space available , although I have to say the attendant did his upmost to find alternative parking for us , but we still felt apprehensive in leaving our vehicle in a side street away from the car park. He kept to his word and we presume he must have kept an eye on it all night , but I still don\'\t understand why a space wasn\'\t secured .']},
          price: 7.30,
          electricChargingPoint: false,
          owner: user[71]
        },
        {
          location: 'Kennington, London NW8',
          type: 'Residential Parking',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/50d2d5a7e749ad8188828f74e6ffd7a6.jpeg'],
          availability: true,
          rating: 4.1,
          description: 'Dedicated off street parking area with reserved space secured with a locking post 4 min walk to Kennington tube station just outside the congestion zone.',
          comments: { text: []},
          price: 8.80,
          electricChargingPoint: false,
          owner: user[54]
        },
        {
          location: 'Conduit St, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/118ddbe0709f6cd3ece3149735641e38.png', 'https://static.yourparkingspace.co.uk/large/1aa47845d8b2bf321d878a10e36ff7ab.png'],
          availability: true,
          rating: 4.4,
          description: 'Parking spaces located on Lambs Conduit Street, Holborn in London. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is CCTV and Security Lighting. The spaces are available 8AM-11PM on all days. Excellent secure parking available in Holborn for daily and monthly rentals. We have covered and uncovered spaces depending on availability, You will be instructed to your space on arrival. 24/7 access CCTV. 4 minute walk from Russell Square Tube and 7 minute walk to Holborn station. This location is a 30 second walk from Great Ormand Street Hospital so it provides convenient parking for anyone visiting or working at the hospital.',
          comments: { text: ['Ideal spot close to the hotel we were staying, easy to find will definitely park here again, thanks', 'First time used this app - location ideal for us. Would not hesitate to use again. Many thanks!', 'excellent safe location. I would use this again, a little walk to the Thames area but otherwise suited me fine. Thank you.']},
          price: 10.25,
          electricChargingPoint: true,
          owner: user[72]
        },
        {
          location: 'Hackney Rd, London NW8',
          type: 'Gated car park',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/b357e1acaa2861d18562359dc44855f4.jpeg'],
          availability: true,
          rating: 3.9,
          description: 'One allocated space located on Hackney Road in London. The space is suitable for vehicles up to the size of a Van. On-site there is Allocated Space. The space is available 24 hours on all days. Private allocated car space in Shoreditch Zone 1, security access with electric fob. Close to Hoxton Station and Shoreditch High Street. 10 Min walk to city and lots of bus routes. Outside congestion zone!!',
          comments: { text: []},
          price: 7.60,
          electricChargingPoint: false,
          owner: user[73]
        },
        {
          location: 'Bloomsbury, London NW8',
          type: 'Underground Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/d41b0907f49e8e7d0628583ddd161ad7.png', 'https://static.yourparkingspace.co.uk/large/f22b1e8e3f59f44411ae40633e22f65e.png'],
          availability: true,
          rating: 4.7,
          description: 'Secure parking available at the Bloomsbury Square car park, located in a great location right next to The British Museum. The car park is a 4 minute walk from Holborn Tube Station, an 8 minute walk to Russell Square Tube Station, and only a 6 minute walk to Great Ormond Street Hospital. Covent Garden is less than a 10 minute walk away.',
          comments: { text: ['Great location but tight entry. Glad I don\'\t have a large car.', 'Great location for west end . Directions good and opening the gate from the app on your phone really cool. Spaces easy to find']},
          price: 11,
          electricChargingPoint: true,
          owner: user[74]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/54b3605df2de7904a8e34047f48e1d0f.jpeg', 'https://static.yourparkingspace.co.uk/large/f4f22d31ab151046dcf461f5b3a0fd78.jpeg'],
          availability: true,
          rating: 4.4,
          description: 'One allocated space located on Owen Street in London. The space is close to Thomas Paine statue, Open Gallery and Angel Station. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, CCTV, Security Lighting and Security Guards. The space is available 24 hours on all days. The space is accessed via a security fob which will be provided to you on arrival.',
          comments: { text: ['Great communication, safe & secure parking spot and Chloe was super helpful. Thanks!', 'Parked here for the day only. Excellent service, prompt communication. Will definitely use again if I\'m in the area.']},
          price: 11.20,
          electricChargingPoint: true,
          owner: user[75]
        },
        {
          location: 'Coopers Close, London NW8',
          type: 'Gated residential space',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/df7a6aa56db5cc2ce24c0e4fb8394298.jpeg', 'https://static.yourparkingspace.co.uk/large/ab0a78d877c4aa9511a54d11fdfa6f4c.jpeg'],
          availability: true,
          rating: 4.6,
          description: 'Parking space is gated. Manually open gate with very little force as it will run off the runner. the parking space is marked in bright orange as number 11. Please note there is another brown gate at the end of the road - this is NOT the parking allocated. The parking is at the brown gate on the left hand side before the end of the close.',
          comments: { text: ['Found it easily enough, very close to relatives and Bethnal Green tube so perfect, would certainly consider using again.', 'This customer rated the space 5 stars but chose not to leave a comment.', 'This customer rated the space 5 stars but chose not to leave a comment.']},
          price: 9.95,
          electricChargingPoint: true,
          owner: user[76]
        },
        {
          location: 'Vauxhall, London NW8',
          type: 'Roadside parking',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/c454336d84bd404f5c36a2692fc9b022.jpeg'],
          availability: true,
          rating: 3.8,
          description: 'Secured private parking space at Vauxhall available for monthly rentals. Less than 3 minutes walk from Vauxhall Station. 24/7 access with a fob key.',
          comments: { text: ['Prepaid on line and all was well. Needed to extend time by half hour so did this on line and paid the extra required and received reciept and verification of extended time. On exiting 10 minutes before expiry time the ticket machine asked for £6 extra which I reluctantly paid as I was in a hurry YPS EDIT: Funds refunded', 'For parking in central London, I thought this was good value. The information on entry and exit procedure worked well. however it is a bit dark and dingy, compared to the most modern places', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 8.8,
          electricChargingPoint: false,
          owner: user[77]
        },
        {
          location: 'Westminster, London NW8',
          type: 'Underground Garage',
          suitability: 'Motorcyle, Hatchback, Car, Van',
          images: ['https://static.yourparkingspace.co.uk/large/890839c490c70b7e513cd86e8e8be71b.jpeg', 'https://static.yourparkingspace.co.uk/large/9cf70b20d6c066724fe543ce9d673835.jpeg'],
          availability: true,
          rating: 4.7,
          description: 'Excellent secure underground parking located under the Doubletree Hilton Hotel in the heart of Westminster. Please note, the entrance to the parking is on Thorney Street (further details provided in your booking confirmation). This car park benefits from a secure shutter entry and 24/7 CCTV. PLEASE NOTE: This parking space is located within the congestion zone. Spaces available for both daily and monthly rentals. Dedicated parking area for Larger vehicles such as SUV\\s , Range Rovers, Vans or minibuses. 11-minute walk from the iconic Houses of Parliament, and 6 minutes on foot from the Tate Britain gallery. 10 minute walk to Westminster tube station.',
          comments: { text: ['Good parking space right underneath our location for the day. Very fair price for the time we were there, easily accessible and clear instructions for entry. Only reason not to give 5 stars would be getting into spaces was a bit tricky due to rubbish/ items from hotel being in a number of more easily accessible spaces. Would use again if in the area, safe and secure. Thank you!', 'Perfect spot for central London. Good price. safe and secure.']},
          price: 12,
          electricChargingPoint: true,
          owner: user[54]
        },
        {
          location: 'Westminster, London NW8',
          type: 'Underground Garage',
          suitability: 'Motorcyle, Hatchback, Car',
          images: ['https://static.yourparkingspace.co.uk/large/fe5c960fceeb46b718afa3bc0a1a022c.jpeg'],
          availability: true,
          rating: 4.4,
          description: 'Parking spaces located on Monck Street in London. The spaces are close to Westminster Coroner\'s Court, 12 Star Gallery and Beco Diagonal. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, Allocated Space, CCTV, Security Lighting, Security Guards, Underground Parking, Disabled Access and Electric Charging.',
          comments: { text: ['Convenient for the station. Friendly owner.', 'Perfectly situated car park very central and for London parking prices you can\'\t beat your rate. Gave four stars only because entrance is very tight to get into. Apart from that all good.']},
          price: 12.20,
          electricChargingPoint: true,
          owner: user[38]
        }
      ])
        .then(spaces => console.log(`${spaces.length} spaces created`))
        .catch(err => console.log(err))
        .finally(() => mongoose.connection.close())
    })
})
