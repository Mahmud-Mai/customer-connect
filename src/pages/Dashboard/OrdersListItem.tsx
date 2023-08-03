interface IOrdersListItem {
  data: {
    label: string;
    date: string;
    price: string;
    status: string;
    qty: number;
    imgSrc: string;
  };
}

const OrdersListItem = ({
  label,
  date,
  price,
  status,
  qty,
  imgSrc,
}: IOrdersListItem["data"]) => {
  return (
    <li className="w-full pb-[15px]">
      <div className="flex items-center gap-[14px] w-full">
        <img
          className="w-[49px] h-[49px] rounded-lg"
          src={imgSrc}
          alt="recent order"
        />
        <div className="flex flex-col w-full gap-3">
          <div className="flex justify-between items-center">
            <div className="text-black-60">{label}</div>
            <div className="text-xs text-[#A6A8B1]">{date}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-[17px] text-black/80">
              {price} x {qty}
            </div>
            <div
              className={`text-xs leading-[14.52px] 
               ${
                 status == "Confirmed"
                   ? "text-[#519C66] bg-[#32936F1F] "
                   : "text-[#CC5F5F] bg-[#F57E771F]"
               } 
               py-[2px] px-[15px]`}
            >
              {status}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default OrdersListItem;
