import React, { useState } from "react";
import "./styles.css";
//import InputTodo from "./components/InputTodo";

export const App = () => {
	const [todoText, setTodoText] = useState("");
	const [incompleteTodos, setinCompleteTodos] = useState([
		"ああああ1",
		"ああああ5"
	]);
	const [completeTodos, setCompleteTodos] = useState([
		"いいいい１１",
		"いいいい１２"
	]);

	const onChangeTodoText = (event) => setTodoText(event.target.value);

	const onClickAdd = () => {
		if (todoText === "") return;
		const newTodos = [...incompleteTodos, todoText];
		setinCompleteTodos(newTodos);
		setTodoText("");
	};
	const onClickDelete = (index) => {
		const newTodos = [...incompleteTodos];
		newTodos.splice(index, 1);
		setinCompleteTodos(newTodos);
	};
	const onClickDone = (todotext, index) => {
		const newTodos = [...incompleteTodos];
		newTodos.splice(index, 1);
		setinCompleteTodos(newTodos);
		const newCompTodos = [...completeTodos, todotext];
		setCompleteTodos(newCompTodos);
	};
	const onClickBack = (todo, index) => {
		const newCompTodos = [...completeTodos];
		newCompTodos.splice(index, 1);
		setCompleteTodos(newCompTodos);
		const newTodos = [...incompleteTodos, todo];
		setinCompleteTodos(newTodos);
	};

	return (
		<>
			<div className="input-area">
				<input
					placeholder="TODOを入力"
					value={todoText}
					onChange={onChangeTodoText}
				/>
				<button onClick={onClickAdd}>追加</button>
			</div>

			{/* <InputTodo
				todoText={todoText}
				onChange={onChangeTodoText}
				onClick={onClickAdd}
			/> */}
			<div className="imcomplete-area">
				<p className="title">未完了のTODO</p>
				<ul>
					{incompleteTodos.map((todo, index) => {
						return (
							<div key={todo} className="list-row">
								<li>{todo}</li>
								<button onClick={() => onClickDone(todo, index)}>完了</button>
								<button onClick={() => onClickDelete(index)}>削除</button>
							</div>
						);
					})}
				</ul>
			</div>
			<div className="complete-area">
				<p className="title">完了のTODO</p>
				<ul>
					{completeTodos.map((todo, index) => {
						return (
							<div key={todo} className="list-row">
								<li>{todo}</li>
								<button onClick={() => onClickBack(todo, index)}>戻す</button>
							</div>
						);
					})}
				</ul>
			</div>
		</>
	);
};
