//
//  Copyright 2017-2018 The Last Pickle Ltd
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.

import React from "react";
import Label from 'react-bootstrap/lib/Label';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

const NavBar = React.createClass({
    getInitialState() {
        return { showModal: false };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },
    
  render: function() {
    const floatRight = {float: 'right'};
    const smallFont = {fontSize: 'x-small'};
    return (
        <div className="row">
        <div className="col-lg-8">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <Button onClick={this.open} bsStyle="link" bsSize="xsmall" className="navbar-brand">Cassandra Reaper <span style={smallFont}>##VERSION##</span></Button>
              </div>
              </div>
              <div className="col-lg-4">
                <span className="navbar-brand" style={floatRight}><Button href="https://github.com/thelastpickle/cassandra-reaper/issues/new?body=**Spotted on ##VERSION## (##GIT-SHA##)**" bsStyle="warning" bsSize="xsmall">Report a bug</Button>
              </span>
            </div>
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title>Version ##VERSION##</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>Git commit :</h4>
                  <p><a href="https://github.com/thelastpickle/cassandra-reaper/commit/##GIT-SHA##" target="_blank">https://github.com/thelastpickle/cassandra-reaper/commit/##GIT-SHA##</a></p>
                  <h4>Build date :</h4>
                  <p>##BUILD-DATE##</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
              </Modal>
          </div>
          
        
    );
  }
});

export default NavBar;
