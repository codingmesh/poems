import type { Poet, GraphEdge } from '../types';

// 榜单数字与视频完全一致：被提最多 18 人、赠诗最多 15 人。
// 数组顺序用于同分时稳定排序（被提榜 0 分顺序：周密、欧阳修、刘克庄）。
export const SONG_POETS: Poet[] = [
  {
    id: 'sushi', name: '苏轼', color: '#ff7eb0', mentioned: 316, gifted: 183, connections: 207, poemCount: 507,
    relations: [
      {
        targetName: '苏辙', type: '寄', more: 5,
        poems: [
          { title: '和子由渑池怀旧', author: '苏轼', lines: ['人生到处知何似，', '应似飞鸿踏雪泥。', '泥上偶然留指爪，', '鸿飞那复计东西。', '老僧已死成新塔，', '坏壁无由见旧题。', '往日崎岖还记否，', '路长人困蹇驴嘶。'] },
          { title: '水调歌头·明月几时有', author: '苏轼', lines: ['明月几时有，', '把酒问青天。', '不知天上宫阙，', '今夕是何年。', '我欲乘风归去，', '又恐琼楼玉宇，', '高处不胜寒。', '起舞弄清影，', '何似在人间。', '转朱阁，', '低绮户，', '照无眠。', '不应有恨，', '何事长向别时圆。', '人有悲欢离合，', '月有阴晴圆缺，', '此事古难全。', '但愿人长久，', '千里共婵娟。'] },
          { title: '西江月·世事一场大梦', author: '苏轼', lines: ['世事一场大梦，', '人生几度秋凉。', '夜来风叶已鸣廊，', '看取眉头鬓上。', '酒贱常愁客少，', '月明多被云妨。', '中秋谁与共孤光，', '把盏凄然北望。'] },
        ],
      },
      {
        targetName: '王弗', type: '寄', more: 0,
        poems: [
          { title: '江城子·乙卯正月二十日夜记梦', author: '苏轼', lines: ['十年生死两茫茫，', '不思量，', '自难忘。', '千里孤坟，', '无处话凄凉。', '纵使相逢应不识，', '尘满面，', '鬓如霜。', '夜来幽梦忽还乡，', '小轩窗，', '正梳妆。', '相顾无言，', '惟有泪千行。', '料得年年肠断处，', '明月夜，', '短松冈。'] },
        ],
      },
      {
        targetName: '密州', type: '提及', more: 1,
        poems: [
          { title: '江城子·密州出猎', author: '苏轼', lines: ['老夫聊发少年狂，', '左牵黄，', '右擎苍。', '锦帽貂裘，', '千骑卷平冈。', '为报倾城随太守，', '亲射虎，', '看孙郎。', '酒酣胸胆尚开张，', '鬓微霜，', '又何妨。', '持节云中，', '何日遣冯唐。', '会挽雕弓如满月，', '西北望，', '射天狼。'] },
        ],
      },
      {
        targetName: '陈襄', type: '提及', more: 6,
        poems: [
          { title: '和陈述古拒霜花', author: '苏轼', lines: ['千林扫作一番黄，', '只有芙蓉独自芳。', '唤作拒霜知未称，', '细思却是最宜霜。'] },
          { title: '有美堂暴雨', author: '苏轼', lines: ['游人脚底一声雷，', '满座顽云拨不开。', '天外黑风吹海立，', '浙东飞雨过江来。', '十分潋滟金樽凸，', '千杖敲铿羯鼓催。', '唤起谪仙泉洒面，', '倒倾鲛室泻琼瑰。'] },
        ],
      },
      {
        targetName: '王安石', type: '酬和', more: 2,
        poems: [
          { title: '次荆公韵四绝 其三', author: '苏轼', lines: ['骑驴渺渺入荒陂，', '想见先生未病时。', '劝我试求三亩宅，', '从公已觉十年迟。'] },
        ],
      },
      {
        targetName: '刘景文', type: '寄', more: 2,
        poems: [
          { title: '赠刘景文', author: '苏轼', lines: ['荷尽已无擎雨盖，', '菊残犹有傲霜枝。', '一年好景君须记，', '最是橙黄橘绿时。'] },
        ],
      },
      {
        targetName: '惠崇', type: '提及', more: 0,
        poems: [
          { title: '惠崇春江晚景 其一', author: '苏轼', lines: ['竹外桃花三两枝，', '春江水暖鸭先知。', '蒌蒿满地芦芽短，', '正是河豚欲上时。'] },
          { title: '惠崇春江晚景 其二', author: '苏轼', lines: ['两两归鸿欲破群，', '依依还似北归人。', '遥知朔漠多风雪，', '更待江南半月春。'] },
        ],
      },
    ],
  },
  {
    id: 'wanganshi', name: '王安石', color: '#ffd94d', mentioned: 58, gifted: 157, connections: 98, poemCount: 320,
    relations: [
      {
        targetName: '欧阳修', type: '酬和', more: 2,
        poems: [
          { title: '奉酬永叔见赠', author: '王安石', lines: ['欲传道义心犹在，', '强学文章力已穷。', '他日若能窥孟子，', '终身何敢望韩公。', '抠衣最出诸生后，', '倒屣尝倾广座中。', '只恐虚名因此得，', '嘉篇为贶岂宜蒙。'] },
        ],
      },
      {
        targetName: '杨德逢', type: '寄', more: 1,
        poems: [
          { title: '书湖阴先生壁 其一', author: '王安石', lines: ['茅檐长扫净无苔，', '花木成畦手自栽。', '一水护田将绿绕，', '两山排闼送青来。'] },
          { title: '书湖阴先生壁 其二', author: '王安石', lines: ['桑条索漠楝花繁，', '风敛余香暗度垣。', '黄鸟数声残午梦，', '尚疑身属半山园。'] },
        ],
      },
      {
        targetName: '长安君', type: '寄', more: 0,
        poems: [
          { title: '示长安君', author: '王安石', lines: ['少年离别意非轻，', '老去相逢亦怆情。', '草草杯盘共笑语，', '昏昏灯火话平生。', '自怜湖海三年隔，', '又作尘沙万里行。', '欲问后期何日是，', '寄书应见雁南征。'] },
        ],
      },
      {
        targetName: '明妃', type: '提及', more: 1,
        poems: [
          { title: '明妃曲二首 其一', author: '王安石', lines: ['明妃初出汉宫时，', '泪湿春风鬓脚垂。', '低徊顾影无颜色，', '尚得君王不自持。', '归来却怪丹青手，', '入眼平生几曾有。', '意态由来画不成，', '当时枉杀毛延寿。', '一去心知更不归，', '可怜着尽汉宫衣。', '寄声欲问塞南事，', '只有年年鸿雁飞。', '家人万里传消息，', '好在毡城莫相忆。', '君不见咫尺长门闭阿娇，', '人生失意无南北。'] },
        ],
      },
      {
        targetName: '梅花', type: '提及', more: 2,
        poems: [
          { title: '梅花', author: '王安石', lines: ['墙角数枝梅，', '凌寒独自开。', '遥知不是雪，', '为有暗香来。'] },
          { title: '北陂杏花', author: '王安石', lines: ['一陂春水绕花身，', '花影妖娆各占春。', '纵被春风吹作雪，', '绝胜南陌碾成尘。'] },
          { title: '泊船瓜洲', author: '王安石', lines: ['京口瓜洲一水间，', '钟山只隔数重山。', '春风又绿江南岸，', '明月何时照我还。'] },
        ],
      },
    ],
  },
  {
    id: 'luyou', name: '陆游', color: '#ffc860', mentioned: 55, gifted: 154, connections: 153, poemCount: 288,
    relations: [
      {
        targetName: '中原', type: '提及', more: 4,
        poems: [
          { title: '书愤 其一', author: '陆游', lines: ['早岁那知世事艰，', '中原北望气如山。', '楼船夜雪瓜洲渡，', '铁马秋风大散关。', '塞上长城空自许，', '镜中衰鬓已先斑。', '出师一表真名世，', '千载谁堪伯仲间。'] },
          { title: '秋夜将晓出篱门迎凉有感 其二', author: '陆游', lines: ['三万里河东入海，', '五千仞岳上摩天。', '遗民泪尽胡尘里，', '南望王师又一年。'] },
          { title: '十一月四日风雨大作 其二', author: '陆游', lines: ['僵卧孤村不自哀，', '尚思为国戍轮台。', '夜阑卧听风吹雨，', '铁马冰河入梦来。'] },
        ],
      },
      {
        targetName: '子聿', type: '寄', more: 2,
        poems: [
          { title: '冬夜读书示子聿', author: '陆游', lines: ['古人学问无遗力，', '少壮工夫老始成。', '纸上得来终觉浅，', '绝知此事要躬行。'] },
          { title: '示儿', author: '陆游', lines: ['死去元知万事空，', '但悲不见九州同。', '王师北定中原日，', '家祭无忘告乃翁。'] },
        ],
      },
      {
        targetName: '沈园', type: '提及', more: 0,
        poems: [
          { title: '沈园二首 其一', author: '陆游', lines: ['城上斜阳画角哀，', '沈园非复旧池台。', '伤心桥下春波绿，', '曾是惊鸿照影来。'] },
          { title: '沈园二首 其二', author: '陆游', lines: ['梦断香消四十年，', '沈园柳老不吹绵。', '此身行作稽山土，', '犹吊遗踪一泫然。'] },
          { title: '钗头凤·红酥手', author: '陆游', lines: ['红酥手，', '黄縢酒，', '满城春色宫墙柳。', '东风恶，', '欢情薄。', '一怀愁绪，', '几年离索。', '错错错。', '春如旧，', '人空瘦，', '泪痕红浥鲛绡透。', '桃花落，', '闲池阁。', '山盟虽在，', '锦书难托。', '莫莫莫。'] },
        ],
      },
      {
        targetName: '临安', type: '提及', more: 0,
        poems: [
          { title: '临安春雨初霁', author: '陆游', lines: ['世味年来薄似纱，', '谁令骑马客京华。', '小楼一夜听春雨，', '深巷明朝卖杏花。', '矮纸斜行闲作草，', '晴窗细乳戏分茶。', '素衣莫起风尘叹，', '犹及清明可到家。'] },
        ],
      },
      {
        targetName: '山西村', type: '提及', more: 0,
        poems: [
          { title: '游山西村', author: '陆游', lines: ['莫笑农家腊酒浑，', '丰年留客足鸡豚。', '山重水复疑无路，', '柳暗花明又一村。', '箫鼓追随春社近，', '衣冠简朴古风存。', '从今若许闲乘月，', '拄杖无时夜叩门。'] },
        ],
      },
    ],
  },
  {
    id: 'zhuxi', name: '朱熹', color: '#9090f0', mentioned: 47, gifted: 42, connections: 83, poemCount: 164,
    relations: [
      {
        targetName: '魏惇夫', type: '寄', more: 1,
        poems: [
          { title: '雨中示魏惇夫兼怀黄子厚二首 其一', author: '朱熹', lines: ['读书春日晏，', '雨至满郊园。', '一洒幽丛竹，', '蔼蔼清阴繁。', '斋居无还往，', '镇日空掩门。', '欲将冲静趣，', '与子俱忘言。'] },
        ],
      },
      {
        targetName: '观书', type: '提及', more: 0,
        poems: [
          { title: '观书有感 其一', author: '朱熹', lines: ['半亩方塘一鉴开，', '天光云影共徘徊。', '问渠那得清如许，', '为有源头活水来。'] },
          { title: '观书有感 其二', author: '朱熹', lines: ['昨夜江边春水生，', '蒙冲巨舰一毛轻。', '向来枉费推移力，', '此日中流自在行。'] },
        ],
      },
      {
        targetName: '春日', type: '提及', more: 0,
        poems: [
          { title: '春日', author: '朱熹', lines: ['胜日寻芳泗水滨，', '无边光景一时新。', '等闲识得东风面，', '万紫千红总是春。'] },
        ],
      },
      {
        targetName: '水口', type: '提及', more: 0,
        poems: [
          { title: '水口行舟 其一', author: '朱熹', lines: ['昨夜扁舟雨一蓑，', '满江风浪夜如何。', '今朝试卷孤篷看，', '依旧青山绿树多。'] },
        ],
      },
    ],
  },
  {
    id: 'yangwanli', name: '杨万里', color: '#60d8f0', mentioned: 42, gifted: 11, connections: 96, poemCount: 260,
    relations: [
      {
        targetName: '陆游', type: '寄', more: 4,
        poems: [
          { title: '云龙歌调陆务观', author: '杨万里', lines: ['墨池杨子云，', '云间陆士龙。', '天憎二子巧言语，', '只遣相别无相逢。', '长安市上忽再值，', '向来一别三千岁。', '王母桃花落几番，', '北斗柄烂银河乾。', '双鬓成丝丝似雪，', '两翁对面面如丹。', '借问别来各何向，', '渭水东流我西上。'] },
        ],
      },
      {
        targetName: '林子方', type: '寄', more: 1,
        poems: [
          { title: '晓出净慈寺送林子方', author: '杨万里', lines: ['毕竟西湖六月中，', '风光不与四时同。', '接天莲叶无穷碧，', '映日荷花别样红。'] },
        ],
      },
      {
        targetName: '小池', type: '提及', more: 2,
        poems: [
          { title: '小池', author: '杨万里', lines: ['泉眼无声惜细流，', '树阴照水爱晴柔。', '小荷才露尖尖角，', '早有蜻蜓立上头。'] },
          { title: '闲居初夏午睡起 其一', author: '杨万里', lines: ['梅子留酸软齿牙，', '芭蕉分绿与窗纱。', '日长睡起无情思，', '闲看儿童捉柳花。'] },
          { title: '宿新市徐公店 其一', author: '杨万里', lines: ['篱落疏疏一径深，', '树头新绿未成阴。', '儿童急走追黄蝶，', '飞入菜花无处寻。'] },
        ],
      },
      {
        targetName: '松源', type: '提及', more: 0,
        poems: [
          { title: '过松源晨炊漆公店 其五', author: '杨万里', lines: ['莫言下岭便无难，', '赚得行人错喜欢。', '政入万山围子里，', '一山放出一山拦。'] },
        ],
      },
    ],
  },
  {
    id: 'jiangkui', name: '姜夔', color: '#f070a8', mentioned: 28, gifted: 6, connections: 22, poemCount: 50,
    relations: [
      {
        targetName: '扬州', type: '提及', more: 1,
        poems: [
          { title: '扬州慢·淮左名都', author: '姜夔', lines: ['淮左名都，', '竹西佳处，', '解鞍少驻初程。', '过春风十里，', '尽荠麦青青。', '自胡马窥江去后，', '废池乔木，', '犹厌言兵。', '渐黄昏，', '清角吹寒，', '都在空城。', '杜郎俊赏，', '算而今重到须惊。', '纵豆蔻词工，', '青楼梦好，', '难赋深情。', '二十四桥仍在，', '波心荡，', '冷月无声。', '念桥边红药，', '年年知为谁生。'] },
        ],
      },
      {
        targetName: '吴松', type: '提及', more: 0,
        poems: [
          { title: '点绛唇·丁未冬过吴松作', author: '姜夔', lines: ['燕雁无心，', '太湖西畔随云去。', '数峰清苦，', '商略黄昏雨。', '第四桥边，', '拟共天随住。', '今何许，', '凭阑怀古，', '残柳参差舞。'] },
        ],
      },
      {
        targetName: '梅花', type: '提及', more: 2,
        poems: [
          { title: '暗香·旧时月色', author: '姜夔', lines: ['旧时月色，', '算几番照我，', '梅边吹笛。', '唤起玉人，', '不管清寒与攀摘。', '何逊而今渐老，', '都忘却春风词笔。', '但怪得竹外疏花，', '香冷入瑶席。', '江国，', '正寂寂。', '叹寄与路遥，', '夜雪初积。', '翠尊易泣，', '红萼无言耿相忆。', '长记曾携手处，', '千树压、西湖寒碧。', '又片片、吹尽也，', '几时见得。'] },
          { title: '疏影·苔枝缀玉', author: '姜夔', lines: ['苔枝缀玉，', '有翠禽小小，', '枝上同宿。', '客里相逢，', '篱角黄昏，', '无言自倚修竹。', '昭君不惯胡沙远，', '但暗忆、江南江北。', '想佩环、月夜归来，', '化作此花幽独。', '犹记深宫旧事，', '那人正睡里，', '飞近蛾绿。', '莫似春风，', '不管盈盈，', '早与安排金屋。', '还教一片随波去，', '又却怨、玉龙哀曲。', '等恁时、重觅幽香，', '已入小窗横幅。'] },
        ],
      },
    ],
  },
  {
    id: 'fanchengda', name: '范成大', color: '#b0a0f0', mentioned: 23, gifted: 76, connections: 58, poemCount: 150,
    relations: [
      {
        targetName: '田园', type: '提及', more: 8,
        poems: [
          { title: '四时田园杂兴 其二十五', author: '范成大', lines: ['梅子金黄杏子肥，', '麦花雪白菜花稀。', '日长篱落无人过，', '惟有蜻蜓蛱蝶飞。'] },
          { title: '四时田园杂兴 其三十一', author: '范成大', lines: ['昼出耘田夜绩麻，', '村庄儿女各当家。', '童孙未解供耕织，', '也傍桑阴学种瓜。'] },
        ],
      },
      {
        targetName: '横塘', type: '提及', more: 0,
        poems: [
          { title: '横塘', author: '范成大', lines: ['南浦春来绿一川，', '石桥朱塔两依然。', '年年送客横塘路，', '细雨垂杨系画船。'] },
        ],
      },
      {
        targetName: '州桥', type: '提及', more: 1,
        poems: [
          { title: '州桥', author: '范成大', lines: ['州桥南北是天街，', '父老年年等驾回。', '忍泪失声询使者，', '几时真有六军来。'] },
        ],
      },
    ],
  },
  {
    id: 'zhangyan', name: '张炎', color: '#6090f0', mentioned: 22, gifted: 4, connections: 16, poemCount: 38,
    relations: [
      {
        targetName: '孤雁', type: '提及', more: 1,
        poems: [
          { title: '解连环·孤雁', author: '张炎', lines: ['楚江空晚，', '怅离群万里，', '恍然惊散。', '自顾影、欲下寒塘，', '正沙净草枯，', '水平天远。', '写不成书，', '只寄得、相思一点。', '料因循误了，', '残毡拥雪，', '故人心眼。', '谁怜旅愁荏苒，', '谩长门夜悄，', '锦筝弹怨。', '想伴侣、犹宿芦花，', '也曾念春前，', '去程应转。', '暮雨相呼，', '怕蓦地、玉关重见。', '未羞他、双燕归来，', '画帘半卷。'] },
        ],
      },
      {
        targetName: '感旧', type: '提及', more: 1,
        poems: [
          { title: '八声甘州·记玉关踏雪事清游', author: '张炎', lines: ['记玉关踏雪事清游，', '寒气脆貂裘。', '傍枯林古道，', '长河饮马，', '此意悠悠。', '短梦依然江表，', '老泪洒西州。', '一字无题处，', '落叶都愁。', '载取白云归去，', '问谁留楚佩，', '弄影中洲。', '折芦花赠远，', '零落一身秋。', '向寻常、野桥流水，', '待招来，不是旧沙鸥。', '空怀感，', '有斜阳处，', '却怕登楼。'] },
        ],
      },
    ],
  },
  {
    id: 'fanghui', name: '方回', color: '#f08840', mentioned: 19, gifted: 9, connections: 20, poemCount: 42,
    relations: [
      {
        targetName: '歙州', type: '提及', more: 9,
        poems: [
          { title: '舟行青溪道中入歙十二首 其一', author: '方回', lines: ['蕨拳欲动茗抽芽，', '节近清明路近家。', '五日缓行三百里，', '夹溪随处有桃花。'] },
          { title: '舟行青溪道中入歙十二首 歙州民与睦州民', author: '方回', lines: ['歙州民与睦州民，', '比似吴儿大较贫。', '为问山中有何好，', '山中剩有读书人。'] },
        ],
      },
    ],
  },
  {
    id: 'hezhu', name: '贺铸', color: '#f07070', mentioned: 14, gifted: 56, connections: 31, poemCount: 84,
    relations: [
      {
        targetName: '横塘', type: '提及', more: 1,
        poems: [
          { title: '青玉案·凌波不过横塘路', author: '贺铸', lines: ['凌波不过横塘路，', '但目送、芳尘去。', '锦瑟华年谁与度。', '月桥花院，', '琐窗朱户，', '只有春知处。', '飞云冉冉蘅皋暮，', '彩笔新题断肠句。', '试问闲愁都几许。', '一川烟草，', '满城风絮，', '梅子黄时雨。'] },
        ],
      },
      {
        targetName: '阊门', type: '提及', more: 0,
        poems: [
          { title: '鹧鸪天·重过阊门万事非', author: '贺铸', lines: ['重过阊门万事非，', '同来何事不同归。', '梧桐半死清霜后，', '头白鸳鸯失伴飞。', '原上草，', '露初晞，', '旧栖新垅两依依。', '空床卧听南窗雨，', '谁复挑灯夜补衣。'] },
        ],
      },
    ],
  },
  {
    id: 'zhangxian', name: '张先', color: '#f8a050', mentioned: 12, gifted: 7, connections: 24, poemCount: 60,
    relations: [
      {
        targetName: '嘉禾', type: '提及', more: 1,
        poems: [
          { title: '天仙子·时为嘉禾小倅以病眠不赴府会', author: '张先', lines: ['水调数声持酒听，', '午醉醒来愁未醒。', '送春春去几时回，', '临晚镜，', '伤流景，', '往事后期空记省。', '沙上并禽池上暝，', '云破月来花弄影。', '重重帘幕密遮灯，', '风不定，', '人初静，', '明日落红应满径。'] },
        ],
      },
      {
        targetName: '千秋岁', type: '提及', more: 0,
        poems: [
          { title: '千秋岁·数声鶗鴂', author: '张先', lines: ['数声鶗鴂，', '又报芳菲歇。', '惜春更把残红折。', '雨轻风色暴，', '梅子青时节。', '永丰柳，', '无人尽日花飞雪。', '莫把幺弦拨，', '怨极弦能说。', '天不老，', '情难绝。', '心似双丝网，', '中有千千结。', '夜过也，', '东窗未白凝残月。'] },
        ],
      },
    ],
  },
  {
    id: 'zhoubangyan', name: '周邦彦', color: '#40d090', mentioned: 10, gifted: 8, connections: 18, poemCount: 44,
    relations: [
      {
        targetName: '荷花', type: '提及', more: 1,
        poems: [
          { title: '苏幕遮·燎沉香', author: '周邦彦', lines: ['燎沉香，', '消溽暑。', '鸟雀呼晴，', '侵晓窥檐语。', '叶上初阳干宿雨，', '水面清圆，', '一一风荷举。', '故乡遥，', '何日去。', '家住吴门，', '久作长安旅。', '五月渔郎相忆否。', '小楫轻舟，', '梦入芙蓉浦。'] },
        ],
      },
      {
        targetName: '柳', type: '提及', more: 2,
        poems: [
          { title: '兰陵王·柳', author: '周邦彦', lines: ['柳阴直，', '烟里丝丝弄碧。', '隋堤上、曾见几番，', '拂水飘绵送行色。', '登临望故国，', '谁识、京华倦客。', '长亭路，', '年去岁来，', '应折柔条过千尺。', '闲寻旧踪迹，', '又酒趁哀弦，', '灯照离席。', '梨花榆火催寒食。', '愁一箭风快，', '半篙波暖，', '回头迢递便数驿，', '望人在天北。', '凄恻，', '恨堆积。', '渐别浦萦回，', '津堠岑寂。', '斜阳冉冉春无极。', '念月榭携手，', '露桥闻笛。', '沉思前事，', '似梦里，', '泪暗滴。'] },
        ],
      },
    ],
  },
  {
    id: 'qinguan', name: '秦观', color: '#8fd8f8', mentioned: 8, gifted: 31, connections: 42, poemCount: 120,
    relations: [
      {
        targetName: '七夕', type: '提及', more: 0,
        poems: [
          { title: '鹊桥仙·纤云弄巧', author: '秦观', lines: ['纤云弄巧，', '飞星传恨，', '银汉迢迢暗度。', '金风玉露一相逢，', '便胜却人间无数。', '柔情似水，', '佳期如梦，', '忍顾鹊桥归路。', '两情若是久长时，', '又岂在朝朝暮暮。'] },
        ],
      },
      {
        targetName: '郴州', type: '提及', more: 1,
        poems: [
          { title: '踏莎行·郴州旅舍', author: '秦观', lines: ['雾失楼台，', '月迷津渡，', '桃源望断无寻处。', '可堪孤馆闭春寒，', '杜鹃声里斜阳暮。', '驿寄梅花，', '鱼传尺素，', '砌成此恨无重数。', '郴江幸自绕郴山，', '为谁流下潇湘去。'] },
        ],
      },
      {
        targetName: '春日', type: '提及', more: 0,
        poems: [
          { title: '春日 其一', author: '秦观', lines: ['一夕轻雷落万丝，', '霁光浮瓦碧参差。', '有情芍药含春泪，', '无力蔷薇卧晓枝。'] },
        ],
      },
      {
        targetName: '八六子', type: '提及', more: 0,
        poems: [
          { title: '八六子·倚危亭', author: '秦观', lines: ['倚危亭，', '恨如芳草，', '萋萋刬尽还生。', '念柳外青骢别后，', '水边红袂分时，', '怆然暗惊。', '无端天与娉婷，', '夜月一帘幽梦，', '春风十里柔情。', '怎奈向、欢娱渐随流水，', '素弦声断，', '翠绡香减，', '那堪片片飞花弄晚，', '蒙蒙残雨笼晴。', '正销凝，', '黄鹂又啼数声。'] },
        ],
      },
    ],
  },
  {
    id: 'xinqiji', name: '辛弃疾', color: '#f06060', mentioned: 7, gifted: 10, connections: 46, poemCount: 130,
    relations: [
      {
        targetName: '陈亮', type: '寄', more: 1,
        poems: [
          { title: '破阵子·为陈同甫赋壮词以寄之', author: '辛弃疾', lines: ['醉里挑灯看剑，', '梦回吹角连营。', '八百里分麾下炙，', '五十弦翻塞外声，', '沙场秋点兵。', '马作的卢飞快，', '弓如霹雳弦惊。', '了却君王天下事，', '赢得生前身后名。', '可怜白发生。'] },
        ],
      },
      {
        targetName: '元夕', type: '提及', more: 0,
        poems: [
          { title: '青玉案·元夕', author: '辛弃疾', lines: ['东风夜放花千树，', '更吹落、星如雨。', '宝马雕车香满路。', '凤箫声动，', '玉壶光转，', '一夜鱼龙舞。', '蛾儿雪柳黄金缕，', '笑语盈盈暗香去。', '众里寻他千百度，', '蓦然回首，', '那人却在，', '灯火阑珊处。'] },
        ],
      },
      {
        targetName: '黄沙道', type: '提及', more: 1,
        poems: [
          { title: '西江月·夜行黄沙道中', author: '辛弃疾', lines: ['明月别枝惊鹊，', '清风半夜鸣蝉。', '稻花香里说丰年，', '听取蛙声一片。', '七八个星天外，', '两三点雨山前。', '旧时茅店社林边，', '路转溪桥忽见。'] },
        ],
      },
      {
        targetName: '北固亭', type: '提及', more: 1,
        poems: [
          { title: '永遇乐·京口北固亭怀古', author: '辛弃疾', lines: ['千古江山，', '英雄无觅，', '孙仲谋处。', '舞榭歌台，', '风流总被，', '雨打风吹去。', '斜阳草树，', '寻常巷陌，', '人道寄奴曾住。', '想当年，', '金戈铁马，', '气吞万里如虎。', '元嘉草草，', '封狼居胥，', '赢得仓皇北顾。', '四十三年，', '望中犹记，', '烽火扬州路。', '可堪回首，', '佛狸祠下，', '一片神鸦社鼓。', '凭谁问，', '廉颇老矣，', '尚能饭否。'] },
          { title: '南乡子·登京口北固亭有怀', author: '辛弃疾', lines: ['何处望神州，', '满眼风光北固楼。', '千古兴亡多少事，', '悠悠。', '不尽长江滚滚流。', '年少万兜鍪，', '坐断东南战未休。', '天下英雄谁敌手，', '曹刘。', '生子当如孙仲谋。'] },
        ],
      },
      {
        targetName: '博山', type: '提及', more: 0,
        poems: [
          { title: '丑奴儿·书博山道中壁', author: '辛弃疾', lines: ['少年不识愁滋味，', '爱上层楼。', '爱上层楼，', '为赋新词强说愁。', '而今识尽愁滋味，', '欲说还休。', '欲说还休，', '却道天凉好个秋。'] },
        ],
      },
    ],
  },
  {
    id: 'zenggong', name: '曾巩', color: '#f0e8a0', mentioned: 3, gifted: 45, connections: 35, poemCount: 88,
    relations: [
      {
        targetName: '柳树', type: '提及', more: 0,
        poems: [
          { title: '咏柳', author: '曾巩', lines: ['乱条犹未变初黄，', '倚得东风势便狂。', '解把飞花蒙日月，', '不知天地有清霜。'] },
        ],
      },
      {
        targetName: '城南', type: '提及', more: 0,
        poems: [
          { title: '城南二首 其一', author: '曾巩', lines: ['雨过横塘水满堤，', '乱山高下路东西。', '一番桃李花开尽，', '惟有青青草色齐。'] },
          { title: '城南二首 其二', author: '曾巩', lines: ['水满横塘雨过时，', '一番红景杂花飞。', '送春无限情惆怅，', '身在天涯未得归。'] },
        ],
      },
      {
        targetName: '西楼', type: '提及', more: 1,
        poems: [
          { title: '西楼', author: '曾巩', lines: ['海浪如云去却回，', '北风吹起数声雷。', '朱楼四面钩疏箔，', '卧看千山急雨来。'] },
        ],
      },
    ],
  },
  {
    id: 'zhoumi', name: '周密', color: '#50c878', mentioned: 0, gifted: 12, connections: 14, poemCount: 32,
    relations: [
      {
        targetName: '野步', type: '提及', more: 0,
        poems: [
          { title: '野步', author: '周密', lines: ['麦陇风来翠浪斜，', '草根肥水噪新蛙。', '羡他无事双蝴蝶，', '烂醉东风野草花。'] },
        ],
      },
      {
        targetName: '蓬莱阁', type: '提及', more: 1,
        poems: [
          { title: '一萼红·登蓬莱阁有感', author: '周密', lines: ['步深幽，', '正云黄天淡，', '雪意未全休。', '鉴曲寒沙，', '茂林烟草，', '俯仰千古悠悠。', '岁华晚、飘零渐远，', '谁念我、同载五湖舟。', '磴古松斜，', '崖阴苔老，', '一片清愁。', '回首天涯归梦，', '几魂飞西浦，', '泪洒东州。', '故国山川，', '故园心眼，', '还似王粲登楼。', '最负他、秦鬟妆镜，', '好江山、何事此时游。', '为唤狂吟老监，', '共赋消忧。'] },
        ],
      },
    ],
  },
  {
    id: 'ouyangxiu', name: '欧阳修', color: '#d0e050', mentioned: 0, gifted: 114, connections: 76, poemCount: 240,
    relations: [
      {
        targetName: '丁元珍', type: '酬和', more: 1,
        poems: [
          { title: '戏答元珍', author: '欧阳修', lines: ['春风疑不到天涯，', '二月山城未见花。', '残雪压枝犹有橘，', '冻雷惊笋欲抽芽。', '夜闻归雁生乡思，', '病入新年感物华。', '曾是洛阳花下客，', '野芳虽晚不须嗟。'] },
        ],
      },
      {
        targetName: '滁州', type: '提及', more: 2,
        poems: [
          { title: '别滁', author: '欧阳修', lines: ['花光浓烂柳轻明，', '酌酒花前送我行。', '我亦且如常日醉，', '莫教弦管作离声。'] },
          { title: '丰乐亭游春 其三', author: '欧阳修', lines: ['红树青山日欲斜，', '长郊草色绿无涯。', '游人不管春将老，', '来往亭前踏落花。'] },
        ],
      },
      {
        targetName: '画眉', type: '提及', more: 0,
        poems: [
          { title: '画眉鸟', author: '欧阳修', lines: ['百啭千声随意移，', '山花红紫树高低。', '始知锁向金笼听，', '不及林间自在啼。'] },
          { title: '梦中作', author: '欧阳修', lines: ['夜凉吹笛千山月，', '路暗迷人百种花。', '棋罢不知人换世，', '酒阑无奈客思家。'] },
        ],
      },
    ],
  },
  {
    id: 'liukezhuang', name: '刘克庄', color: '#40c0a0', mentioned: 0, gifted: 10, connections: 34, poemCount: 90,
    relations: [
      {
        targetName: '落梅', type: '提及', more: 1,
        poems: [
          { title: '落梅', author: '刘克庄', lines: ['一片能教一断肠，', '可堪平砌更堆墙。', '飘如迁客来过岭，', '坠似骚人去赴湘。', '乱点莓苔多莫数，', '偶粘衣袖久犹香。', '东风谬掌花权柄，', '却忌孤高不主张。'] },
        ],
      },
      {
        targetName: '莺梭', type: '提及', more: 0,
        poems: [
          { title: '莺梭', author: '刘克庄', lines: ['掷柳迁乔太有情，', '交交时作弄机声。', '洛阳三月花如锦，', '多少工夫织得成。'] },
        ],
      },
      {
        targetName: '方孚若', type: '寄', more: 2,
        poems: [
          { title: '沁园春·梦孚若', author: '刘克庄', lines: ['何处相逢，', '登宝钗楼，', '访铜雀台。', '唤厨人斫就，', '东溟鲸脍，', '圉人呈罢，', '西极龙媒。', '天下英雄，', '使君与操，', '余子谁堪共酒杯。', '车千乘，', '载燕南赵北，', '剑客奇才。', '饮酣画鼓如雷，', '谁信被晨鸡轻唤回。', '叹年光过尽，', '功名未立，', '书生老去，', '机会方来。', '使李将军，', '遇高皇帝，', '万户侯何足道哉。', '披衣起，', '但凄凉感旧，', '慷慨生哀。'] },
        ],
      },
    ],
  },
  {
    id: 'suzhe', name: '苏辙', color: '#ffa0c8', mentioned: 0, gifted: 124, connections: 29, poemCount: 131,
    relations: [
      {
        targetName: '苏轼', type: '寄', more: 2,
        poems: [
          { title: '怀渑池寄子瞻兄', author: '苏辙', lines: ['相携话别郑原上，', '共道长途怕雪泥。', '归骑还寻大梁陌，', '行人已渡古崤西。', '曾为县吏民知否，', '旧宿僧房壁共题。', '遥想独游佳味少，', '无言骓马但鸣嘶。'] },
          { title: '逍遥堂会宿二首 其一', author: '苏辙', lines: ['逍遥堂后千寻木，', '长送中宵风雨声。', '误喜对床寻旧约，', '不知漂泊在彭城。'] },
        ],
      },
      {
        targetName: '西湖', type: '提及', more: 1,
        poems: [
          { title: '游西湖', author: '苏辙', lines: ['闭门不出十年久，', '湖上重游一梦回。', '行过闾阎争问讯，', '忽逢鱼鸟亦惊猜。', '可怜举目非吾党，', '谁与开尊共一杯。', '归去无言掩屏卧，', '古人时向梦中来。'] },
        ],
      },
    ],
  },
  {
    id: 'huangtingjian', name: '黄庭坚', color: '#f2f0ea', mentioned: 0, gifted: 114, connections: 55, poemCount: 227,
    relations: [
      {
        targetName: '苏轼', type: '寄', more: 2,
        poems: [
          { title: '双井茶送子瞻', author: '黄庭坚', lines: ['人间风日不到处，', '天上玉堂森宝书。', '想见东坡旧居士，', '挥毫百斛泻明珠。', '我家江南摘云腴，', '落硙霏霏雪不如。', '为公唤起黄州梦，', '独载扁舟向五湖。'] },
          { title: '跋子瞻和陶诗', author: '黄庭坚', lines: ['子瞻谪岭南，', '时宰欲杀之。', '饱吃惠州饭，', '细和渊明诗。', '彭泽千载人，', '东坡百世士。', '出处虽不同，', '风味乃相似。'] },
        ],
      },
      {
        targetName: '黄几复', type: '寄', more: 0,
        poems: [
          { title: '寄黄几复', author: '黄庭坚', lines: ['我居北海君南海，', '寄雁传书谢不能。', '桃李春风一杯酒，', '江湖夜雨十年灯。', '持家但有四立壁，', '治病不蕲三折肱。', '想见读书头已白，', '隔溪猿哭瘴溪藤。'] },
        ],
      },
      {
        targetName: '王郎', type: '寄', more: 1,
        poems: [
          { title: '送王郎', author: '黄庭坚', lines: ['酌君以蒲城桑落之酒，', '泛君以湘累秋菊之兰。', '赠君以黟川点漆之墨，', '送君以阳关堕泪之声。', '酒浇胸次之磊块，', '菊制短世之颓龄。', '墨以传万古文章之印，', '歌以写一家兄弟之情。', '江山千里俱头白，', '骨肉十年终眼青。'] },
        ],
      },
      {
        targetName: '快阁', type: '提及', more: 1,
        poems: [
          { title: '登快阁', author: '黄庭坚', lines: ['痴儿了却公家事，', '快阁东西倚晚晴。', '落木千山天远大，', '澄江一道月分明。', '朱弦已为佳人绝，', '青眼聊因美酒横。', '万里归船弄长笛，', '此心吾与白鸥盟。'] },
          { title: '雨中登岳阳楼望君山二首 其一', author: '黄庭坚', lines: ['投荒万死鬓毛斑，', '生入瞿塘滟滪关。', '未到江南先一笑，', '岳阳楼上对君山。'] },
        ],
      },
    ],
  },
  {
    id: 'simaguang', name: '司马光', color: '#6fe8e0', mentioned: 0, gifted: 157, connections: 52, poemCount: 140,
    relations: [
      {
        targetName: '王安石', type: '提及', more: 1,
        poems: [
          { title: '客中初夏', author: '司马光', lines: ['四月清和雨乍晴，', '南山当户转分明。', '更无柳絮因风起，', '惟有葵花向日倾。'] },
        ],
      },
      {
        targetName: '闲居', type: '提及', more: 0,
        poems: [
          { title: '闲居', author: '司马光', lines: ['故人通贵绝相过，', '门外真堪置雀罗。', '我已幽慵僮更懒，', '雨来春草一番多。'] },
        ],
      },
    ],
  },
  {
    id: 'fanzhongyan', name: '范仲淹', color: '#70d080', mentioned: 0, gifted: 42, connections: 38, poemCount: 96,
    relations: [
      {
        targetName: '江上', type: '提及', more: 0,
        poems: [
          { title: '江上渔者', author: '范仲淹', lines: ['江上往来人，', '但爱鲈鱼美。', '君看一叶舟，', '出没风波里。'] },
        ],
      },
      {
        targetName: '野色', type: '提及', more: 1,
        poems: [
          { title: '野色', author: '范仲淹', lines: ['非烟亦非雾，', '幂幂映楼台。', '白鸟忽点破，', '残阳还照开。', '肯随芳草歇，', '疑逐远帆来。', '谁会山公意，', '登高醉始回。'] },
        ],
      },
      {
        targetName: '边塞', type: '提及', more: 0,
        poems: [
          { title: '渔家傲·秋思', author: '范仲淹', lines: ['塞下秋来风景异，', '衡阳雁去无留意。', '四面边声连角起，', '千嶂里，', '长烟落日孤城闭。', '浊酒一杯家万里，', '燕然未勒归无计。', '羌管悠悠霜满地，', '人不寐，', '将军白发征夫泪。'] },
        ],
      },
    ],
  },
  {
    id: 'wentianxiang', name: '文天祥', color: '#e090f0', mentioned: 0, gifted: 73, connections: 25, poemCount: 30,
    relations: [
      {
        targetName: '彭城', type: '提及', more: 1,
        poems: [
          { title: '彭城行', author: '文天祥', lines: ['连山四围合，', '吕梁贯其中。', '河南大都会，', '故有项王宫。', '晋牧连杨豫，', '虎视北方雄。', '唐时燕子楼，', '风流张建封。', '西望睢阳城，', '只与汴水通。', '太平黄楼赋，', '尚能想遗风。'] },
        ],
      },
      {
        targetName: '零丁洋', type: '提及', more: 0,
        poems: [
          { title: '过零丁洋', author: '文天祥', lines: ['辛苦遭逢起一经，', '干戈寥落四周星。', '山河破碎风飘絮，', '身世浮沉雨打萍。', '惶恐滩头说惶恐，', '零丁洋里叹零丁。', '人生自古谁无死，', '留取丹心照汗青。'] },
        ],
      },
      {
        targetName: '金陵驿', type: '提及', more: 1,
        poems: [
          { title: '金陵驿二首 其一', author: '文天祥', lines: ['草合离宫转夕晖，', '孤云飘泊复何依。', '山河风景元无异，', '城郭人民半已非。', '满地芦花和我老，', '旧家燕子傍谁飞。', '从今别却江南路，', '化作啼鹃带血归。'] },
        ],
      },
      {
        targetName: '扬子江', type: '提及', more: 0,
        poems: [
          { title: '扬子江', author: '文天祥', lines: ['几日随风北海游，', '回从扬子大江头。', '臣心一片磁针石，', '不指南方不肯休。'] },
        ],
      },
    ],
  },
  {
    id: 'meiyaochen', name: '梅尧臣', color: '#50f0d8', mentioned: 0, gifted: 11, connections: 64, poemCount: 210,
    relations: [
      {
        targetName: '鲁山', type: '提及', more: 1,
        poems: [
          { title: '鲁山山行', author: '梅尧臣', lines: ['适与野情惬，', '千山高复低。', '好峰随处改，', '幽径独行迷。', '霜落熊升树，', '林空鹿饮溪。', '人家在何许，', '云外一声鸡。'] },
        ],
      },
      {
        targetName: '东溪', type: '提及', more: 0,
        poems: [
          { title: '东溪', author: '梅尧臣', lines: ['野凫眠岸有闲意，', '老树着花无丑枝。', '短短蒲茸齐似剪，', '平平沙石净于筛。', '情虽不厌住不得，', '薄暮归来车马疲。'] },
        ],
      },
      {
        targetName: '陶者', type: '提及', more: 2,
        poems: [
          { title: '陶者', author: '梅尧臣', lines: ['陶尽门前土，', '屋上无片瓦。', '十指不沾泥，', '鳞鳞居大厦。'] },
          { title: '田家', author: '梅尧臣', lines: ['南山尝种豆，', '碎荚落风雨。', '空收一束萁，', '无物充煎釜。'] },
        ],
      },
    ],
  },
  {
    id: 'hanwei', name: '韩维', color: '#e8e8e8', mentioned: 0, gifted: 9, connections: 21, poemCount: 52,
    relations: [
      {
        targetName: '欧阳修', type: '酬和', more: 4,
        poems: [
          { title: '和永叔雪', author: '韩维', lines: ['浴凤池边雪舞风，', '题诗高揖杜陵翁。', '怀人共惜车音断，', '对酒须论盏底空。', '授简久虚梁苑候，', '引舟谁过剡溪中。', '今朝白雪闻君咏，', '千载风流未览穷。'] },
        ],
      },
      {
        targetName: '梅尧臣', type: '酬和', more: 6,
        poems: [
          { title: '和圣俞斗山鹊', author: '韩维', lines: ['禀此分斗姿，', '用舍在所激。', '翻跳巧相中，', '一败躯命掷。', '晨鸡鸣不渝，', '霜隼时乃击。', '既无一二效，', '岂不愧肉食。'] },
          { title: '和圣俞逢羊', author: '韩维', lines: ['雉以媒就获，', '鹿以由见羁。', '物情非本然，', '实自巧者为。', '惟人莫或使，', '势利中夺移。', '朝游固金石，', '暮变险阱机。', '世路有如此，', '君无独羊悲。'] },
        ],
      },
    ],
  },
  {
    id: 'liuchang', name: '刘敞', color: '#d0e0f0', mentioned: 0, gifted: 8, connections: 19, poemCount: 46,
    relations: [
      {
        targetName: '欧阳修', type: '寄', more: 3,
        poems: [
          { title: '游平山堂寄欧阳永叔内翰', author: '刘敞', lines: ['芜城此地远人寰，', '尽借江南万叠山。', '水气横浮飞鸟外，', '岚光平堕酒杯间。', '主人寄赏来何暮，', '游子销忧醉不还。', '无限秋风桂枝老，', '淮王先去可能攀。'] },
          { title: '逢永叔', author: '刘敞', lines: ['绝域逢君喜暂留，', '举杯相属问刀头。', '久持汉节旄空尽，', '独拜穹庐死可羞。', '醉里岁华惊易老，', '愁边沟水怆分流。', '玉关生入知无恨，', '不愿张骞博望侯。'] },
        ],
      },
      {
        targetName: '梅尧臣', type: '酬和', more: 2,
        poems: [
          { title: '和圣俞逢羊', author: '刘敞', lines: ['道旁逢群羊，', '问羊将何之。', '朝供大官膳，', '踯躅未自知。', '觳觫此何罪，', '无乃刍豢为。', '肥躯一报德，', '鼎俎安可辞。', '宁辱泥涂中，', '故人所以悲。'] },
        ],
      },
    ],
  },
  {
    id: 'guoxiangzheng', name: '郭祥正', color: '#e8d060', mentioned: 0, gifted: 7, connections: 17, poemCount: 40,
    relations: [
      {
        targetName: '苏轼', type: '寄', more: 2,
        poems: [
          { title: '寄东坡先生自朱崖量移合浦', author: '郭祥正', lines: ['君恩浩荡似阳春，', '海外移来住海滨。', '莫向沙边弄明月，', '夜深无数采珠人。'] },
        ],
      },
      {
        targetName: '王安石', type: '酬和', more: 1,
        poems: [
          { title: '追和李白登金陵凤凰台二首 其二', author: '郭祥正', lines: ['高台不见凤凰游，', '望望青天入海流。', '舞罢翠娥同去国，', '战残白骨尚盈丘。', '风摇落日催行棹，', '潮卷新沙换故洲。', '结绮临春无觅处，', '年年芳草向人愁。'] },
        ],
      },
      {
        targetName: '隐者', type: '提及', more: 1,
        poems: [
          { title: '访隐者', author: '郭祥正', lines: ['一径沿崖踏苍壁，', '半坞寒云抱泉石。', '山翁酒熟不出门，', '残花满地无人迹。'] },
        ],
      },
    ],
  },
  {
    id: 'wangshipeng', name: '王十朋', color: '#f0e0b0', mentioned: 0, gifted: 6, connections: 15, poemCount: 36,
    relations: [
      {
        targetName: '胡铨', type: '酬和', more: 2,
        poems: [
          { title: '次韵胡秘监酴醾', author: '王十朋', lines: ['红紫纷争先，', '酴醾分甘晚。', '谁栽群玉府，', '童童翠张幰。', '华共芸芬香，', '韵随官逸远。', '奚用燃青藜，', '端能照书苑。', '先生海上归，', '平步到蓬巘。', '招邀饮醇酎，', '刚肠出清婉。', '遥思吴宫魂，', '故作楚辞挽。', '勿为花所留，', '兴尽要知返。'] },
          { title: '胡邦衡以集英殿修撰知漳州正人起废有识相贺诗以志喜', author: '王十朋', lines: ['左右同时两舍人，', '莫年得郡偶为邻。', '泉山久著痴顽老，', '漳浦新除正直人。', '热撰可能酬壮节，', '炎州聊复屈朱轮。', '拾遗补过须公辈，', '汲黯行归侍紫宸。'] },
        ],
      },
      {
        targetName: '红梅', type: '提及', more: 1,
        poems: [
          { title: '红梅', author: '王十朋', lines: ['桃李莫相妒，', '夭姿元不同。', '犹余雪霜态，', '未肯十分红。'] },
        ],
      },
    ],
  },
  {
    id: 'zhaofan', name: '赵蕃', color: '#a0c8f0', mentioned: 0, gifted: 5, connections: 13, poemCount: 30,
    relations: [
      {
        targetName: '韩淲', type: '寄', more: 9,
        poems: [
          { title: '寄韩仲止主簿', author: '赵蕃', lines: ['病卧凄然寂寞滨，', '既亲且故几何人。', '如君父子风流似，', '宁复可疏当可亲。'] },
        ],
      },
      {
        targetName: '朱熹', type: '寄', more: 2,
        poems: [
          { title: '呈晦庵二首 其一', author: '赵蕃', lines: ['一纸书来遂隔年，', '江湖远地水连天。', '纷纷横路又逢此，', '凛凛岁寒嗟独然。', '学道终朝世勋业，', '抄经暂了佛因缘。', '白头下士重来拜，', '依旧鸥汀鹭渚边。'] },
          { title: '呈晦庵二首 其二', author: '赵蕃', lines: ['不上龙门五过秋，', '袖诗还是觅扁舟。', '胡然贫病祇如昔，', '听尔行藏随所由。', '未厌室人能我谪，', '故防知己作公羞。', '孟郊五十酸寒尉，', '想见溧阳神尚游。'] },
        ],
      },
    ],
  },
  {
    id: 'hanbiao', name: '韩淲', color: '#c0b0e0', mentioned: 0, gifted: 5, connections: 11, poemCount: 26,
    relations: [
      {
        targetName: '赵蕃', type: '酬和', more: 9,
        poems: [
          { title: '昌甫携渭南诗见过', author: '韩淲', lines: ['长笛残星赵倚楼，', '吟边供断一生愁。', '渭南作尉诚微宦，', '江上逢人忆远游。', '风景不因今古异，', '琴樽宁与是非休。', '章泉传到涧泉上，', '凉意满天河影秋。'] },
          { title: '次韵昌甫分遗乌石茶', author: '韩淲', lines: ['茶经空烂读，', '读罢出溪头。', '竹杖虽流憩，', '藜床复倦投。', '寻思煎以吃，', '展转卧而游。', '乌石瓶能好，', '瓯牺底用忧。'] },
        ],
      },
      {
        targetName: '潘邠老', type: '提及', more: 1,
        poems: [
          { title: '风雨中诵潘邠老诗', author: '韩淲', lines: ['满城风雨近重阳，', '独上吴山看大江。', '老眼昏花忘远近，', '壮心轩豁任行藏。', '从来野色供吟兴，', '是处秋光合断肠。', '今古骚人乃如许，', '暮潮声卷入苍茫。'] },
        ],
      },
    ],
  },
  {
    id: 'hukui', name: '胡揆', color: '#e0e0e8', mentioned: 0, gifted: 4, connections: 9, poemCount: 18,
    relations: [
      {
        targetName: '刘敞', type: '提及', more: 0,
        poems: [
          { title: '断句', author: '胡揆', lines: ['弄珠解佩风流古，', '缓带轻裘道味闲。'] },
        ],
      },
    ],
  },
  {
    id: 'zhangshi', name: '张栻', color: '#e8c0a0', mentioned: 0, gifted: 4, connections: 12, poemCount: 28,
    relations: [
      {
        targetName: '朱熹', type: '酬和', more: 9,
        poems: [
          { title: '和元晦咏画壁', author: '张栻', lines: ['松杉夹路自清阴，', '溪水有源谁复寻。', '忽见画图开四壁，', '悠然端亦慰余心。'] },
          { title: '城南杂咏二十首 纳湖', author: '张栻', lines: ['原原锡潭水，', '汇此南城阴。', '岸花有开落，', '水盈无浅深。'] },
          { title: '城南杂咏二十首 书楼', author: '张栻', lines: ['高楼出林杪，', '中有千载书。', '昔人不可见，', '倚槛意何如。'] },
        ],
      },
      {
        targetName: '立春', type: '提及', more: 0,
        poems: [
          { title: '立春偶成', author: '张栻', lines: ['律回岁晚冰霜少，', '春到人间草木知。', '便觉眼前生意满，', '东风吹水绿参差。'] },
        ],
      },
    ],
  },
  {
    id: 'wengyong', name: '翁泳', color: '#b0e0b0', mentioned: 0, gifted: 3, connections: 6, poemCount: 12,
    relations: [
      {
        targetName: '赏心亭', type: '提及', more: 0,
        poems: [
          { title: '陪周溪园登赏心亭', author: '翁泳', lines: ['建业城楼四面窗，', '赏心胜处冠南邦。', '石头西峙云藏寺，', '水面南浮月满江。', '故国秋深人自老，', '新河夜遁虏谁降。', '高人登眺同怀古，', '忽有飞来白鹭双。'] },
        ],
      },
    ],
  },
  {
    id: 'zhanglai', name: '张耒', color: '#e8b4b8', mentioned: 0, gifted: 8, connections: 16, poemCount: 44,
    relations: [
      {
        targetName: '嵩山', type: '提及', more: 1,
        poems: [
          { title: '初见嵩山', author: '张耒', lines: ['年来鞍马困尘埃，', '赖有青山豁我怀。', '日暮北风吹雨去，', '数峰清瘦出云来。'] },
        ],
      },
    ],
  },
  {
    id: 'chaobuzhi', name: '晁补之', color: '#a8d8ea', mentioned: 0, gifted: 7, connections: 14, poemCount: 40,
    relations: [
      {
        targetName: '东皋', type: '提及', more: 1,
        poems: [
          { title: '摸鱼儿·东皋寓居', author: '晁补之', lines: ['买陂塘、旋栽杨柳，', '依稀淮岸江浦。', '东皋嘉雨新痕涨，', '沙觜鹭来鸥聚。', '堪爱处，', '最好是、一川夜月光流渚。', '无人独舞。', '任翠幄张天，', '柔茵藉地，', '酒尽未能去。', '青绫被，', '莫忆金闺故步。', '儒冠曾把身误。', '弓刀千骑成何事，', '荒了邵平瓜圃。', '君试觑，', '满青镜、星星鬓影今如许。', '功名浪语。', '便似得班超，', '封侯万里，', '归计恐迟暮。'] },
        ],
      },
    ],
  },
  {
    id: 'chenshidao', name: '陈师道', color: '#c39bd3', mentioned: 0, gifted: 7, connections: 15, poemCount: 38,
    relations: [
      {
        targetName: '三子', type: '寄', more: 1,
        poems: [
          { title: '示三子', author: '陈师道', lines: ['去远即相忘，', '归近不可忍。', '儿女已在眼，', '眉目略不省。', '喜极不得语，', '泪尽方一哂。', '了知不是梦，', '忽忽心未稳。'] },
        ],
      },
      {
        targetName: '读书', type: '提及', more: 0,
        poems: [
          { title: '绝句·书当快意读易尽', author: '陈师道', lines: ['书当快意读易尽，', '客有可人期不来。', '世事相违每如此，', '好怀百岁几回开。'] },
        ],
      },
    ],
  },
  {
    id: 'lizhiyi', name: '李之仪', color: '#85c1e9', mentioned: 0, gifted: 6, connections: 10, poemCount: 24,
    relations: [
      {
        targetName: '长江', type: '提及', more: 0,
        poems: [
          { title: '卜算子·我住长江头', author: '李之仪', lines: ['我住长江头，', '君住长江尾。', '日日思君不见君，', '共饮长江水。', '此水几时休，', '此恨何时已。', '只愿君心似我心，', '定不负相思意。'] },
        ],
      },
    ],
  },
  {
    id: 'mifu', name: '米芾', color: '#f0b27a', mentioned: 0, gifted: 6, connections: 12, poemCount: 28,
    relations: [
      {
        targetName: '望海楼', type: '提及', more: 1,
        poems: [
          { title: '望海楼', author: '米芾', lines: ['云间铁瓮近青天，', '缥缈飞楼百尺连。', '三峡江声流笔底，', '六朝帆影落樽前。', '几番画角催红日，', '无事沧州起白烟。', '忽忆赏心何处是，', '春风秋月两茫然。'] },
        ],
      },
    ],
  },
  {
    id: 'chenyuyi', name: '陈与义', color: '#82e0aa', mentioned: 0, gifted: 5, connections: 13, poemCount: 32,
    relations: [
      {
        targetName: '襄邑', type: '提及', more: 1,
        poems: [
          { title: '襄邑道中', author: '陈与义', lines: ['飞花两岸照船红，', '百里榆堤半日风。', '卧看满天云不动，', '不知云与我俱东。'] },
        ],
      },
      {
        targetName: '伤春', type: '提及', more: 0,
        poems: [
          { title: '伤春', author: '陈与义', lines: ['庙堂无策可平戎，', '坐使甘泉照夕烽。', '初怪上都闻战马，', '岂知穷海看飞龙。', '孤臣霜发三千丈，', '每岁烟花一万重。', '稍喜长沙向延阁，', '疲兵敢犯犬羊锋。'] },
        ],
      },
    ],
  },
  {
    id: 'lvbenzhong', name: '吕本中', color: '#f1948a', mentioned: 0, gifted: 5, connections: 11, poemCount: 26,
    relations: [
      {
        targetName: '江楼月', type: '提及', more: 1,
        poems: [
          { title: '采桑子·恨君不似江楼月', author: '吕本中', lines: ['恨君不似江楼月，', '南北东西。', '南北东西，', '只有相随无别离。', '恨君却似江楼月，', '暂满还亏。', '暂满还亏，', '待得团圆是几时。'] },
        ],
      },
    ],
  },
  {
    id: 'youmao', name: '尤袤', color: '#d7bde2', mentioned: 0, gifted: 5, connections: 10, poemCount: 22,
    relations: [
      {
        targetName: '雪', type: '提及', more: 1,
        poems: [
          { title: '雪', author: '尤袤', lines: ['睡觉不知雪，', '但惊窗户明。', '飞花厚一尺，', '和月照三更。'] },
        ],
      },
    ],
  },
  {
    id: 'xuji', name: '徐玑', color: '#a3e4d7', mentioned: 0, gifted: 4, connections: 7, poemCount: 16,
    relations: [
      {
        targetName: '新凉', type: '提及', more: 1,
        poems: [
          { title: '新凉', author: '徐玑', lines: ['水满田畴稻叶齐，', '日光穿树晓烟低。', '黄莺也爱新凉好，', '飞过青山影里啼。'] },
        ],
      },
    ],
  },
  {
    id: 'xuzhao', name: '徐照', color: '#aed6f1', mentioned: 0, gifted: 4, connections: 7, poemCount: 16,
    relations: [
      {
        targetName: '舟上', type: '提及', more: 1,
        poems: [
          { title: '舟上', author: '徐照', lines: ['小船停桨逐潮还，', '四五人家住一湾。', '贪看晓光侵月色，', '不知云气失前山。'] },
        ],
      },
    ],
  },
  {
    id: 'zhaoshixiu', name: '赵师秀', color: '#abebc6', mentioned: 0, gifted: 6, connections: 8, poemCount: 18,
    relations: [
      {
        targetName: '约客', type: '寄', more: 1,
        poems: [
          { title: '约客', author: '赵师秀', lines: ['黄梅时节家家雨，', '青草池塘处处蛙。', '有约不来过夜半，', '闲敲棋子落灯花。'] },
        ],
      },
    ],
  },
  {
    id: 'daifugu', name: '戴复古', color: '#f5b7b1', mentioned: 0, gifted: 6, connections: 12, poemCount: 30,
    relations: [
      {
        targetName: '江村', type: '提及', more: 1,
        poems: [
          { title: '江村晚眺', author: '戴复古', lines: ['江头落日照平沙，', '潮退渔船阁岸斜。', '白鸟一双临水立，', '见人惊起入芦花。'] },
        ],
      },
    ],
  },
  {
    id: 'shidazu', name: '史达祖', color: '#d2b4de', mentioned: 0, gifted: 4, connections: 9, poemCount: 20,
    relations: [
      {
        targetName: '燕', type: '提及', more: 1,
        poems: [
          { title: '双双燕·咏燕', author: '史达祖', lines: ['过春社了，', '度帘幕中间，', '去年尘冷。', '差池欲住，', '试入旧巢相并。', '还相雕梁藻井，', '又软语、商量不定。', '飘然快拂花梢，', '翠尾分开红影。', '芳径，', '芹泥雨润。', '爱贴地争飞，', '竞夸轻俊。', '红楼归晚，', '看足柳昏花暝。', '应自栖香正稳，', '便忘了、天涯芳信。', '愁损翠黛双蛾，', '日日画阑独凭。'] },
        ],
      },
    ],
  },
  {
    id: 'wuwenying', name: '吴文英', color: '#f9e79f', mentioned: 0, gifted: 5, connections: 10, poemCount: 22,
    relations: [
      {
        targetName: '清明', type: '提及', more: 2,
        poems: [
          { title: '风入松·听风听雨过清明', author: '吴文英', lines: ['听风听雨过清明，', '愁草瘗花铭。', '楼前绿暗分携路，', '一丝柳、一寸柔情。', '料峭春寒中酒，', '交加晓梦啼莺。', '西园日日扫林亭，', '依旧赏新晴。', '黄蜂频扑秋千索，', '有当时、纤手香凝。', '惆怅双鸳不到，', '幽阶一夜苔生。'] },
        ],
      },
    ],
  },
  {
    id: 'jiangjie', name: '蒋捷', color: '#a9cce3', mentioned: 0, gifted: 4, connections: 8, poemCount: 18,
    relations: [
      {
        targetName: '听雨', type: '提及', more: 1,
        poems: [
          { title: '虞美人·听雨', author: '蒋捷', lines: ['少年听雨歌楼上，', '红烛昏罗帐。', '壮年听雨客舟中，', '江阔云低、断雁叫西风。', '而今听雨僧庐下，', '鬓已星星也。', '悲欢离合总无情，', '一任阶前、点滴到天明。'] },
        ],
      },
    ],
  },
  {
    id: 'chenliang', name: '陈亮', color: '#f5b041', mentioned: 0, gifted: 6, connections: 11, poemCount: 26,
    relations: [
      {
        targetName: '章德茂', type: '寄', more: 1,
        poems: [
          { title: '水调歌头·送章德茂大卿使虏', author: '陈亮', lines: ['不见南师久，', '谩说北群空。', '当场只手，', '毕竟还我万夫雄。', '自笑堂堂汉使，', '得似洋洋河水，', '依旧只流东。', '且复穹庐拜，', '会向藁街逢。', '尧之都，', '舜之壤，', '禹之封。', '于中应有，', '一个半个耻臣戎。', '万里腥膻如许，', '千古英灵安在，', '磅礴几时通。', '胡运何须问，', '赫日自当中。'] },
        ],
      },
    ],
  },
  {
    id: 'xiefangde', name: '谢枋得', color: '#d5dbdb', mentioned: 0, gifted: 5, connections: 8, poemCount: 18,
    relations: [
      {
        targetName: '武夷山', type: '提及', more: 1,
        poems: [
          { title: '武夷山中', author: '谢枋得', lines: ['十年无梦得还家，', '独立青峰野水涯。', '天地寂寥山雨歇，', '几生修得到梅花。'] },
        ],
      },
    ],
  },
  {
    id: 'linjingxi', name: '林景熙', color: '#a9dfbf', mentioned: 0, gifted: 3, connections: 7, poemCount: 16,
    relations: [
      {
        targetName: '山窗', type: '提及', more: 1,
        poems: [
          { title: '山窗新糊有故朝封事稿阅之有感', author: '林景熙', lines: ['偶伴孤云宿岭东，', '四山欲雪地炉红。', '何人一纸防秋疏，', '却与山窗障北风。'] },
        ],
      },
    ],
  },
  {
    id: 'xieao', name: '谢翱', color: '#e6b0aa', mentioned: 0, gifted: 4, connections: 7, poemCount: 15,
    relations: [
      {
        targetName: '文天祥', type: '寄', more: 1,
        poems: [
          { title: '西台哭所思', author: '谢翱', lines: ['残年哭知己，', '白日下荒台。', '泪落吴江水，', '随潮到海回。', '故衣犹染碧，', '后土不怜才。', '未老山中客，', '唯应赋八哀。'] },
        ],
      },
    ],
  },
];

// 宋代关系边（基于真实唱和/交游）
const E = (a: string, b: string): GraphEdge => ({ a, b });
export const SONG_EDGES: GraphEdge[] = [
  E('sushi', 'suzhe'), E('sushi', 'huangtingjian'), E('sushi', 'qinguan'), E('sushi', 'wanganshi'),
  E('sushi', 'zhangxian'), E('sushi', 'ouyangxiu'), E('sushi', 'guoxiangzheng'), E('sushi', 'liuchang'),
  E('sushi', 'hezhu'), E('sushi', 'meiyaochen'),
  E('suzhe', 'huangtingjian'), E('suzhe', 'zhangxian'),
  E('huangtingjian', 'qinguan'), E('huangtingjian', 'hezhu'), E('huangtingjian', 'guoxiangzheng'),
  E('wanganshi', 'simaguang'), E('wanganshi', 'ouyangxiu'), E('wanganshi', 'meiyaochen'),
  E('wanganshi', 'zenggong'), E('wanganshi', 'hanwei'), E('wanganshi', 'liuchang'), E('wanganshi', 'guoxiangzheng'),
  E('simaguang', 'hanwei'), E('simaguang', 'liuchang'),
  E('ouyangxiu', 'meiyaochen'), E('ouyangxiu', 'zenggong'), E('ouyangxiu', 'fanzhongyan'),
  E('ouyangxiu', 'hanwei'), E('ouyangxiu', 'liuchang'), E('ouyangxiu', 'zhangxian'),
  E('meiyaochen', 'hanwei'), E('meiyaochen', 'liuchang'), E('meiyaochen', 'fanzhongyan'), E('meiyaochen', 'guoxiangzheng'),
  E('fanzhongyan', 'hanwei'),
  E('hezhu', 'zhoubangyan'), E('hezhu', 'qinguan'),
  E('suzhe', 'wanganshi'), E('zhangxian', 'meiyaochen'),
  E('jiangkui', 'yangwanli'), E('jiangkui', 'xinqiji'),
  E('luyou', 'yangwanli'), E('luyou', 'fanchengda'), E('luyou', 'zhuxi'), E('luyou', 'xinqiji'),
  E('luyou', 'wangshipeng'), E('luyou', 'hukui'),
  E('yangwanli', 'fanchengda'), E('yangwanli', 'zhuxi'), E('yangwanli', 'zhangshi'), E('yangwanli', 'hukui'),
  E('yangwanli', 'wangshipeng'), E('yangwanli', 'zhaofan'),
  E('fanchengda', 'zhuxi'), E('fanchengda', 'jiangkui'),
  E('zhuxi', 'zhangshi'), E('zhuxi', 'xinqiji'), E('zhuxi', 'zhaofan'), E('zhuxi', 'hanbiao'), E('zhuxi', 'hukui'),
  E('xinqiji', 'liukezhuang'),
  E('wentianxiang', 'liukezhuang'), E('wentianxiang', 'fanghui'),
  E('jiangkui', 'zhangyan'),
  E('zhangyan', 'zhoumi'),
  E('liukezhuang', 'fanghui'),
  E('zhaofan', 'hanbiao'),
  E('meiyaochen', 'wengyong'), E('liuchang', 'wengyong'),
  E('sushi', 'zhanglai'), E('huangtingjian', 'zhanglai'),
  E('sushi', 'chaobuzhi'), E('huangtingjian', 'chaobuzhi'),
  E('sushi', 'chenshidao'), E('huangtingjian', 'chenshidao'),
  E('sushi', 'lizhiyi'), E('sushi', 'mifu'),
  E('chenyuyi', 'lvbenzhong'), E('chenshidao', 'lvbenzhong'),
  E('youmao', 'yangwanli'), E('youmao', 'luyou'), E('youmao', 'fanchengda'),
  E('xuji', 'xuzhao'), E('xuji', 'zhaoshixiu'), E('xuzhao', 'zhaoshixiu'),
  E('daifugu', 'luyou'), E('daifugu', 'liukezhuang'),
  E('shidazu', 'jiangkui'),
  E('wuwenying', 'zhoumi'),
  E('jiangjie', 'zhangyan'),
  E('chenliang', 'xinqiji'),
  E('xiefangde', 'wentianxiang'),
  E('linjingxi', 'xieao'), E('xieao', 'wentianxiang'),
];
