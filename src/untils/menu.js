export const allMenu = [
  {
    name: '首页',
    url: 'index',
    icon: 'home',
  }, {
    name: '图表模块',
    url: 'line',
    icon: 'bars',
    children: [
      { name: '折线图', url: 'line' },
      { name: '热力图', url: 'map' },
      { name: '百度地图', url: 'bmap' },
    ]
  }, {
    name: '模块2',
    url: 'tool',
    icon: 'tool',
    children: [
      { name: '系列1', url: 'tools' },
      { name: '系列2', url: 'editor' },
      { name: '系列3', url: 'todoList' },
    ],
  }, {
    name: '模块3',
    url: 'pic',
    icon: 'edit',
    children: [
      { name: '系列1', url: 'album' },
    ],
  }, {
    name: '模块4',
    url: 'search',
    icon: 'search',
    children: [
      { name: '系列1', url: 'searchEngine' },
    ],
  }, {
    name: '模块5',
    url: 'dev',
    icon: 'apple-o',
    children: [
      { name: '系列1', url: 'todo' },
    ],
  }]