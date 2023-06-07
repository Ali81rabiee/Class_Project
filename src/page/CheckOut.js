import React from "react";

const CheckOut = () => {
  const userAddress = JSON.parse(localStorage.getItem("user address"));
  const userOrders = JSON.parse(localStorage.getItem("cart"));
  const TotalPrice = JSON.parse(localStorage.getItem("allTotalPrice"));
  console.log(TotalPrice);
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col glass mt-20 py-10">
        {/* <div className="flex justify-between w-full">
          <h1 className="text-5xl text-center font-bold mx-40">Your Address</h1>
          <h1 className="text-5xl text-center font-bold mx-40">Your orders</h1>
        </div> */}
        <div className="flex lg:flex-row flex-col justify-between w-full">
          <div className="lg:w-1/2">
            <h1 className="text-5xl text-center font-bold mt-5">
              Your Address
            </h1>
            <div className="py-6 text-xl font-bold flex justify-between border-b-2 border-black">
              <span>city:</span>
              <span>{userAddress.city}</span>
            </div>
            <div className="py-6 text-xl font-bold flex justify-between border-b-2 border-black">
              <span>addres:</span>
              <span>{userAddress.address}</span>
            </div>
            <div className="py-6 text-xl font-bold flex justify-between border-b-2 border-black">
              <span>post code</span>
              <span>{userAddress.postCode}</span>
            </div>
            <div className="py-6 text-lg font-bold flex justify-between border-b-2 border-black">
              <span>phone number: </span>
              <span>{userAddress.phone}</span>
            </div>
          </div>
          <div className="px-8"></div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl text-center font-bold mt-5">Your orders</h1>
            {userOrders.map((item) => (
              <div className="grid grid-cols-4 justify-items-center content-center ml-auto px-1 py-5 border-b-2 border-black">
                <div className="h-40">
                  <img src={item.product.image} style={{ height: "85%" }} />
                </div>
                <div className="text-center my-auto w-full">
                  <h1 className="text-center">{item.product.name}</h1>
                </div>
                <div className="text-center my-auto w-full">
                  <p className="font-bold">{item.product.price}$</p>
                </div>

                <div className="text-center my-auto w-full">
                  <p className="font-bold">{item.quantity}</p>
                </div>
              </div>
            ))}
            <p className="text-center mt-5 font-bold">TOTAL : {TotalPrice}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
