import SectionHeader from '../layout/SectionHeader';
function About() {
  return (
    <>
      <section
        className='flex justify-center bg-info pb-14 relative bg-about'
        id='about'
      >
        <div className='w-full lg:w-3/5 px-3'>
          <SectionHeader title='About' alternateColor />
          <div className='card bg-base-100 shadow-xl'>
            <div className='card-body px-8'>
              <h3 className='card-title mb-5 text-2xl'>fsafasfas</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus similique reprehenderit veritatis, sed tempore
                consectetur odio in iste porro quis quaerat, quae sapiente
                doloribus saepe esse explicabo facilis expedita debitis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Atque
                dignissimos tempore qui. Fugit unde maxime in quis quasi
                aspernatur, quia, rem aliquid libero nostrum quaerat hic iusto
                consequuntur ad sapiente! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aperiam commodi minus tempore nobis architecto
                fugiat, quae corporis harum, blanditiis in rerum voluptas, sunt
                veritatis suscipit nisi tempora natus assumenda laudantium.
                Architecto sunt deserunt incidunt voluptas, odio porro
                voluptatem aliquid beatae voluptatum? Accusamus sequi,
                voluptatum nam, quod tempora ipsa perferendis sit culpa magnam
                tenetur vel quia sapiente iusto aut cupiditate eveniet! Ut
                asperiores qui labore, ea illo odit cupiditate molestias?
                Voluptates nesciunt beatae, soluta ad laboriosam maiores
                corporis cum reiciendis fuga ea assumenda tempora aperiam
                provident at ratione neque rem! Voluptatem. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Odio et illum consequatur
                veniam a quas, ducimus cumque? Autem repudiandae temporibus at
                corrupti error, doloribus similique illum sed debitis ea
                nesciunt. Recusandae impedit ea, laboriosam consequuntur fugiat
                officiis dignissimos ipsa possimus ducimus quibusdam porro dolor
                praesentium modi facere ratione reprehenderit, blanditiis,
                perspiciatis veritatis beatae nemo similique. Impedit
                repudiandae deleniti voluptatum veritatis? Quam vel in,
                aspernatur rerum sint ad aliquam. Quis id excepturi culpa
                dignissimos sequi. Quas, nulla, ullam quod modi quia doloribus
                minus debitis autem maxime veritatis blanditiis ipsum doloremque
                vero? Fugiat nesciunt magnam necessitatibus facere dolor eos
                quibusdam rem accusantium dolorem deserunt labore tempore illum
                qui maxime aspernatur nobis consectetur ea non dignissimos,
                cupiditate iusto! Architecto ratione expedita aperiam sequi!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className='wave wave-3'></div>
    </>
  );
}
export default About;
