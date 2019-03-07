import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
const UserTable = props => (
	< Table striped bordered hover variant="dark">
		<thead>
			<tr>
				<th>id</th>
				<th>Nom</th>
				<th>Prénom</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>
						
						<Button  variant="danger" onClick={(e) => { if (window.confirm('Confirmer la suppression')) this.deleteItem(e) } }  className="button muted-button">delete</Button>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={3}>Pas d'utilisateur</td>
				</tr>
			)}
		</tbody>
		</Table>
)

export default UserTable