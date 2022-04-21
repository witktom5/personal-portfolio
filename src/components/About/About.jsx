function About() {
  return (
    <>
      <section
        className='flex justify-center bg-info pb-14 text-primary-content'
        id='about'
      >
        <div className='w-full lg:w-4/5'>
          <header>
            <h3 className='text-center text-4xl font-bold pb-14 pt-4'>About</h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus similique reprehenderit veritatis, sed tempore
            consectetur odio in iste porro quis quaerat, quae sapiente doloribus
            saepe esse explicabo facilis expedita debitis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Atque dignissimos tempore qui.
            Fugit unde maxime in quis quasi aspernatur, quia, rem aliquid libero
            nostrum quaerat hic iusto consequuntur ad sapiente!
          </p>
        </div>
      </section>
      <div className='wave wave-3'></div>
    </>
  );
}
export default About;
