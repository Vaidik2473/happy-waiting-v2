import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Index  () {
    const testimonials = [
        {
          id: 1,
          name: 'Diane Lawrence',
          image: '/images/testimonial11.jpg',
          comment: 'The Happy Waiting app made my dining experience so much better. I enjoyed playing games while waiting for my food, and the discounts were a nice bonus!',
        },
        {
          id: 2,
          name: 'Jane Smith',
          image: '/images/testimonial2.jpeg',
          comment: 'I love how easy it is to scan the QR code and play games. It makes waiting for food a fun and interactive experience. Highly recommended!',
        },
        {
          id: 3,
          name: 'Natlie Johnson',
          image: '/images/testimonial3.png',
          comment: 'The best part about Happy Waiting is the excellent service they provide. The staff is friendly and attentive, ensuring a pleasant dining experience.',
        },
      ];

      
  return (
    <>
    <Navbar></Navbar>

    <div className="container col-span-10 mx-auto px-4 py-2">
      <div className="flex md:flex-row flex-col items-center lg:gap-5 py-5">
      <div className="">


          <h1 className="text-5xl font-bold leading-tight mb-4">Eat "Play" Repeat</h1>
          <p className="text-xl mt-3">Happy Waiting is a revolutionary software that has been made to enhance the waiting experience for foodies while they wait for food to be prepared.</p>
          <div className="grid gap-2 grid-cols-1 md:flex md:justify-start mt-5">
            <button type="button" className="btnPrimary text-xl px-4 py-2 md:mr-2">
              <p href="signin" className=" ">
                Sign in
              </p>
            </button>
            <p type="button" className="btnSecondary text-lg px-4 py-2">
              Download
            </p>
          </div>
        </div>
        <div className=" ">
          <Image
            src="/images/burger.jpg"
            alt="Bootstrap Themes"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        
      </div>
    </div>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 p-4 py-6 rounded-2xl m-4 bg-[#d7eaff] gap-4">
        <div className="flex flex-col items-center">
          <img src="/images/qr-code.svg" alt="qr code" className="h-36 w-36" />
          <h3 className="mt-4 text-2xl font-bold mb-4">Scan and Play</h3>
          <p className="text-center px-10">While waiting scan qr code on your table play your favourite game and get a discount.</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/images/discount-coupon.svg" alt="qr code" className="h-36 w-36" />
          <h3 className="mt-4 text-2xl font-bold mb-4">Easy Discounts</h3>
          <p className="text-center px-10">Discount is applied directly at the payment desk to make the process easy for foodies.</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/images/service.svg" alt="qr code" className="h-36 w-36" />
          <h3 className="mt-4 text-2xl font-bold mb-4">Best Service</h3>
          <p className="text-center px-10">We offer the best-in-class service because foodies are our clients.</p>
        </div>
      </div>
    </div>

    <div className="container mt-40 mx-auto px-4 py-8 mb-20">
      <h2 className="text-5xl font-bold mb-6">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-2xl shadow-xl border p-6">
            <div className="flex items-center mb-4 ">
              <div className="flex-shrink-0 h-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full "
                />
              </div>
              <div className="ml-4">
                <h3 className="font-bold">{testimonial.name}</h3>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.comment}</p>
          </div>
                  ))}
    </div>
    </div>
    <Footer ></Footer>



    </>
  );
};

