import React, { Component } from 'react'
import { Container, Loader, Dimmer } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

class Layout extends Component {

    render() {
        return (
            <Container>
                <Dimmer active={this.props.carregando}>
                    <Loader />
                </Dimmer>
                <Head>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Head>
                <style jsx global>{`
                    body {
                        min-height: 100vh;
                    }
                `}</style>
                <Header />
                {this.props.children}
            </Container>
        );
    }
    
}

export default Layout;