import iphone_1 from "../assets/iphone_1.jpg"

const OrdersListItem = () => {
  return (
            <li className="w-full pb-[15px]">
            <div className="flex items-center gap-[14px] w-full">
                <img className="w-[49px] h-[49px] rounded-lg" src={iphone_1} alt="recent order" />
                <div className="flex flex-col w-full gap-3">
                    <div className="flex justify-between items-center">
                        <div className="text-black-60">iPhone 13</div>
                        <div className="text-xs text-black/20">12 Sept 2022</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-[17px] text-black/80">₦730,000.00 x 1</div>
                        <div className="text-xs leading-[14.52px] text-[#CC5F5F] bg-[#F57E771F] py-[2px] px-[15px]">Pending</div>
                    </div>
                </div>
            </div>
        </li>
  )
}

export default OrdersListItem
