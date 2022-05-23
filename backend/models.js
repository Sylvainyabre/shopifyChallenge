const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/***
@Model : Inventory
@attributes :
  - @name : String :name of the inventory
  - @identifier (id) :String: String: auto-generated alphanumeric unique identifier
  - @description String: A brief description of the inventory
  - @warehouse : ObjectID: the warehouse to which this inventory belongs

 */
const InventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  warehouse: {
    type: Schema.Types.ObjectId,
    ref: "Warehouse",
  },
});


/***
@Model : Item
@attributes :
  - @name : String: name of the item
  - @identifier (id) : String: auto-generated alphanumeric unique identifier
  - @description: String: A brief description of the item
  - @inventory : ObjectID: the inventory to which this item belongs
  - @quantity : amount of this item

 */
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity:{
      type:String,
      required:true,
  },
  inventory: {
    type: Schema.Types.ObjectId,
    ref: "Inventory",
  },
});


/***
@Model : Warehouse
@attributes :
  - @name : String: representing the name of the inventory
  - @country : String: where the inventory is located
  - @address : String: valid exact address of the warehouse
 */
const WarehouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = {
    Inventory:mongoose.model("Inventory",InventorySchema),
    Item:mongoose.model("Item",ItemSchema),
    Warehouse:mongoose.model("Warehouse",WarehouseSchema)
}