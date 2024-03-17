import PlanCard from "../components/PlanCard";

export default function PlansPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[600px]">
        <h1 className="font-bold text-xl">Choose a plan that works for you:</h1>

        <div className="flex w-full gap-2 mt-2">
          <PlanCard />
          <PlanCard />
        </div>

        <button className="w-full mt-2 bg-red-500 rounded text-white p-2 hover:bg-red-400">
          Purchase
        </button>
      </div>
    </div>
  );
}
