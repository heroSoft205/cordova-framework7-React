import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button, Tab, Tabs, View
} from 'framework7-react';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            title: "首页",
        };
    }
    showTab(e) {
        console.log(e);
    }
    componentWillReceiveProps(props){
        console.log(props)
    }
    render() {
        return (
            <Page name="home">
                <Navbar sliding={true}>
                    <NavLeft>
                        {/*  <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />*/}
                    </NavLeft>
                    <NavTitle title="aaa" sliding={false}>{this.state.title}</NavTitle>
                    <NavRight>
                        {/* <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />*/}
                    </NavRight>
                </Navbar>
                <Tabs swipeable>
                    <Tab id="tab-1" className="page-content" tabActive onTabShow={e => {
                        this.setState({title: "首页"})
                    }}>
                        <Block strong>
                            <p>Here is your blank Framework7 app. Let's see what we have here.</p>
                        </Block>
                    </Tab>
                    <Tab id="tab-2" className="page-content" onTabShow={e => {
                        this.setState({title: "消息"})
                    }}>
                        <Block>
                            <BlockTitle>Navigation</BlockTitle>
                            <List>
                                <ListItem link="/about/aaa/" title="About"/><br/>
                                <ListItem link="/refresh/" title="下拉刷新"/><br/>
                                <ListItem link="/form/" title="Form"/>

                            </List>
                            <a href="/about/" className="link">about</a><br/>
                            <a href="/home/" className="link">home</a>
                            <BlockTitle>Modals</BlockTitle>
                            <Block strong>
                                <Row>
                                    <Col width="50">
                                        <Button fill raised popupOpen="#my-popup">Popup</Button>
                                    </Col>
                                    <Col width="50">
                                        <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
                                    </Col>
                                </Row>
                            </Block>
                            <BlockTitle>Panels</BlockTitle>
                            <Block strong>
                                <Row>
                                    <Col width="50">
                                        <Button fill raised panelOpen="left">Left Panel</Button>
                                    </Col>
                                    <Col width="50">
                                        <Button fill raised panelOpen="right">Right Panel</Button>
                                    </Col>
                                </Row>
                            </Block>
                            <Block strong>
                                <Row>
                                    <Col width="50">
                                        <Button fill raised panelOpen="left">Left Panel</Button>
                                    </Col>
                                    <Col width="50">
                                        <Button fill raised panelOpen="right">Right Panel</Button>
                                    </Col>
                                </Row>
                            </Block>
                            <Block strong>
                                <Row>
                                    <Col width="50">
                                        <Button fill raised panelOpen="left">Left Panel</Button>
                                    </Col>
                                    <Col width="50">
                                        <Button fill raised panelOpen="right">Right Panel</Button>
                                    </Col>
                                </Row>
                            </Block>
                            <Block strong>
                                <Row>
                                    <Col width="50">
                                        <Button fill raised panelOpen="left">Left Panel</Button>
                                    </Col>
                                    <Col width="50">
                                        <Button fill raised panelOpen="right">Right Panel</Button>
                                    </Col>
                                </Row>
                            </Block>
                            <a href="/about/" className="link">about</a>
                        </Block>
                    </Tab>
                    <Tab id="tab-3" className="page-content" onTabShow={e => {
                        this.setState({title: "我的"})
                    }}>
                        <Block>
                            <List>
                                <ListItem
                                    title="Dynamic (Component) Route"
                                    link="/dynamic-route/blog/45/post/125/?foo=bar#about"
                                />
                                <ListItem
                                    title="Default Route (404)"
                                    link="/load-something-that-doesnt-exist/"
                                />
                                <ListItem
                                    title="Request Data & Load"
                                    link="/request-and-load/user/123456/"
                                />
                            </List>
                        </Block>
                    </Tab>
                </Tabs>
                <Toolbar tabbar bottom style={{height: "55px"}}>
                    <a href="#tab-1" className="tab-link tab-link-active">
                        <i className="icon f7-icons ios-only">email_fill</i>
                        <i className="icon material-icons md-only">email</i>
                        <span className="tabbar-label">Inbox</span>
                    </a>
                    <a href="#tab-2" className="tab-link">
                        <i className="icon f7-icons ios-only">today_fill<span
                            className="badge color-red">5</span></i>
                        <i className="icon material-icons md-only">today<span
                            className="badge color-red">5</span></i>
                        <span className="tabbar-label">Calendar</span>
                    </a>
                    <a href="#tab-3" className="tab-link">
                        <i className="icon f7-icons ios-only">cloud_fill</i>
                        <i className="icon material-icons md-only">file_upload</i>
                        <span className="tabbar-label">Upload</span>
                    </a>
                </Toolbar>
            </Page>
        )
    }
}
