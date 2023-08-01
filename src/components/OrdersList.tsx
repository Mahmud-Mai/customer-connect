import OrdersListItem from "./OrdersListItem";

const OrdersList = () => {
  return (
    <div className="flex flex-col w-full h-full p-5">
      <h2 className="mb-[23px]">Recent Orders</h2>
      {/* <Recent Orders List  */}
      <ul className="flex flex-col gap-3">
        <OrdersListItem />
      </ul>
    </div>
  );
};

export default OrdersList;
