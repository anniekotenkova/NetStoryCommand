# Reset database
Rake::Task['db:drop'].invoke
Rake::Task['db:create'].invoke
Rake::Task['db:migrate'].invoke
#
def data_seed
  create_folders
  create_articles
end

def create_folders

  icons = Folder.create(
    name: 'Справка',
    name_en: 'About',
    icon: 'about.svg',
    partial_name: 'about'
  )

  computer = Folder.create(
    name: 'Мой компьютер',
    name_en: 'My computer',
    icon: 'computer_icon.svg',
    partial_name: 'window'
  )

  computer.folders.create([{
      name: '1970',
      name_en: '1970',
      icon: 'folder.svg',
      partial_name: 'window',
      same_window: true
    },{
      name: '1980',
      name_en: '1980',
      icon: 'folder.svg',
      partial_name: 'window',
      same_window: true
    }, {
      name: '1990',
      name_en: '1990',
      icon: 'folder.svg',
      partial_name: 'window',
      same_window: true
    }, {
      name: '2000',
      name_en: '2000',
      icon: 'folder.svg',
      partial_name: 'window',
      same_window: true
    }
  ])

  icons = Folder.create([{
      name: 'Procrastinate Explorer',
      name_en: 'Procrastinate Explorer',
      icon: 'internet.svg',
      partial_name: 'matrix'
    }, {
      name: 'О нас',
      name_en: 'Credits',
      icon: 'credits.svg',
      partial_name: 'credits'
    }, {
      name: 'Корзина',
      name_en: 'Trash',
      icon: 'trash.svg',
      partial_name: 'trash'
    }
  ])
end

def create_articles
  articles = [{
      folder_name:    '1970',
      folder_name_en: '1970',
      title:          'Первая почта',
      title_en:       'First email',
      pic:            'mail_icon.svg',
      partial_name:   'email'
    },
    {
      folder_name:    '1980',
      folder_name_en: '1980',
      title:          'WWW',
      title_en:       'WWW',
      pic:            'www_icon.svg',
      partial_name:   'www'
    },
    {
      folder_name:    '1980',
      folder_name_en: '1980',
      title:          'NSFNET',
      title_en:       'NSFNET',
      pic:            'nsfnet_icon.svg',
      partial_name:   'nsfnet'
    },
    {
      folder_name:    '1980',
      folder_name_en: '1980',
      title:          'Синий экран смерти',
      title_en:       'Blue screen of death',
      pic:            'blue_screen_icon.svg',
      partial_name:   'blue_screen'
    },
    {
      folder_name:    '1990',
      folder_name_en: '1990',
      title:          'Ошибка 404',
      title_en:       'Error 404',
      pic:            'notfound_icon.svg',
      partial_name:   'error404'
    }, {
      folder_name:    '1990',
      folder_name_en: '1990',
      title:          'Первый браузер',
      title_en:       'First browser',
      pic:            'erwise_icon.svg',
      partial_name:   'firstbrowser'
    }, {
      folder_name:    '1990',
      folder_name_en: '1990',
      title:          'Первый лендинг',
      title_en:       'First landing',
      pic:            'att_icon.svg',
      partial_name:   'firstlanding'
    }, {
      folder_name:    '1990',
      folder_name_en: '1990',
      title:          'Друзья',
      title_en:       'Friends',
      pic:            'friends_icon.svg',
      partial_name:   'friends'
    }, {
      folder_name:    '1990',
      folder_name_en: '1990',
      title:          'TheGlobe',
      title_en:       'TheGlobe',
      pic:            'theglobe_icon.svg',
      partial_name:   'the_globe'
    }, {
      folder_name:    '1990',
      folder_name_en: '1990',
      title:          'Браузерные войны',
      title_en:       'Browser wars',
      pic:            'netscape_icon.svg',
      partial_name:   'netscape'
    }, {
      folder_name:    '2000',
      folder_name_en: '2000',
      title:          'Википедия',
      title_en:       'Wikipedia',
      pic:            'wiki_icon.svg',
      partial_name:   'wikipedia'
    }, {
      folder_name:    '2000',
      folder_name_en: '2000',
      title:          'Facebook',
      title_en:       'Facebook',
      pic:            'facebook_icon.svg',
      partial_name:   'facebook'
    }, {
      folder_name:    '2000',
      folder_name_en: '2000',
      title:          'Y2K',
      title_en:       'Y2K',
      pic:            'facebook_icon.svg',
      partial_name:   'y2k'
    }, {
      folder_name:    '2000',
      folder_name_en: '2000',
      title:          'Million Dollar Page',
      title_en:       'Million Dollar Page',
      pic:            'million_dollar_icon.svg',
      partial_name:   'million_dollar'
    }, {
      folder_name:    '2000',
      folder_name_en: '2000',
      title:          'YouTube',
      title_en:       'YouTube',
      pic:            'youtube_icon.svg',
      partial_name:   'youtube'
    }
  ]

  articles.each do |article|
    create_article(article)
  end
end

def create_article(article)
  folder = Folder.find_by_name(article[:folder_name])
  icon = File.open(File.join(Rails.root, "public/autoupload/article_icons/#{ article[:pic] }"))

  article = folder.articles.create(
    title:        article[:title],
    title_en:     article[:title_en],
    pic:          icon,
    partial_name: article[:partial_name]
  )

  puts "Article with title #{ article.title } created"
end

data_seed
