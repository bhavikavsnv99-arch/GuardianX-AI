type AIProps = {
  response: string;
};

export default function AIResponseBox({
  response,
}: AIProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mt-10">

      <h2 className="text-2xl font-bold text-red-500 mb-4">
        AI Analysis
      </h2>

      <p className="text-gray-300 leading-8">
        {response}
      </p>

    </div>
  );
}