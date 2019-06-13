/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const WIP = () => (
  <div className="mainContainer">
    <Container padding={['bottom', 'top']}>
      <div className="showcaseSection">
      <div className="logos">
          <img src="/img/undraw_open_source.svg" alt="wip" style={{width: 200}}/>
        </div>
        <div className="prose">
          <h1>当前页面开发中</h1>
          <p>Work In Progress</p>
        </div>

        {/* <p>Are you using this project?</p> */}
        <a href="/" className="button">
          返回首页
        </a>
      </div>
    </Container>
  </div>
);

module.exports = WIP;
