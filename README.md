Para crear un usuario
	{
	  "name":"Alan",
	  "lastName":"Hernandez",
	  "nickname":"Alita",
	  "password":"1234567890",
	  "state":false,
	  "profile":3
	}

	POST   http://localhost:3000/api/users/add

Para eliminar un usuario

	Se manada a llamar a los usuarios
	GET  http://localhost:3000/api/users/all
	Luego se selecciona el id que se va a eliminar
	DELETE http://localhost:3000/api/users/delete/"id:"

Para actualizar es 
	UPDATE http://localhost:3000/api/users/update/"id:"
