import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "Omega Документы",
  description: "Omega - это образовательная платформа, которая использует искусственный интеллект для персонализации обучения и повышения эффективности. Платформа доступна в любом месте и в любое время, что делает обучение более удобным и доступным.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Omega', link: 'https://omega-lspu.ru/' }
    ],

    sidebar: [
      {
        text: 'Обзор',
        items: [
          // { text: 'Политика конфиденциальности', link: '/confidentional' },
          // { text: 'Условия использования', link: '/confidentional' },
          // { text: 'Условия использования', link: '/confidentional' },
          // { text: 'Часто задаваемые вопросы', link: '/confidentional' },
          //https://policies.google.com/faq
          { text: 'Инструкция пользователя платформы', link: '/user-guide' },
          { text: 'Инструкция пользователя платформы', link: '/user-guide' },
          { text: 'API серверной части', link: '/api-docs' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
