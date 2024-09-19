import StarIcon from "./StarIcon";

function StarRating({ starCount = 5, size = 20, rating = 0 }) {
  const wholePartOfRating = Number.parseInt(rating);
  const fraction = wholePartOfRating === starCount ? 1 : rating - wholePartOfRating;
  const filledSection = size * fraction;

  const stars = new Array(starCount);

  return (
    <>
      {stars.fill(0).map((_, index) => {
        const filledPart = index + 1 <= wholePartOfRating ? size : index === wholePartOfRating ? filledSection : 0;
        return <StarIcon key={index} id={index} size={size} filledPart={filledPart} />;
      })}
    </>
  );
}

export default StarRating;
