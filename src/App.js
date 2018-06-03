import React, { Component } from 'react'
import { css } from 'emotion'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          `}
        >
          <div
            className={css`
              flex: 1;
              display: flex;
            `}
          >
            <div
              className={css`
                margin: 1em;
                padding: 1em;
                flex: 1;
                background-color: rgba(255, 255, 255, 0.5);
              `}
            >
              Card 1
            </div>
          </div>
          <div
            className={css`
              flex: 1;
              background-color: #00aa00;
            `}
          >
            Block 2
          </div>
          <div
            className={css`
              flex: 1;
              background-color: #aa0000;
            `}
          >
            Block 3
          </div>
          <div
            className={css`
              flex: 1;
              background-color: #ffff00;
            `}
          >
            Block 4
          </div>
        </div>
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          `}
        >
          <div
            className={css`
              flex: 1;
              background-color: #aa3355;
            `}
          >
            Block 5
          </div>
          <div
            className={css`
              flex: 2;
              display: flex;
            `}
          >
            <div className="glass">Card 6</div>
          </div>
          <div
            className={css`
              flex: 2;
              display: flex;
            `}
          >
            <div className="glass">Card 7</div>
          </div>
          <div
            className={css`
              flex: 1;
              background-color: #ffffff;
            `}
          >
            Block 8
          </div>
        </div>
      </div>
    )
  }
}

export default App
