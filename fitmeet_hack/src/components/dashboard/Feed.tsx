import { DotsVerticalIcon } from "../elements/icons";

const Tag = ({ content = "", children = null, ...restProps }) => {
  return (
    <div
      className="bg-backgroundBlack text-xs px-3 py-1 rounded-md"
      {...restProps}
    >
      {children ? children : content}
    </div>
  );
};

const Card = ({}) => {
  return (
    <div className="bg-primaryBlack rounded-md p-4">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-yellow rounded-full w-[40px] h-[40px] text-primaryBlack">
              IMG
            </div>
            <div className="ml-4">
              <div className="text-xs text-gray-500">Sport Enthusiast</div>
              <div>Mudreh Kumbirai</div>
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
              Location: Kraków, Błonie
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

const DashboardFeed = ({}) => {
  return (
    <div className="mx-4">
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Card key={item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardFeed;
