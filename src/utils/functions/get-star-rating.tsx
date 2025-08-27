import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
export const getStarRating = (rate: number) => {
  const firstIntegerValue = parseInt(rate.toString());
  const secondDecimalValue = rate - Math.floor(rate);

  const fullStar = Array.from({ length: firstIntegerValue }).map((_, index) => (
    <IoStar key={index} />
  ));

  const halfStar =
    secondDecimalValue >= 0.5 &&
    Array.from({ length: 1 }).map((_, index) => <IoStarHalf key={index} />);

  const outlineStar = (length: number) =>
    Array.from({ length }).map((_, index) => <IoStarOutline key={index} />);

  const restStar = () => {
    if (fullStar && !halfStar) {
      return outlineStar(5 - firstIntegerValue);
    }
    if (fullStar && halfStar) {
      return outlineStar(5 - (firstIntegerValue + halfStar.length));
    }
    if (!fullStar && !halfStar) {
      return outlineStar(5);
    }
    return;
  };
  return (
    <div className="flex text-yellow-600 dark:text-yellow-400">
      {fullStar}
      {halfStar}
      {restStar()}
    </div>
  );
};
