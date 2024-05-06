import { baseImgUrl } from "../utils/constants";

const DetailDisplay = ({ title, data }) => {
  return (
    <div className="mb-6 cursor-pointer ">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex gap-5">
        {data.map((item, i) =>
          item.logo_path ? (
            <div className="bg-white py-1 px-2 rounded-md">
              <img
                className="w-[100px] h-[40px] object-contain"
                src={baseImgUrl + item.logo_path}
              />
            </div>
          ) : (
            <div
              key={i}
              className="border py-1 px-2 rounded-md text-sm hover:opacity-50"
            >
              {item.name}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DetailDisplay;
