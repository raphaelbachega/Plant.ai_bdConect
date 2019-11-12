'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idCliente: {
			field:"idCliente",
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeCliente: {
			field:"nomeCliente",
			type: DataTypes.STRING,
			allowNull: false
		},
		dataNascimento: {
			field:"dataNascimento",
			type: DataTypes.STRING,
			allowNull: false
		},
		CPF: {
			field:"CPF",
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field:"email",
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field:"senha",
			type: DataTypes.STRING,
			allowNull: false
		},
		conta: {
			field:"conta",
			type: DataTypes.STRING,
			allowNull: false
		},
		estado: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cidade: {
			type: DataTypes.STRING,
			allowNull: false
		},
		bairro: {
			type: DataTypes.STRING,
			allowNull: false
		},
		rua: {
			type: DataTypes.STRING,
			allowNull: false
		},
		numeroCasa: {
			field:"numeroCasa",
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'Cliente', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
