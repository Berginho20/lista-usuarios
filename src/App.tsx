import React, { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css;"
// import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

const App = (props: any) => {
	const [users, setUsers] = useState([
		{ id: 1, name: "Minora" },
		{ id: 2, name: "Ataide" },
	]);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {setUsers(json); setLoading(false)});
	});
	return (
		<div className="App">
			<h1>Lista de usuários</h1>
			<div className="card">
        {loading ? <h2>Carregando...</h2> : null}
				<ul>
					{users.map((user) => (
                <List
                  sx={{ width: '100%', maxWidth: 360, }}  
                  aria-label="contacts">
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                      <StarIcon />
                   </ListItemIcon>
                <ListItemText primary={user.name} />
              </ListItemButton>
            </ListItem>
            </List>
            ))}
				</ul>
			</div> 
		</div>
	);
};

export default App;