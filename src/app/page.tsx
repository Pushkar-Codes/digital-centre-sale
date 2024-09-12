export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-black p-12">
      <video
        src="/asset/sale-vid.mp4"
        autoPlay
        muted
        loop
        className="w-full sm:w-[50%] max-w-4xl"
      />
    </div>
  );
}
