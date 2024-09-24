import Tour from "../model/Tour.js";

export const addTour = async (req, res) => {
  try {
    console.log(req.body, "body");
    let body = { ...req.body, photo: req.file.filename };
    // console.log(body, "body");
    const data = new Tour(body);
    await data.save();
    res.status(200).send(data);
  } catch (error) {
    console.log(error, "error");
    res.status(500).send({ error: error });
  }
};

export const getTours = async (req, res) => {
  try {
    const data = await Tour.find().sort({ createdAt: 1 });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export const getTourById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Tour.findOne({ _id: id });
    console.log(data, "data");
    res.status(200).send(data);
  } catch (error) {
    res.status(200).send({ error: error });
  }
};

export const updateTour = async (req, res) => {
  try {
    const id = req.params.id;
    if (req.file) {
      req.body.photo = req.file.filename;
      const data = await Tour.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).send(data);
    } else {
      const data = await Tour.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).send(data);
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export const deleteTour = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Tour.findByIdAndDelete(id);
    res.status(200).send({ msg: "Deleted success" });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
