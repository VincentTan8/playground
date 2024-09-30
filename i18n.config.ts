export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
    //   Home: 'Home',
    //   About: 'About',
    //   Courses: 'Courses',
      
    },
    //should be transferred to a json file
    zh: {
      welcome: '你好',
      Home: '家',
      About: '关于',
      Courses: '课程',
      'UButton Greet Me': 'UButton 欢迎我',
      'Mash Me normal button': 'Mash Me 普通按钮',
      'ABOUT nuxtlink with button': '关于 nuxtlink 带按钮',
      'Custom Button': '自定义按钮',
    }
  },
}))
