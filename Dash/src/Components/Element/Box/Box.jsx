
import "./Box.css"
const BoxModel = ({ src, h5, p ,h6,h4}) => {
  return (
    <div className="BoxModelDiv border border-0  cursor-pointer ">
      <div className="flex p-2  font-semibold">
        <div className="flex justify-start w-full">
          <h6 className="  text-gray-700 dark:text-gray-800 ">
            {h6}
          </h6>
        </div>
        <div className="flex justify-end w-full">
          <h4 className="  text-gray-700 dark:text-gray-400 ">{h4}</h4>
        </div>
      </div>
      <div className="max-w-sm bg-white ">
        <a href="#">
          <img
            className=" aspect-square w-full bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-40"
            src={src}
            alt={h5}
          />
        </a>
        <div className="p-5 text-left ">
          <a href="#">
            <h5 className=" text-xl tracking-tight text-gray-700">
              {h5}
            </h5>
          </a>
          <p className=" font-normal text-gray-700 dark:text-gray-400 ">{p}</p>
        </div>
        <hr className="underline " />
      </div>
    </div>
  );
};

export default BoxModel;