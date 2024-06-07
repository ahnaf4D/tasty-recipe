export default function Hero() {
  return (
    <div>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage:
            'url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTM2OTgxMy1pbWFnZS1rd3Z4eHA5MS5qcGc.jpg)',
        }}
      >
        <div className='hero-overlay bg-opacity-20'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-xl'>
            <h1 className='mb-5 text-5xl text-white font-bold'>
              Welcome to Tasty Recipe
            </h1>
            <p className='mb-5 text-gray-300 text-xl font-medium'>
              A mouthwatering close-up of a dish (e.g., pasta with vibrant sauce
              and fresh herbs, sizzling steak with roasted vegetables, decadent
              chocolate cake). Come hungry and go happy!!!
            </p>
            <button className='btn btn-primary'>Explore Now</button>
            <>&nbsp;</>
            <>&nbsp;</>
            <button className='btn btn-success'>Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
}
