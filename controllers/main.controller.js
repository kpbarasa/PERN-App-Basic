
const pool = require('../config/postgres/db')
// Create new 
const newData = async (req, res) => {

    try {

        const { description } = req.body;
        const newTest_tb = await pool.query(
            "INSERT INTO test_tb (test_description) VALUES($1) RETURNING *",
            [description]
        );


        res.json(newTest_tb.rows[0]);

    } catch (error) {

        res.status(400).json(error)

    }

}

// Get data here 
const getData = async (req, res) => {

    try {

        const allTest_tbs = await pool.query("SELECT * FROM test_tb");
        res.json(allTest_tbs.rows);

    } catch (error) {

        res.status(400).json(error)

    }

}

// Get data => id 
const getData_id = async (req, res) => {

    try {
        const { id } = req.params;
        const test_tb = await pool.query("SELECT * FROM test_tb WHERE test_tb_id = $1", [id]);

        res.json(test_tb.rows[0]);

    } catch (error) {

        res.status(400).json(error)

    }

}

// Update data 
const updateData = async (req, res) => {

    try {

        const { id } = req.params;
        const { description } = req.body;
        const updateTest_tb = await pool.query(
            "UPDATE test_tb SET test_description = $1 WHERE test_tb_id = $2",
            [description, id]
        );

        res.json("test_tb was updated!");

    } catch (error) {

        res.status(400).json(error)

    }

}

// Delete data 
const deleteData = async (req, res) => {

    try {

        const { id } = req.params;
        const deleteTest_tb = await pool.query("DELETE FROM test_tb WHERE test_tb_id = $1", [id]);
        res.json("test_tb was deleted!");

    } catch (error) {

        res.status(400).json(error)

    }

}

module.exports = { newData, getData, getData_id, updateData, deleteData };