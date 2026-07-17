import type { Poet, GraphEdge } from '../types';

// 唐代视图：视频未展示，提供一套规模较小的真实数据。
export const TANG_POETS: Poet[] = [
  {
    id: 'libai', name: '李白', color: '#ffd94d', mentioned: 220, gifted: 150, connections: 87, poemCount: 320,
    relations: [
      {
        targetName: '汪伦', type: '寄', more: 0,
        poems: [
          { title: '赠汪伦', author: '李白', lines: ['李白乘舟将欲行，', '忽闻岸上踏歌声。', '桃花潭水深千尺，', '不及汪伦送我情。'] },
        ],
      },
      {
        targetName: '孟浩然', type: '寄', more: 2,
        poems: [
          { title: '黄鹤楼送孟浩然之广陵', author: '李白', lines: ['故人西辞黄鹤楼，', '烟花三月下扬州。', '孤帆远影碧空尽，', '唯见长江天际流。'] },
        ],
      },
      {
        targetName: '王昌龄', type: '寄', more: 1,
        poems: [
          { title: '闻王昌龄左迁龙标遥有此寄', author: '李白', lines: ['杨花落尽子规啼，', '闻道龙标过五溪。', '我寄愁心与明月，', '随君直到夜郎西。'] },
        ],
      },
      {
        targetName: '庐山', type: '提及', more: 1,
        poems: [
          { title: '望庐山瀑布 其二', author: '李白', lines: ['日照香炉生紫烟，', '遥看瀑布挂前川。', '飞流直下三千尺，', '疑是银河落九天。'] },
          { title: '静夜思', author: '李白', lines: ['床前明月光，', '疑是地上霜。', '举头望明月，', '低头思故乡。'] },
        ],
      },
    ],
  },
  {
    id: 'dufu', name: '杜甫', color: '#6090f0', mentioned: 260, gifted: 180, connections: 102, poemCount: 410,
    relations: [
      {
        targetName: '李白', type: '寄', more: 3,
        poems: [
          { title: '赠李白', author: '杜甫', lines: ['秋来相顾尚飘蓬，', '未就丹砂愧葛洪。', '痛饮狂歌空度日，', '飞扬跋扈为谁雄。'] },
          { title: '春日忆李白', author: '杜甫', lines: ['白也诗无敌，', '飘然思不群。', '清新庾开府，', '俊逸鲍参军。', '渭北春天树，', '江东日暮云。', '何时一樽酒，', '重与细论文。'] },
        ],
      },
      {
        targetName: '李龟年', type: '提及', more: 0,
        poems: [
          { title: '江南逢李龟年', author: '杜甫', lines: ['岐王宅里寻常见，', '崔九堂前几度闻。', '正是江南好风景，', '落花时节又逢君。'] },
        ],
      },
      {
        targetName: '家国', type: '提及', more: 4,
        poems: [
          { title: '春望', author: '杜甫', lines: ['国破山河在，', '城春草木深。', '感时花溅泪，', '恨别鸟惊心。', '烽火连三月，', '家书抵万金。', '白头搔更短，', '浑欲不胜簪。'] },
          { title: '登高', author: '杜甫', lines: ['风急天高猿啸哀，', '渚清沙白鸟飞回。', '无边落木萧萧下，', '不尽长江滚滚来。', '万里悲秋常作客，', '百年多病独登台。', '艰难苦恨繁霜鬓，', '潦倒新停浊酒杯。'] },
          { title: '月夜忆舍弟', author: '杜甫', lines: ['戍鼓断人行，', '边秋一雁声。', '露从今夜白，', '月是故乡明。', '有弟皆分散，', '无家问死生。', '寄书长不达，', '况乃未休兵。'] },
        ],
      },
    ],
  },
  {
    id: 'baijuyi', name: '白居易', color: '#60d8f0', mentioned: 150, gifted: 200, connections: 76, poemCount: 380,
    relations: [
      {
        targetName: '元稹', type: '寄', more: 4,
        poems: [
          { title: '问刘十九', author: '白居易', lines: ['绿蚁新醅酒，', '红泥小火炉。', '晚来天欲雪，', '能饮一杯无。'] },
        ],
      },
      {
        targetName: '钱塘湖', type: '提及', more: 2,
        poems: [
          { title: '钱塘湖春行', author: '白居易', lines: ['孤山寺北贾亭西，', '水面初平云脚低。', '几处早莺争暖树，', '谁家新燕啄春泥。', '乱花渐欲迷人眼，', '浅草才能没马蹄。', '最爱湖东行不足，', '绿杨阴里白沙堤。'] },
          { title: '暮江吟', author: '白居易', lines: ['一道残阳铺水中，', '半江瑟瑟半江红。', '可怜九月初三夜，', '露似真珠月似弓。'] },
        ],
      },
      {
        targetName: '古原', type: '提及', more: 0,
        poems: [
          { title: '赋得古原草送别', author: '白居易', lines: ['离离原上草，', '一岁一枯荣。', '野火烧不尽，', '春风吹又生。', '远芳侵古道，', '晴翠接荒城。', '又送王孙去，', '萋萋满别情。'] },
        ],
      },
    ],
  },
  {
    id: 'wangwei', name: '王维', color: '#70d080', mentioned: 120, gifted: 60, connections: 45, poemCount: 130,
    relations: [
      {
        targetName: '元二', type: '寄', more: 1,
        poems: [
          { title: '送元二使安西', author: '王维', lines: ['渭城朝雨浥轻尘，', '客舍青青柳色新。', '劝君更尽一杯酒，', '西出阳关无故人。'] },
        ],
      },
      {
        targetName: '山东兄弟', type: '提及', more: 0,
        poems: [
          { title: '九月九日忆山东兄弟', author: '王维', lines: ['独在异乡为异客，', '每逢佳节倍思亲。', '遥知兄弟登高处，', '遍插茱萸少一人。'] },
        ],
      },
      {
        targetName: '辋川', type: '提及', more: 3,
        poems: [
          { title: '山居秋暝', author: '王维', lines: ['空山新雨后，', '天气晚来秋。', '明月松间照，', '清泉石上流。', '竹喧归浣女，', '莲动下渔舟。', '随意春芳歇，', '王孙自可留。'] },
          { title: '鹿柴', author: '王维', lines: ['空山不见人，', '但闻人语响。', '返景入深林，', '复照青苔上。'] },
          { title: '相思', author: '王维', lines: ['红豆生南国，', '春来发几枝。', '愿君多采撷，', '此物最相思。'] },
        ],
      },
    ],
  },
  {
    id: 'menghaoran', name: '孟浩然', color: '#b0e0b0', mentioned: 80, gifted: 45, connections: 32, poemCount: 90,
    relations: [
      {
        targetName: '故人庄', type: '提及', more: 1,
        poems: [
          { title: '过故人庄', author: '孟浩然', lines: ['故人具鸡黍，', '邀我至田家。', '绿树村边合，', '青山郭外斜。', '开轩面场圃，', '把酒话桑麻。', '待到重阳日，', '还来就菊花。'] },
        ],
      },
      {
        targetName: '春晓', type: '提及', more: 1,
        poems: [
          { title: '春晓', author: '孟浩然', lines: ['春眠不觉晓，', '处处闻啼鸟。', '夜来风雨声，', '花落知多少。'] },
          { title: '宿建德江', author: '孟浩然', lines: ['移舟泊烟渚，', '日暮客愁新。', '野旷天低树，', '江清月近人。'] },
        ],
      },
    ],
  },
  {
    id: 'hanyu', name: '韩愈', color: '#c0b0e0', mentioned: 90, gifted: 70, connections: 40, poemCount: 110,
    relations: [
      {
        targetName: '张十八员外', type: '寄', more: 1,
        poems: [
          { title: '早春呈水部张十八员外 其一', author: '韩愈', lines: ['天街小雨润如酥，', '草色遥看近却无。', '最是一年春好处，', '绝胜烟柳满皇都。'] },
        ],
      },
      {
        targetName: '侄孙湘', type: '寄', more: 0,
        poems: [
          { title: '左迁至蓝关示侄孙湘', author: '韩愈', lines: ['一封朝奏九重天，', '夕贬潮州路八千。', '欲为圣明除弊事，', '肯将衰朽惜残年。', '云横秦岭家何在，', '雪拥蓝关马不前。', '知汝远来应有意，', '好收吾骨瘴江边。'] },
        ],
      },
    ],
  },
  {
    id: 'liuzongyuan', name: '柳宗元', color: '#6fe8e0', mentioned: 60, gifted: 30, connections: 28, poemCount: 80,
    relations: [
      {
        targetName: '江雪', type: '提及', more: 1,
        poems: [
          { title: '江雪', author: '柳宗元', lines: ['千山鸟飞绝，', '万径人踪灭。', '孤舟蓑笠翁，', '独钓寒江雪。'] },
          { title: '渔翁', author: '柳宗元', lines: ['渔翁夜傍西岩宿，', '晓汲清湘燃楚竹。', '烟销日出不见人，', '欸乃一声山水绿。', '回看天际下中流，', '岩上无心云相逐。'] },
        ],
      },
      {
        targetName: '漳汀封连四州', type: '寄', more: 0,
        poems: [
          { title: '登柳州城楼寄漳汀封连四州', author: '柳宗元', lines: ['城上高楼接大荒，', '海天愁思正茫茫。', '惊风乱飐芙蓉水，', '密雨斜侵薜荔墙。', '岭树重遮千里目，', '江流曲似九回肠。', '共来百越文身地，', '犹自音书滞一乡。'] },
        ],
      },
    ],
  },
  {
    id: 'liuyuxi', name: '刘禹锡', color: '#f8a050', mentioned: 85, gifted: 95, connections: 42, poemCount: 120,
    relations: [
      {
        targetName: '白居易', type: '酬和', more: 2,
        poems: [
          { title: '酬乐天扬州初逢席上见赠', author: '刘禹锡', lines: ['巴山楚水凄凉地，', '二十三年弃置身。', '怀旧空吟闻笛赋，', '到乡翻似烂柯人。', '沉舟侧畔千帆过，', '病树前头万木春。', '今日听君歌一曲，', '暂凭杯酒长精神。'] },
        ],
      },
      {
        targetName: '乌衣巷', type: '提及', more: 2,
        poems: [
          { title: '乌衣巷', author: '刘禹锡', lines: ['朱雀桥边野草花，', '乌衣巷口夕阳斜。', '旧时王谢堂前燕，', '飞入寻常百姓家。'] },
          { title: '秋词 其一', author: '刘禹锡', lines: ['自古逢秋悲寂寥，', '我言秋日胜春朝。', '晴空一鹤排云上，', '便引诗情到碧霄。'] },
        ],
      },
    ],
  },
  {
    id: 'yuanzhen', name: '元稹', color: '#f070a8', mentioned: 70, gifted: 90, connections: 30, poemCount: 95,
    relations: [
      {
        targetName: '白居易', type: '寄', more: 2,
        poems: [
          { title: '闻乐天授江州司马', author: '元稹', lines: ['残灯无焰影幢幢，', '此夕闻君谪九江。', '垂死病中惊坐起，', '暗风吹雨入寒窗。'] },
        ],
      },
      {
        targetName: '离思', type: '提及', more: 1,
        poems: [
          { title: '离思五首 其四', author: '元稹', lines: ['曾经沧海难为水，', '除却巫山不是云。', '取次花丛懒回顾，', '半缘修道半缘君。'] },
        ],
      },
    ],
  },
  {
    id: 'dumu', name: '杜牧', color: '#f0e8a0', mentioned: 65, gifted: 35, connections: 26, poemCount: 88,
    relations: [
      {
        targetName: '秦淮', type: '提及', more: 1,
        poems: [
          { title: '泊秦淮', author: '杜牧', lines: ['烟笼寒水月笼沙，', '夜泊秦淮近酒家。', '商女不知亡国恨，', '隔江犹唱后庭花。'] },
        ],
      },
      {
        targetName: '江南', type: '提及', more: 2,
        poems: [
          { title: '山行', author: '杜牧', lines: ['远上寒山石径斜，', '白云生处有人家。', '停车坐爱枫林晚，', '霜叶红于二月花。'] },
          { title: '江南春', author: '杜牧', lines: ['千里莺啼绿映红，', '水村山郭酒旗风。', '南朝四百八十寺，', '多少楼台烟雨中。'] },
          { title: '清明', author: '杜牧', lines: ['清明时节雨纷纷，', '路上行人欲断魂。', '借问酒家何处有，', '牧童遥指杏花村。'] },
        ],
      },
    ],
  },
  {
    id: 'lishangyin', name: '李商隐', color: '#e090f0', mentioned: 75, gifted: 40, connections: 24, poemCount: 92,
    relations: [
      {
        targetName: '夜雨', type: '寄', more: 0,
        poems: [
          { title: '夜雨寄北', author: '李商隐', lines: ['君问归期未有期，', '巴山夜雨涨秋池。', '何当共剪西窗烛，', '却话巴山夜雨时。'] },
        ],
      },
      {
        targetName: '无题', type: '提及', more: 2,
        poems: [
          { title: '无题·相见时难别亦难', author: '李商隐', lines: ['相见时难别亦难，', '东风无力百花残。', '春蚕到死丝方尽，', '蜡炬成灰泪始干。', '晓镜但愁云鬓改，', '夜吟应觉月光寒。', '蓬山此去无多路，', '青鸟殷勤为探看。'] },
          { title: '乐游原', author: '李商隐', lines: ['向晚意不适，', '驱车登古原。', '夕阳无限好，', '只是近黄昏。'] },
        ],
      },
    ],
  },
  {
    id: 'wangchangling', name: '王昌龄', color: '#e8e8e8', mentioned: 40, gifted: 25, connections: 18, poemCount: 60,
    relations: [
      {
        targetName: '辛渐', type: '寄', more: 0,
        poems: [
          { title: '芙蓉楼送辛渐', author: '王昌龄', lines: ['寒雨连江夜入吴，', '平明送客楚山孤。', '洛阳亲友如相问，', '一片冰心在玉壶。'] },
        ],
      },
      {
        targetName: '边塞', type: '提及', more: 2,
        poems: [
          { title: '出塞 其一', author: '王昌龄', lines: ['秦时明月汉时关，', '万里长征人未还。', '但使龙城飞将在，', '不教胡马度阴山。'] },
          { title: '从军行 其四', author: '王昌龄', lines: ['青海长云暗雪山，', '孤城遥望玉门关。', '黄沙百战穿金甲，', '不破楼兰终不还。'] },
        ],
      },
    ],
  },
  {
    id: 'gaoshi', name: '高适', color: '#f06060', mentioned: 35, gifted: 20, connections: 16, poemCount: 55,
    relations: [
      {
        targetName: '董大', type: '寄', more: 1,
        poems: [
          { title: '别董大 其一', author: '高适', lines: ['千里黄云白日曛，', '北风吹雁雪纷纷。', '莫愁前路无知己，', '天下谁人不识君。'] },
        ],
      },
    ],
  },
  {
    id: 'censhen', name: '岑参', color: '#f08840', mentioned: 30, gifted: 18, connections: 14, poemCount: 50,
    relations: [
      {
        targetName: '入京使', type: '提及', more: 0,
        poems: [
          { title: '逢入京使', author: '岑参', lines: ['故园东望路漫漫，', '双袖龙钟泪不干。', '马上相逢无纸笔，', '凭君传语报平安。'] },
        ],
      },
      {
        targetName: '武判官', type: '寄', more: 0,
        poems: [
          { title: '白雪歌送武判官归京', author: '岑参', lines: ['北风卷地白草折，', '胡天八月即飞雪。', '忽如一夜春风来，', '千树万树梨花开。', '散入珠帘湿罗幕，', '狐裘不暖锦衾薄。', '将军角弓不得控，', '都护铁衣冷难着。', '瀚海阑干百丈冰，', '愁云惨淡万里凝。', '中军置酒饮归客，', '胡琴琵琶与羌笛。', '纷纷暮雪下辕门，', '风掣红旗冻不翻。', '轮台东门送君去，', '去时雪满天山路。', '山回路转不见君，', '雪上空留马行处。'] },
        ],
      },
    ],
  },
  {
    id: 'jiadao', name: '贾岛', color: '#a0c8f0', mentioned: 25, gifted: 15, connections: 10, poemCount: 40,
    relations: [
      {
        targetName: '隐者', type: '提及', more: 0,
        poems: [
          { title: '寻隐者不遇', author: '贾岛', lines: ['松下问童子，', '言师采药去。', '只在此山中，', '云深不知处。'] },
        ],
      },
      {
        targetName: '李凝', type: '提及', more: 0,
        poems: [
          { title: '题李凝幽居', author: '贾岛', lines: ['闲居少邻并，', '草径入荒园。', '鸟宿池边树，', '僧敲月下门。', '过桥分野色，', '移石动云根。', '暂去还来此，', '幽期不负言。'] },
        ],
      },
    ],
  },
  {
    id: 'mengjiao', name: '孟郊', color: '#9090f0', mentioned: 20, gifted: 12, connections: 9, poemCount: 36,
    relations: [
      {
        targetName: '游子', type: '提及', more: 0,
        poems: [
          { title: '游子吟', author: '孟郊', lines: ['慈母手中线，', '游子身上衣。', '临行密密缝，', '意恐迟迟归。', '谁言寸草心，', '报得三春晖。'] },
        ],
      },
      {
        targetName: '登科', type: '提及', more: 0,
        poems: [
          { title: '登科后', author: '孟郊', lines: ['昔日龌龊不足夸，', '今朝放荡思无涯。', '春风得意马蹄疾，', '一日看尽长安花。'] },
        ],
      },
    ],
  },
];

const E = (a: string, b: string): GraphEdge => ({ a, b });
export const TANG_EDGES: GraphEdge[] = [
  E('libai', 'dufu'), E('libai', 'menghaoran'), E('libai', 'wangchangling'),
  E('dufu', 'gaoshi'), E('dufu', 'censhen'),
  E('wangwei', 'menghaoran'), E('wangchangling', 'menghaoran'),
  E('wangchangling', 'gaoshi'), E('gaoshi', 'censhen'),
  E('hanyu', 'mengjiao'), E('hanyu', 'jiadao'), E('hanyu', 'liuzongyuan'),
  E('mengjiao', 'jiadao'),
  E('liuzongyuan', 'liuyuxi'), E('liuyuxi', 'baijuyi'),
  E('baijuyi', 'yuanzhen'),
  E('dumu', 'lishangyin'),
];
