import React, { Component } from 'react'
import { Link, Route, Router, Switch } from 'react-router-dom'
import { Container, Grid, Menu, Segment } from 'semantic-ui-react'

import { NotFound } from './components/NotFound'
import { Items } from './components/Items'

// logo removed — replaced by portfolio header

export interface AppProps {}

export interface AppProps {
  history: any
}

export interface AppState {}

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
  }

  render() {
    return (
      <Container>
        {/* Heads up! We apply there some custom styling, you usually will not need it. */}
        <style>
          {`
          html, body {
            background: linear-gradient(135deg, #071B2A 0%, #0E3B59 100%) !important;
            color: #e6f0fb !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
          }
          h1.ui.header {
            color: #ffffff !important;
          }
          .portfolio-subtitle {
            color: rgba(230,240,251,0.85);
            margin-top: 6px;
            font-weight: 300;
          }
        `}
        </style>
        <Segment style={{ padding: '2em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 18 }}>
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M20 17.58A4.5 4.5 0 0016.5 12H16a5 5 0 00-9.9 1.2A3.5 3.5 0 004 17.5 3.5 3.5 0 007.5 21h9A4.5 4.5 0 0020 17.58z" fill="#7DD3FC" opacity="0.95" />
                    <path d="M12 8a4 4 0 100-8 4 4 0 000 8z" transform="translate(4 8)" fill="#60A5FA" opacity="0.95" />
                    <g transform="translate(12,12)">
                      <path d="M2 0v1.2a3 3 0 010 1.6l.9.5-.9.5A3 3 0 012 6V7" stroke="#0369A1" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <h1 style={{ margin: 0, fontSize: '2rem' }}>DevOps & Cloud Portfolio</h1>
                    <div className="portfolio-subtitle">Infrastructure · CI/CD · Automation · Observability</div>
                  </div>
                </div>
              </div>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Router history={this.props.history}>
                  {this.generateMenu()}

                  {this.generateCurrentPage()}
                </Router>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }

  generateMenu() {
    return (
      <Menu>
        <Menu.Item name="items">
          <Link to="/">Items</Link>
        </Menu.Item>
      </Menu>
    )
  }

  generateCurrentPage() {

    return (
      <Switch>
        <Route
          path="/"
          exact
          render={props => {
            return <Items {...props} />
          }}
        />

        <Route component={NotFound} />
      </Switch>
    )
  }
}
