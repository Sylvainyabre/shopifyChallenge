
const { Inventory, Item, Warehouse } = require("./models");

/***
@url :
@description :
@access:
 */
const createInventory = async (req, res) => {
  try {
    const newInventory = new Inventory({
      name: req.body.name,
      description: req.body.description,
      Warehouse: ObjectId(req.params.warehouse),
    });
    const savedInventory = await newInventory.save();
    return res.json({ success: true, savedInventory });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
/***
@url :
@description :
@access:
 */
const getItem = async (req, res) => {
  try {
    const item = await Item.find({ _id: req.params.id }).populate("inventory");
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found ." });
    }
    return res.json({ success: true, item: item });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

/***
@url :
@description :
@access:
 */
const getItemsList = async (req, res) => {
  try {
    const items = await Item.find().populate("inventory");
    if (!items) {
      return res.json({ success: false, message: "Something went wrong" });
    }
    return res.json({ success: true, items:items });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

/***
@url :
@description :
@access:
 */
const createItem = async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      description: req.body.description,
      quantity:req.body.quantity,
      Inventory: req.params.inventory,
    });
    const savedItem = await newItem.save();
    return res.json({ success: true, savedItem:savedItem });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

/***
@url :
@description :
@access:
 */
const editItem = async (req, res) => {
  try {
    //find item to update
    const item = await Item.findById({ _id: req.params.id });
    if (!item) {
      return res.json({ success: false, message: "Item not found" });
    }

    const updateData = {
      name: req.body.name,
      description: req.body.description,
      quantity:req.body.quantity,
      inventory: req.body.inventory,
    };
    const updatedItem = await Item.findByIdAndUpdate(
      { _id: req.params.id },
      updateData,
      { new: true }
    );

    return res.json({ success: true, updatedItem:updatedItem });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

/***
@url :
@description :
@access:
 */
const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById({ _id: req.params.id });
    if (!item) {
      return res.json({ success: false, message: "Item not found" });
    }
    const deleted = await Item.deleteOne({ _id: req.params.id });
    return res.json({ success: true, deleted:deleted });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

/***
@url :
@description :
@access:
 */
// const deleteInventory = async (req, res) => {
//   try {
//       const inventory = await Inventory.findById({_id:req.params.id});
//       if(!inventory){
//           return res.json({success:false,message:"Inventory Not found"})
//       }
//       Inventory.
//   } catch (error) {

//   }
// };

module.exports = {
    getItem,
    getItemsList,
    createItem,
    deleteItem,
    createInventory
}
