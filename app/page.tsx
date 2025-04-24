export default function Home() {
  return (
    <>
      <div className="pt-2 text-xl">Not Vegan Yet?</div>
      <p className="py-4">Please watch this speech. It will explain you why a vegan future is a kinder future.</p>
      <div className="py-2">
        <iframe
          src="https://www.youtube.com/embed/uxhL2lsgokY?si=1CMtFfuaLlPGK9IV"
          allowFullScreen={true}
          className="w-full md:h-96 lg:h-[500px]"
        />
      </div>
    </>
  );
}
