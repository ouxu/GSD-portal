/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;


const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

const Button = props => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={props.href} target={props.target}>
      {props.children}
    </a>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl, consoleConfig } = siteConfig;
    const { url = '' } = consoleConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={url}>开始使用</Button>
            <Button href="#more">了解更多</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl, consoleConfig } = siteConfig;
    const { url = '' } = consoleConfig;
    const Block = props => (
      <Container padding={['bottom', 'top']} id={props.id} background={props.background}>
        <GridBlock align={props.align || 'center'} contents={props.children} layout={props.layout} />
      </Container>
    );

    const FeatureCallout = () => (
      <div id="more" className="productShowcaseSection paddingBottom" style={{ textAlign: 'center' }}>
        <h2>适用场景</h2>
        <MarkdownBlock>静态文案管理场景、应用配置管理场景、资源投放管理场景······</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block align="left">
        {[
          {
            content: '业务中的配置文件统一管理，比如请求地址、资源版本号、前后端用户角色权限表、呈现字段、呈现格式等等',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: '应用配置管理场景'
          }
        ]}
      </Block>
    );

    const Description = () => (
      <Block align="left" background="dark">
        {[
          {
            content:
              '业务中的资源投放管理，适用于简单的资源投放逻辑</br>比如业务中的新闻模块，通过构建新闻列表和新闻内容两个数据结构，借助静态化的能力来实现伪动态化，不再需要后端开发者单独写新闻服务',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: '资源投放管理场景'
          }
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block align="left" background="light">
        {[
          {
            content:
              '业务中的静态文案集中管理，比如按钮文案、提示信息</br>可以应用开发者深度合作，打造配置化的内容管理系统（CMS）、多语言国际化支持、动态表单等',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: '静态文案管理场景'
          }
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'HTTP接口接入、JSON数据格式交互',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: '易接入'
          },
          {
            content: '依托于腾讯云云服务实现',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: '高性能'
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>谁在使用GSD?</h2>
          <p>目前GSD正在被这些人使用</p>
          <div className="logos">{showcase}</div>
          <PromoSection className="more-users">
            <Button href={pageUrl('users.html')}>更多用户</Button>
            <Button href={url}>开始使用</Button>
          </PromoSection>

        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
