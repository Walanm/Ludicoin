import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import MenuVertical from './MenuVertical';
import Layout from './Layout';

export default props => {

    return (
        <div style={{ 'backgroundColor': '#439cef', 'color': '#000000', 'min-height': '100vh'}}>
            <Layout carregando={props.loading}>
            <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <MenuVertical endereco={props.endereco} carregar={props.action}/>
                </Grid.Column>

                <Grid.Column width={11} >
                    <div className="ui message" style={{ 'width': '100%', 'heigth': '100%' }}>
                        {props.children}
                    </div>
                </Grid.Column>
            </Grid.Row>
            </Grid>
            
            </Layout>
        </div>
    );
}