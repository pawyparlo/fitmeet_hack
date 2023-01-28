import { Link } from "react-router-dom";

const mockedCategories = [
  {
    name: "Running",
    activeUser: 423,
  },
  {
    name: "Cycling",
    activeUser: 23,
  },
  {
    name: "Swimming",
    activeUser: 54,
  },
  {
    name: "Yoga",
    activeUser: 456,
  },
  {
    name: "Gym",
    activeUser: 678,
  },
  {
    name: "Boxing",
    activeUser: 10,
  },
  {
    name: "Dancing",
    activeUser: 52,
  },
  {
    name: "Hiking",
    activeUser: 222,
  },
  {
    name: "Skiing",
    activeUser: 12,
  },
];

const FeedCategories = () => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-3 text-xs text-gray-400 gap-2">
        {mockedCategories
          .sort(
            (categoryA, categoryB) =>
              categoryB.activeUser - categoryA.activeUser
          )
          .map((category) => (
            <Link
              key={category.name}
              to={"/matches"}
              className="px-2 py-1 text-gray-400 bg-primaryBlack rounded-md"
            >
              {`${category.name} (${category.activeUser})`}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default FeedCategories;
