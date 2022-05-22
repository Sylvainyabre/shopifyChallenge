const {
    getItem,
    getItemsList,
    createItem,
    deleteItem,
    createInventory,
    
} = require("controllers")
const express = require("express");
const router = express.Router();


/**
@description :get the list of all items
@Url :"api/inventory/items"
@method :GET
@return : The list of all items
 */
 router.get("/inventory/items",getItemsList())


 /**
@description :get a specified item
@Url :"api/inventory/item/:id"
@method :GET
@return : Item matching the specified id
 */

 router.get("/inventory/item/:id",getItem())



 /**
@description :Create an item in a specified inventory
@Url :"api/inventory/create/item/:id"
@method :POST
@return : Item matching the specified id
 */
 router.post("/inventory/create/item/:id",createItem());

 /**
@description :delete item with specified item
@Url :"api/inventory/delete/item/:id"
@method :DELETE
@return : deleted item if deletion is successful, error message otherwise
 */
 router.delete("/inventory/delete/item/:id",deleteItem());


/**
@description :create a new inventory
@Url :"api/inventory/create"
@method :POST
@return : newly created inventory
 */
router.post("/inventory/create",createInventory());







module.exports = router;