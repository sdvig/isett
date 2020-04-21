import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {

    let routes = [];
    const content = await jdown('content')

    Object.keys(content).map(category => {
      const pages = content[category];
      const pagesRoutes = Object.keys(pages).map(page => {
        const { slug, type } = pages[page]
        return {
          path: `/${slug}`,
          component: 'src/containers/Phone',
          getData: () => ({ data: pages[page], type, }),
        };
      })
      routes = [ ...routes, ...pagesRoutes ]
    })
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/iphone_reparatur_preise',
        component: 'src/containers/IphoneReparaturPreise',
      },
      {
        path: '/faq',
        component: 'src/containers/Faq',
      },
      {
        path: '/kontakt',
        component: 'src/containers/Contact',
      },
      {
        path: '/unsere-filialen',
        component: 'src/containers/Filialen',
      },
      {
        path: '/impressum',
        component: 'src/containers/Impressum',
      },
      {
        path: '/agb',
        component: 'src/containers/Agb',
      },
      {
        path: '/datenschutz',
        component: 'src/containers/Datenschutz',
      },
      {
        path: '/andere',
        component: 'src/containers/Andere',
      },
      {
        path: '/ipads',
        component: 'src/containers/Ipads',
      },
      {
        path: '/macbooks',
        component: 'src/containers/Macbooks',
      },
      {
        path: '/smartphones',
        component: 'src/containers/Smartphones',
      },
      {
        path: '/samsung',
        component: 'src/containers/Samsung',
      },
      {
        path: '/htc',
        component: 'src/containers/Htc',
      },
      {
        path: '/huawei',
        component: 'src/containers/Huawei',
      },
      {
        path: '/google',
        component: 'src/containers/Google',
      },
      {
        path: '/xiaomi',
        component: 'src/containers/Xiaomi',
      },
      {
        path: '/nokia',
        component: 'src/containers/Nokia',
      },
      {
        path: '/zte',
        component: 'src/containers/Zte',
      },
      {
        path: '/one-plus',
        component: 'src/containers/OnePlus',
      },
      {
        path: '/blackberry',
        component: 'src/containers/Blackberry',
      },
      {
        path: '/lg',
        component: 'src/containers/Lg',
      },
      {
        path: '/sony',
        component: 'src/containers/Sony',
      },
      ...routes,
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <meta name="description" content="iSett - Express iPhone Reparatur Berlin - Handyreparatur" />
            <link rel="shortcut icon" href="/assets/images/favicon.ico" />
            {renderMeta.styleTags}
            <script id="cituroWidgetLoader" type="text/javascript" src="https://app.cituro.com/bookingwidget/isett?initial=true" defer></script>
          </Head>
          <Body>
            {children}
            <script src="//code.tidio.co/8tyo8izjyzbgibnjh4evawuj2iwbqbhz.js"></script>
          </Body>
        </Html>
      )
    }
  },
}
