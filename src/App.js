import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Excluir from "./img/excluir";
const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding: 0;
  box-sizing:border-box;

  body{
  background:SteelBlue;
  }
  img{
    width:25px;
  }
}
`;
const Container = styled.div`
  width: 100%;
  height: 600px;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 20px;
  background: WhiteSmoke;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-family: "Bebas Neue", cursive;
`;
const Container2 = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const InputButton = styled.div`
  display: flex;
  padding: 10px;

  input {
    outline: none;
  }
`;
const AddButton = styled.button`
  padding: 5px;
  background: green;
  border: none;
  border-radius: 0 5px 5px 0;
  color: white;
  cursor: pointer;
`;

const PeButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    padding: 5px;
    border: none;
    color: white;
    cursor: pointer;
  }
`;

export default class App extends Component {
  state = {
    task: "",
    taskList: []
  };

  HandleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  add = () => {
    if (this.state.task.length > 0 && !this.state.task.match(/^[ \t]+$/)) {
      this.setState({
        taskList: this.state.taskList.concat({
          task: this.state.task,
          id: Date.now()
        }),
        task: ""
      });
    }
  };

  handleKeyboard = (event) => {
    if (event.key === "Enter" && this.state.task.length > 0) {
      this.setState({
        taskList: this.state.taskList.concat({
          task: this.state.task,
          id: Date.now()
        }),
        task: ""
      });
    }
  };

  removerTarefa = (id) => {
    this.setState({
      taskList: this.state.taskList.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Title>To-do-list</Title>
        <InputButton>
          <input
            type="text"
            value={this.state.task}
            onChange={this.HandleChange}
            onKeyDown={this.handleKeyboard}
          />
          <AddButton onClick={this.add}>Adicionar Tarefa</AddButton>
        </InputButton>
        {this.state.taskList.map((item) => (
          <Container2 key={item.id}>
            <PeButton>
              <p>{item.task}</p>
              <button onClick={() => this.removerTarefa(item.id)}>
                <img src={Excluir} alt="" />{" "}
              </button>
            </PeButton>
          </Container2>
        ))}
      </Container>
    );
  }
}
