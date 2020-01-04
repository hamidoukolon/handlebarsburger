const connection = require('./connection');

module.exports = {
	findAll: async function (table, callback) {
		const str = "SELECT * FROM ??";
		const data = [table]
		try {
			const values = await connection.query(str, data)
			callback(false, values);
		} catch (error) {
			callback(error, null)
		}
	},
	find: async function (table, condition, callback) {
		const str = "SELECT * FROM ?? WHERE " + condition;
		const data = [table]
		try {
			const values = await connection.query(str, data)
			callback(false, values);
		} catch (error) {
			callback(error, null)
		}
	},
	createOne: function (table, cols, vals, callback) {
		const str = "INSERT INTO ?? (?) VALUES(?)"
		const data = [];
		try {
			// const values = await connection.query(str, data)
			// callback(false, values);
		} catch (error) {
			callback(error, null)
		}
	},
	updateOne: function () {

	}
}