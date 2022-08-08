
const db = require('../../')
const patients = db.Patients


export async function getPatients(req, res){
    res.send({
        message: 'this is working'
    })
}