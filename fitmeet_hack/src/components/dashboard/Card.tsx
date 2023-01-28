import { DotsVerticalIcon } from "../elements/icons";
import Tag from "../elements/Tag";

const Card = ({ name = "", type = "", location = "" }) => {
  return (
    <div className="bg-primaryBlack rounded-md p-4">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <div className="bg-yellow rounded-full w-[40px] h-[40px] text-primaryBlack overflow-hidden">
                <img src="https://www.randomlists.com/img/people/steve_jobs.webp" />
              </div>
              <div className="absolute border-yellow border-[0.5px] border-solid text-center leading-[20px] bottom-[-0.5rem] right-[-0.5rem] text-[11px] bg-backgroundBlack w-[22px] h-[22px] rounded-full">
                49
              </div>
            </div>
            <div className="ml-4">
              <div className="text-xs text-gray-500">{type}</div>
              <div>
                <span>{name}</span>
                <span className="ml-1 text-xs text-gray-500">
                  {" "}
                  - 1 hour ago
                </span>
              </div>
            </div>
          </div>
          <div className="self-start text-gray-500">
            <DotsVerticalIcon />
          </div>
        </div>
        <div className="mt-4">
          Hey, I am looking for a partner/trainer who would like to help me with
          reaching my personal goal. I am currently preparing for my first 5k
          run.
        </div>
        <div className="flex items-center mt-4 gap-2">
          <Tag content="Running" />
          <Tag content="First Timer" />
          <Tag content="4/7 days" />
        </div>
        <div className="mt-4 pt-4 border-0 border-t-[0.25px] border-dashed border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-xs flex items-center gap-2">
              Location: {location}
            </div>
            <div className="bg-yellow text-black text-xs px-3 py-1 rounded-md">
              View Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
