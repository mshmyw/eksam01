import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import TypedComponent from '../components/typed'

interface Props {
  readonly data: PageQueryData
}

export default class Tags extends React.Component<Props> {
  render() {
    const {data} = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout title={siteTitle}>
        <Head title="All tags" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <article>
          <p id="element">
          About Me...
          </p></article>
          <TypedComponent
            strings={[
              'I am very <i>bad</i> now',
              'I am very <strong>good</strong> now',
            ]}
          />
      </Layout>
    )
  }
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
