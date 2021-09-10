const { Estoque } = require("../schema/schemas");

exports.getAll = async (req, res) => {
  try {
    const estoque = await Estoque.find({});
    console.log(estoque);
    res.send({ teste: "aaa", estoque });
  } catch (err) {
    throw err;
  }
};
exports.getOne = async (req, res) => {
  try {
    let query = req.params.itemId;
    const estoque = await Estoque.findOne({ id_equip: query });
    console.log(estoque);
    res.send(estoque);
  } catch (err) {
    throw err;
  }
};
exports.postEstoque = async (req, res) => {
  try {
    const {
      id_equip,
      equip_type,
      equip_description,
      equip_provider,
      equip_spec,
      equip_state
    } = req.body;
    const item = new Estoque({
      id_equip: id_equip,
      equip_type: equip_type,
      equip_description: equip_description,
      equip_provider: equip_provider,
      equip_spec: equip_spec,
      equip_state: equip_state
    });
    item.save();
  } catch (err) {
    throw err;
  }
};
exports.putEstoque = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const {
      id_equip,
      equip_type,
      equip_description,
      equip_provider,
      equip_spec,
      equip_state
    } = req.body;

    Estoque.updateOne(
      { id_equip: itemId },
      {
        $set: {
          id_equip: id_equip,
          equip_type: equip_type,
          equip_description: equip_description,
          equip_provider: equip_provider,
          equip_spec: equip_spec,
          equip_state: equip_state
        }
      }
    );
  } catch (err) {
    throw err;
  }
};
exports.deleteEstoque = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    Estoque.deleteOne({ id_equip: itemId });
  } catch (err) {
    throw err;
  }
};
