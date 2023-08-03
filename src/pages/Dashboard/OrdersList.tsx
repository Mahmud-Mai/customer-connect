import OrdersListItem from "./OrdersListItem";

// redux imports
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";

const OrdersList = () => {
  const orders_data = useSelector((state: RootState) => state.orders.orders);

  const recentOrders = (): JSX.Element[] => {
    return orders_data.map(
      ({ id, label, date, price, status, qty, imgSrc }) => (
        <OrdersListItem
          key={id}
          label={label}
          date={date}
          price={price}
          status={status}
          qty={qty}
          imgSrc={imgSrc}
        />
      )
    );
  };

  return (
    <div className="flex flex-col w-full h-full p-5">
      <h2 className="mb-[23px]">Recent Orders</h2>
      <ul className="flex flex-col gap-3">{recentOrders()}</ul>
    </div>
  );
};

export default OrdersList;
