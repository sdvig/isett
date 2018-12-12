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

    const phonesPages = await jdown('content/phones')

    const phonesRoutes = Object.keys(phonesPages).map(page => ({
      path: `/${phonesPages[page].slug}`,
      component: 'src/containers/Phone',
      getData: () => ({
        data: phonesPages[page],
      }),
    }));

    console.log('/// phonesRoutes: ', phonesRoutes)

    //
    // for (const phone in phones) {
    //   console.log('/// phone: ', phones[phone]);
    //   phonesRoutes.push({
    //     path: `/${phone.slug}`,
    //     component: 'src/containers/Phone',
    //     getData: () => ({
    //       phone,
    //     }),
    //   });
    // }
    //
    // console.log('/// phonesRoutes: ', phonesRoutes);

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
        path: '/andere',
        component: 'src/containers/Andere',
      },
      ...phonesRoutes,
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
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
