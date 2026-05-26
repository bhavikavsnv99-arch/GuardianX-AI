type MessageProps = {
  sender: string;
  text: string;
};

export default function ChatMessage({
  sender,
  text,
}: MessageProps) {
  return (
    <div
      className={`
        p-4
        rounded-2xl
        max-w-2xl
        whitespace-pre-wrap
        ${
          sender === "user"
            ? "bg-red-500 ml-auto"
            : "bg-gray-700"
        }
      `}
    >

      <p>{text}</p>

    </div>
  );
}