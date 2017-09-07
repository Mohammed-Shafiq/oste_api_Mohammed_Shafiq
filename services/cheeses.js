const cheeses = require('../data/cheeses.js');


/**
 * @module Cheeses
 */
module.exports = {
    /**
     * getAll
     * Hente alle oste 
     * @returns {object}
     */
 'getAll': () => cheeses,


/**
 * getOne
 * Returnere et JSON objekt med en enkelt ost
 * @param {string} varenr - varenummeret på en ost
 * @returns {object}
 */


 'getOne' : (varenr) => {
    let currentCheese = null;
    cheeses.forEach((cheeses) => {
        if(cheeses.varenr == varenr){
         currentCheese = JSON.stringify(cheeses);
        }
    });

    if (currentCheese !== null){
        return currentCheese
    }else{
        return {"code": "ResourceNotFound", 
        "message": varenr + " does not exists"};
    }

    
},


};