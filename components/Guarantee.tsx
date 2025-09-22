import React from 'react'

const Guarantee = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div >
             <img
                            src="./GUARANTEE.png"
                            alt=""
                            className="h-120  "
                          />
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-6">
              Yes. That's How Much
              <br />
              We <span className="text-orange-500">Believe</span> In Our
              <br />
              Product
            </h2>

            <p className="text-gray-600 mb-4">
              We stand by our products and want you to be 100% satisfied with your purchase. If you're not feeling the
              difference in 30 days, we'll give you your money back—risk- free.
            </p>
          </div>
        </div>
      </section>
  )
}

export default Guarantee
