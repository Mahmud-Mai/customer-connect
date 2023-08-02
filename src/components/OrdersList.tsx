import OrdersListItem from "./OrdersListItem";
import iphone_1 from "../assets/iphone_1.jpg";
import iphone_2 from "../assets/iphone_2.jpg";
import iphone_3 from "../assets/iphone_3.jpg";

interface IOrdersList {
  data: {
    key: number;
    label: string;
    date: string;
    price: string;
    status: string;
    qty: number;
    imgSrc: string;
  }[];
}

const ORDERS_DATA = [
  {
    id: 0,
    label: "iPhone 13",
    date: "12 Sept 2023",
    price: "₦730,000.00",
    qty: 1,
    imgSrc: iphone_1,
    status: "Pending",
  },
  {
    id: 1,
    label: "iPhone 13",
    date: "12 Sept 2023",
    price: "₦710,000.00",
    qty: 3,
    imgSrc: iphone_2,
    status: "Confirmed",
  },
  {
    id: 2,
    label: "iPhone 13",
    date: "12 Sept 2023",
    price: "₦780,000.00",
    qty: 4,
    imgSrc: iphone_3,
    status: "Pending",
  },
  {
    id: 3,
    label: "iPhone 13",
    date: "12 Sept 2023",
    price: "₦830,000.00",
    qty: 2,
    imgSrc: iphone_1,
    status: "Confirmed",
  },
  {
    id: 4,
    label: "iPhone 13",
    date: "12 Sept 2023",
    price: "₦950,000.00",
    qty: 8,
    imgSrc: iphone_3,
    status: "Pending",
  },
];

const OrdersList = () => {
  const recentOrders = (): JSX.Element[] => {
    return ORDERS_DATA.map(
      ({
        id,
        label,
        date,
        price,
        status,
        qty,
        imgSrc,
      }): IOrdersList["data"] => {
        return (
          <OrdersListItem
            key={id}
            label={label}
            date={date}
            price={price}
            status={status}
            qty={qty}
            imgSrc={imgSrc}
          />
        );
      }
    );
  };

  return (
    <div className="flex flex-col w-full h-full p-5">
      <h2 className="mb-[23px]">Recent Orders</h2>
      {/* <Recent Orders List  */}
      <ul className="flex flex-col gap-3">{recentOrders()}</ul>
    </div>
  );
};

export default OrdersList;
