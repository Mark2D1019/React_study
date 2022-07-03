import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
			<InputTodo
				todoText={todoText}
				onChange={onChangeTodoText}
				onClick={onClickAdd}
				disabled={incompleteTodos.length >= 5}
			/>
			{incompleteTodos.length >= 5 && (
				<p style={{ color: "Red" }}>登録できるTODO５個までです。</p>
			)}
			<IncompleteTodos
				todos={incompleteTodos}
				onClickDone={onClickDone}
				onClickDelete={onClickDelete}
			/>
			<CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
		</>
	);
};
