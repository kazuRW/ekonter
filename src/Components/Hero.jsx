function Hero() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Penyedia Terbaik Jasa X</h1>
            <p className="py-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates inventore nemo earum veritatis quibusdam saepe obcaecati tenetur asperiores tempora ipsa expedita omnis beatae nulla voluptatem perferendis eos dolores, iure sint?
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero