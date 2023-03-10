import Card from "./Card";

const FeedMatches = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Card
            key={item}
            name="Mudreh Kumbirai"
            type="Sport Enthusiast"
            location="Krakw, Błonie"
          />
        ))}
      </div>
    </div>
  );
};

export default FeedMatches;
