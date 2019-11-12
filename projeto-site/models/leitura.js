'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		idProduto: {
			field:"idProduto",
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		regTemperatura: {
			field:"regTemperatura",
			type: DataTypes.REAL,
			allowNull: false
		},
		regUmidade: {
			field:"regUmidade",
			type: DataTypes.REAL,
			allowNull: false
		},
		regTemporal: {
			field:"regTemporal",
			type: DataTypes.DATE,
			allowNull: false
		},
		momento_grafico: {
			type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		}
	}, 
	{
		tableName: 'Produto', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};
