import OnBoardLeft from "./OnBoardLeft";
import OnBoardRight from "./OnBoardRight";

const OnBoard = () => {
  return (
    <section className="flex bg-white/80 shadow-md w-full max-w-3xl mx-auto rounded-lg">
      <section className="w-2/5 border-r border-gray-700 font-grotesque flex flex-col justify-between">
        <OnBoardLeft />
      </section>

      <section className="flex w-3/5 flex-col justify-between font-grotesque">
        <OnBoardRight />
      </section>
    </section>
  );
};
export default OnBoard;
