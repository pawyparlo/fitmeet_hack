import Card from "./Card";

const FeedTrainers = () => {
  return (
    <div>
      <div className="mx-4">
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Card
              key={item}
              name="Mudreh Kumbirai"
              type="Trainer"
              location="Krakw, Błonie"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedTrainers;
