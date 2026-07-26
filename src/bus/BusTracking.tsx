import BusMap from "./BusMap";

export default function BusTracking() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        🚌 SRIT Live Bus Tracking
      </h1>

      <BusMap />
    </div>
  );
}