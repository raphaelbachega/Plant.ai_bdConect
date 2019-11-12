'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		idProduto: {
			field: `idProduto`,
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		regTemperatura: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		regUmidade: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		regTemporal: {
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
