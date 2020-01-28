import React from 'react'
import ReactDOM from 'react-dom'
import Board from '@lourenci/react-kanban'

import './styles.css'

const board = {
  lanes: [
    {
      id: 1,
      title: 'Port 1',
      cards: [
        {
          id: 1,
          title: 'Card title 1',
          description: 'Card content 1'
        },
        {
          id: 2,
          title: 'Card title 2',
          description: 'Card content 2'
        },
        {
          id: 3,
          title: 'Card title 3',
          description: 'Card content 3'
        },
        {
          id: 4,
          title: 'Card title 4',
          description: 'Card content 4'
        },
        {
          id: 5,
          title: 'Card title 5',
          description: 'Card content 5'
        }
      ]
    },
    {
      id: 2,
      title: 'Port 2',
      cards: [
        {
          id: 9,
          title: 'Card title 4',
          description: 'Card content 4'
        }
      ]
    },
    {
      id: 3,
      title: 'Port 3',
      cards: [
        {
          id: 10,
          title: 'Card title 10',
          description: 'Card content 10'
        },
        {
          id: 11,
          title: 'Card title 11',
          description: 'Card content 11'
        }
      ]
    },
    {
      id: 4,
      title: 'Port 4',
      cards: [
        {
          id: 12,
          title: 'Card title 12',
          description: 'Card content 12'
        },
        {
          id: 13,
          title: 'Card title 13',
          description: 'Card content 13'
        }
      ]
    }
  ]
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: '', content: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.title, this.state.content);
    if(this.state.title && this.state.content) {
      const item = {
        id: 25,
        title: this.state.title,
        description: this.state.content
      }
      board.lanes[0].cards.push(item);
    }
    event.preventDefault();
  }
  render() {
    return (
      <>
        <div style={{ height: '20px', backgroundColor: 'rgba(22, 134, 41, 0.58)', padding: '20px', textAlign: 'center' }}>Trello Board</div>
        <Board
          allowRemoveLane
          allowRenameLane
          allowRemoveCard
          onLaneRemove={console.log}
          onCardRemove={console.log}
          onLaneRename={console.log}
          initialBoard={board}
        />
        <div style={{marginLeft:"400px"}}>
          <header style={{marginLeft:"200px",marginBottom:'20px', fontSize:"20px", fontWeight: "bold"}}>Add to trello board</header>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input style={{marginLeft:"10px"}} type="text" name="title" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label style={{marginLeft:"20px"}}>
              Content:
              <input style={{marginLeft:"10px"}} type="text" name="content" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" style={{marginLeft:"20px", padding:"8px"}}/>
          </form>
        </div>
      </>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
