import React from "react";
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AdminNav from "../navbar/AdminNav";
import { useForm, useFieldArray } from "react-hook-form";
const AddTours = () => {
  const [data, setData] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",

    description: "",
    price: null,
    maxGroupSize: null,
    tourDate: "",
  });

  const addForm = useForm({
    defaultValues: {
      title: "",
      city: "",
      address: "",
      distance: "",
      description: "",
      price: null,
      maxGroupSize: null,
      tourDate: "",
      foods: [{ name: "" }],
      cloths: [{ name: "" }],
      hotels: [{ name: "" }],
    },
  });
  const foodsArray = useFieldArray({
    control: addForm.control,
    name: "foods",
  });
  const clothsArray = useFieldArray({
    control: addForm.control,
    name: "cloths",
  });
  const hotelsArray = useFieldArray({
    control: addForm.control,
    name: "hotels",
  });
  // const [photo, setPhoto] = useState(null);
  // const handleChange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleFileChange = (e) => {
  //   setPhoto(e.target.files[0]);
  // };
  const navigate = useNavigate();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     formData.append("photo", photo);
  //     formData.append("title", data.title);
  //     formData.append("city", data.city);
  //     formData.append("address", data.address);
  //     formData.append("distance", data.distance);
  //     formData.append("description", data.description);
  //     formData.append("price", data.price);
  //     formData.append("maxGroupSize", data.maxGroupSize);
  //     formData.append("tourDate", data.tourDate);
  //     const res = await axios.post("http://localhost:5000/tour", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     console.log(res.data, "tour");
  //     toast.success("tour addedd successfully", {});
  //     navigate("/viewTours");
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err.response.data.msg, {});
  //   }
  // };
  console.log(data, "data");
  return (
    <div className="px-md-5 px-sm-0 py-md-5 py-sm-0  mb-2 tourbg text-dark">
      <div className="mt-2">
        <AdminNav />
        <div className="container-fluid bg-light px-md-5 px-sm-0 py-md-5 py-sm-0  bg-opacity-50  ">
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-5 ">
              <div className="card bg-success p-5 text-dark bg-opacity-25  ">
                <div className="card-body">
                  <form>
                    <h1>ADD TOURS</h1>
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        title
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="title"
                        // value={data.title}
                        // onChange={handleChange}
                        {...addForm.register("title", {
                          required: "Title is required",
                        })}
                        placeholder="Enter Title"
                        aria-describedby="emailHelp"
                      />
                      {addForm.formState.errors.title && (
                        <span>
                          {addForm.formState.errors.title.message.toString()}
                        </span>
                      )}
                    </div>{" "}
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        city
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="city"
                        // value={data.city}
                        // onChange={handleChange}
                        {...addForm.register("city", {
                          required: "City is required",
                        })}
                        placeholder="Enter city"
                        aria-describedby="emailHelp"
                      />
                      {addForm.formState.errors.city && (
                        <span>
                          {addForm.formState.errors.city.message.toString()}
                        </span>
                      )}
                    </div>{" "}
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="address"
                        // value={data.address}
                        // onChange={handleChange}
                        {...addForm.register("address", {
                          required: "Address is required",
                        })}
                        placeholder="Enter address"
                        aria-describedby="emailHelp"
                      />
                      {addForm.formState.errors.address && (
                        <span>
                          {addForm.formState.errors.address.message.toString()}
                        </span>
                      )}
                    </div>{" "}
                    <div class="mb-3">
                      <label for="formFile" class="form-label">
                        Upload new photo
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        name="photo"
                        // value={data.photo}
                        // onChange={handleFileChange}
                        {...addForm.register("photo", {
                          required: "Photo is required",
                        })}
                      />
                      {addForm.formState.errors.photo && (
                        <span>
                          {addForm.formState.errors.photo.message.toString()}
                        </span>
                      )}
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        description
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="description"
                        // value={data.description}
                        // onChange={handleChange}
                        {...addForm.register("description", {
                          required: "Description is required",
                        })}
                        placeholder="Enter description"
                        aria-describedby="emailHelp"
                      />
                      {addForm.formState.errors.description && (
                        <span>
                          {addForm.formState.errors.description.message.toString()}
                        </span>
                      )}
                    </div>{" "}
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        price
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="price"
                        // value={data.price}
                        // onChange={handleChange}
                        {...addForm.register("price", {
                          required: "Price is required",
                        })}
                        placeholder="Enter price"
                        aria-describedby="emailHelp"
                      />
                      {addForm.formState.errors.price && (
                        <span>
                          {addForm.formState.errors.price.message.toString()}
                        </span>
                      )}
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        maxGroupSize
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="maxGroupSize"
                        // value={data.maxGroupSize}
                        // onChange={handleChange}
                        {...addForm.register("maxGroupSize", {
                          required: "MaxGroupSize is required",
                        })}
                        placeholder="Enter maxGroupSize"
                        aria-describedby="emailHelp"
                      />
                      {addForm.formState.errors.maxGroupSize && (
                        <span>
                          {addForm.formState.errors.maxGroupSize.message.toString()}
                        </span>
                      )}
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        Tour Date
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="exampleInputName"
                        name="tourDate"
                        // value={data.tourDate}
                        // onChange={handleChange}
                        {...addForm.register("tourDate", {
                          required: "Tour Date is required",
                        })}
                        placeholder="Enter Tour Date"
                        aria-describedby="emailHelp"
                      />
                      {addForm.formState.errors.tourDate && (
                        <span>
                          {addForm.formState.errors.tourDate.message.toString()}
                        </span>
                      )}
                    </div>
                    {foodsArray.fields.map((field, index) => (
                      <div key={index} className="row mt-2">
                        <div className="col-8">
                          {" "}
                          <input
                            placeholder="Enter Food"
                            class="form-control"
                            type="text"
                            {...addForm.register(`foods.${index}.name`)}
                          />
                        </div>
                        <div className="col-4">
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => foodsArray.remove(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="text-center">
                      {" "}
                      <button
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                        className="btn btn-warning"
                        type="button"
                        onClick={() => foodsArray.append({ name: "" })}
                      >
                        Add Food
                      </button>
                    </div>
                    {clothsArray.fields.map((field, index) => (
                      <div key={index} className="row mt-2">
                        <div className="col-8">
                          {" "}
                          <input
                            placeholder="Enter Cloth"
                            class="form-control"
                            type="text"
                            {...addForm.register(`cloths.${index}.name`)}
                          />
                        </div>
                        <div className="col-4">
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => clothsArray.remove(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="text-center">
                      {" "}
                      <button
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                        className="btn btn-warning"
                        type="button"
                        onClick={() => clothsArray.append({ name: "" })}
                      >
                        Add Cloth
                      </button>
                    </div>
                    {hotelsArray.fields.map((field, index) => (
                      <div key={index} className="row mt-2">
                        <div className="col-8">
                          {" "}
                          <input
                            placeholder="Enter Hotel"
                            class="form-control"
                            type="text"
                            {...addForm.register(`hotels.${index}.name`)}
                          />
                        </div>
                        <div className="col-4">
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => hotelsArray.remove(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="text-center">
                      {" "}
                      <button
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                        className="btn btn-warning"
                        type="button"
                        onClick={() => hotelsArray.append({ name: "" })}
                      >
                        Add Hotel
                      </button>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-warning"
                      onClick={addForm.handleSubmit(async (data) => {
                        console.log(data);
                        try {
                          const formData = new FormData();
                          formData.append("title", data.title);
                          formData.append("city", data.city);
                          formData.append("address", data.address);
                          // formData.append("distance", data.distance);
                          formData.append("description", data.description);
                          formData.append("price", data.price);
                          formData.append("maxGroupSize", data.maxGroupSize);
                          formData.append("tourDate", data.tourDate);
                          formData.append("foods", JSON.stringify(data.foods));
                          formData.append(
                            "cloths",
                            JSON.stringify(data.cloths)
                          );
                          formData.append(
                            "hotels",
                            JSON.stringify(data.hotels)
                          );
                          formData.append("photo", data.photo[0]);
                          const res = await axios.post(
                            "http://localhost:5000/tour",
                            formData
                          );
                          toast.success("tour addedd successfully", {});
                          addForm.reset();
                        } catch (error) {
                          toast.error(error.response.data.msg, {});
                        }
                      })}
                    >
                      Submit
                    </button>
                    <div className="mt-3">
                      {/* <Link class="form-text mt-5" to="/login">
                        Alredy Registered.?..Login here...
                      </Link> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTours;
