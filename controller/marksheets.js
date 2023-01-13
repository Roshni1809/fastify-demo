var Database = require("../student")

const GetMarksheets = (req, res) => {
    var marksheets = Database;
    res.status(200).send(marksheets);
}

const AddMarksheet = (req, res, done) => {
    const newMarksheet = req.body
    if (!newMarksheet) {
        res.status(400).send("Data not provided")
        done()
    }
    //Check if id is already available
    var isIdAreadyAvailable = Database.some( marksheet => marksheet.studentId === newMarksheet.studentId )
    if(isIdAreadyAvailable) {
        res.status(400).send("Dublicate Entry")
        done()
    }
    else {
        Database.push(newMarksheet)
        res.status(200).send(Database)
        done()
    }
}

const UpdateMarksheet = (req, res, done) => {
    const id = req.body?.studentId
    const updated_marksheet = req.body
    if (!id) {
        res.status(400).send("Id not Provided")
        done()
    }
    var isMarksheetFound = false                     // Counter to check if 
    Database = Database.map((marksheet) => {
        if (marksheet.studentId == id) {
            isMarksheetFound = true
            return {...marksheet, ...updated_marksheet};
        }
        else return marksheet;
    })
    if(isMarksheetFound) {
        res.status(200).send(Database);
        done()
    }
    else {
        res.status(400).send("Marksheet provided to update is not found")
    }
}

const DeleteMarksheet = (req, res, done) => {
    const id = req.body?.studentId;
    if (!id) {
        return res.status(400).send("Id is required");
        done()
    }
    var isMarksheetFound = false                     

    Database = Database.filter((db) => {
        if(db.studentId !== req.body.studentId) {
            return true;
        }
        else {
            isMarksheetFound = true;                 
            return false;
        }
    })
    if(isMarksheetFound) {
        res.status(200).send(Database);            
        done()
    }
    else {
        res.status(400).send("Marksheet with ID provided is not found");
        done()
    } 
}

module.exports = {
    GetMarksheets,
    AddMarksheet,
    UpdateMarksheet,
    DeleteMarksheet
}