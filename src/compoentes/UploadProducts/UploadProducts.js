import React from "react";

const UploadProducts = () => {
  const handlePdData = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const imgLink = event.target.imgLink.value;
    console.log(name, price, imgLink);
    fetch("http://localhost:5000/product", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        imgLink,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div className="container">
      <h2>Upload Products</h2>
      <form onSubmit={handlePdData} className="mx-auto text-center">
        <br />
        <input
          className="mb-3"
          type="text"
          name="name"
          placeholder="Product Name"
        />
        <br />
        <input
          className="mb-3"
          type="text"
          name="price"
          placeholder="Product Price"
        />
        <br />
        <input
          className="mb-3"
          type="text"
          name="imgLink"
          placeholder="Image Link"
        />
        <br />
        <input className="mb-3" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UploadProducts;
