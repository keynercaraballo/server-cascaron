

const  mongoose = require('mongoose');

const dbConnection = async() =>{

    try{

    }catch(error){
        console.log(error);
        throw new Error('Error con la base de datos');
    }

}


module.exports = {
    dbConnection
}