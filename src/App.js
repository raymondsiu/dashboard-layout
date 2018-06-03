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
            <div className="glass">Card 1</div>
          </div>
          <div
            className={css`
              flex: 2;
              display: flex;
            `}
          >
            <div className="glass">Card 2</div>
          </div>
          <div
            className={css`
              flex: 1;
              display: flex;
            `}
          >
            <div className="glass">Card 3</div>
          </div>
          <div
            className={css`
              flex: 4;
              display: flex;
            `}
          >
            <div className="glass">Card 4</div>
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
              display: flex;
            `}
          >
            <div className="glass">Card 5</div>
          </div>
          <div
            className={css`
              flex: 2;
              display: flex;
              flex-direction: column;
            `}
          >
            <h3
              className={css`
                color: #fff;
              `}
            >
              Card 6
            </h3>
            <div className="glass">Content 6</div>
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
              display: flex;
            `}
          >
            <div className="glass">Card 8</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
