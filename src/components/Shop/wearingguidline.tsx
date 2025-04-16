import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaLeaf,
  FaWater,
  FaHandsWash,
  FaStoreAlt,
  FaBan,
  FaPray,
  FaInfoCircle,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import testimonialsData from "../Home/Testimonials/testimonialsData";

const RudrakshaComponent = () => {
  const [activeTab, setActiveTab] = useState("wear");
  const [selectedMukhi, setSelectedMukhi] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  // Sample data for different mukhi rudrakshas with images

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Auto-scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  // Toggle wishlist item
  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    
    <div className="container mx-auto px-4 py-8"><div className="py-12 px-4 md:px-8 lg:px-16 bg-[#FFFAF5]">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        How Rudraksha Can Transform Your Life
      </h1>
      <p className="text-gray-600 text-lg">
        Discover the spiritual and healing benefits of these sacred beads
      </p>
    </div>
  
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
      {[
        {
          title: "Ek Mukhi Rudraksha",
          description: "Represents Lord Shiva, brings enlightenment and spiritual growth",
          img: "/images/hero/hero-1.webp"
        },
        {
          title: "Dwi Mukhi Rudraksha",
          description: "Symbolizes unity, enhances relationships and harmony",
          img: "/images/hero/hero-1.webp"
        },
        {
          title: "Tri Mukhi Rudraksha",
          description: "Represents Agni, removes sins and negative energies",
          img: "/images/hero/hero-1.webp"
        },
        {
          title: "Chatur Mukhi Rudraksha",
          description: "Represents Brahma, enhances creativity and knowledge",
          img: "/images/hero/hero-1.webp"
        }
      ].map((item, index) => (
        <div 
          key={index}
          className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-80"
        >
          <div className="relative w-full h-full">
          <Image
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={500}  // Add appropriate width
            height={300} // Add appropriate height
            priority={false} // Set to true if this image should be preloaded
          />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
            <h3 className="text-xl font-bold mb-2 group-hover:text-amber-100 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-200 text-sm group-hover:text-gray-100 transition-colors">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
      

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm border border-[#800000]/20">
          <button
            onClick={() => setActiveTab("wear")}
            className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
              activeTab === "wear"
                ? "bg-[#800000] text-white"
                : "bg-white text-[#800000] hover:bg-[#800000]/10"
            }`}
          >
            Wear Guide
          </button>
          <button
            onClick={() => setActiveTab("care")}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === "care"
                ? "bg-[#800000] text-white"
                : "bg-white text-[#800000] hover:bg-[#800000]/10"
            }`}
          >
            Care Guide
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mb-12">
        {activeTab === "wear" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-white to-[#800000]/5 shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8 rounded-xl border border-[#800000]/20">
              <h2 className="text-2xl font-semibold text-[#800000] mb-6 flex items-center">
                <FaPray className="mr-3" /> Wearing Rituals
              </h2>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                    <FaLeaf className="text-[#800000] text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Purification Process
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Soak in Ganga jal or raw cow milk for 30 minutes while
                      chanting {`"Om Namah Shivaya"`} 108 times to cleanse
                      impurities. Add tulsi leaves for enhanced purification.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                    <FaWater className="text-[#800000] text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Activation Ceremony
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Perform on Monday morning after shower during Shukla
                      Paksha. Light a diya with desi ghee, offer bilva leaves to
                      Lord Shiva, and chant the appropriate mantra for your
                      mukhi count.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                    <FaBan className="text-[#800000] text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Prohibitions
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Avoid alcohol, non-vegetarian food, and impure thoughts.
                      Remove during intimate moments, menstrual cycle, and when
                      visiting cremation grounds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-[#800000]/5 shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8 rounded-xl border border-[#800000]/20">
              <h2 className="text-2xl font-semibold text-[#800000] mb-6 flex items-center">
                <div className="mr-3" /> Stringing & Maintenance
              </h2>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                    <div className="text-[#800000] text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Stringing Materials
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Use red silk thread (for Shakti), gold/silver wire (for
                      prosperity), or pure cotton (for purity). Include a gold
                      bead or gomedh stone as a separator for enhanced effects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                    <FaHandsWash className="text-[#800000] text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Cleaning Frequency
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Clean monthly with rose water or ganga jal on Ekadashi
                      days. Apply sandalwood paste or sesame oil occasionally to
                      maintain luster and energetic potency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                    <FaStoreAlt className="text-[#800000] text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Storage</h3>
                    <p className="text-gray-600 mt-1">
                      {`When not wearing, store in a red silk pouch in your puja 
                      room's northeast corner. Place near Shiva lingam or Sri 
                      Yantra for daily energy recharge.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "care" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-white to-[#800000]/5 shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8 rounded-xl border border-[#800000]/20">
              <h2 className="text-2xl font-semibold text-[#800000] mb-6">
                Daily Care Routine
              </h2>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                    <span className="text-[#800000]">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Morning Ritual
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Touch the beads to your third eye, chant your personal
                      mantra 11 times, and visualize divine white light flowing
                      through them to your entire body.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                    <span className="text-[#800000]">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Cleaning</h3>
                    <p className="text-gray-600 mt-1">
                      Wipe gently with a soft cotton cloth dipped in tulsi
                      water. For deep cleaning, use a soft toothbrush with rose
                      water and dry immediately.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                    <span className="text-[#800000]">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Energetic Recharge
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Place under moonlight (especially on Purnima) for 30
                      minutes or morning sunlight (before 10am) for 15 minutes
                      with a piece of camphor nearby.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-[#800000]/5 shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8 rounded-xl border border-[#800000]/20">
              <h2 className="text-2xl font-semibold text-[#800000] mb-6">
                Long-term Preservation
              </h2>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                    <span className="text-[#800000]">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Seasonal Care
                    </h3>
                    <p className="text-gray-600 mt-1">
                      During monsoon, apply a thin layer of sandalwood oil mixed
                      with kumkum once weekly to prevent moisture absorption and
                      cracking.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                    <span className="text-[#800000]">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Professional Maintenance
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Get your Rudraksha re-energized by a priest annually
                      during Maha Shivaratri or Shravan month for optimal
                      spiritual potency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                    <span className="text-[#800000]">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Damage Prevention
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Avoid extreme temperatures and chemicals. Remove before
                      swimming, gym workouts, cooking, or any activity causing
                      excessive sweating.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "types" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          ></motion.div>
        )}
      </div>

      {/* Certification & Authenticity Section */}
      <div className="bg-gradient-to-r from-[#800000]/5 to-[#800000]/10 p-8 rounded-xl shadow-inner border border-[#800000]/20 mb-12">
        <h2 className="text-2xl font-semibold text-[#800000] mb-6 text-center">
          Authenticity Assurance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md border border-[#800000]/20">
              <svg
                className="w-8 h-8 text-[#800000]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              100% Genuine Beads
            </h3>
            <p className="text-gray-600 text-sm">
              Sourced directly from Nepal and Java with certification from our
              expert priests
            </p>
          </div>
          <div className="text-center p-4">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md border border-[#800000]/20">
              <svg
                className="w-8 h-8 text-[#800000]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Energy Charged</h3>
            <p className="text-gray-600 text-sm">
              Prana-pratishtha performed by Vedic priests with proper mantras
              and rituals
            </p>
          </div>
          <div className="text-center p-4">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md border border-[#800000]/20">
              <svg
                className="w-8 h-8 text-[#800000]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Secure Purchase
            </h3>
            <p className="text-gray-600 text-sm">
              7-day money-back guarantee if not satisfied with authenticity and
              quality
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#800000] mb-8 text-center">
          What Our Devotees Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "The 5 Mukhi Rudraksha has significantly improved my concentration and reduced stress levels. Authentic quality!",
              author: "Rajesh K., Mumbai",
              rating: 5,
            },
            {
              quote:
                "After wearing the 1 Mukhi from this store, I've experienced profound spiritual growth. Worth every penny.",
              author: "Priya M., Delhi",
              rating: 5,
            },
            {
              quote:
                "Excellent customer service and genuine products. My 7 Mukhi has brought noticeable prosperity.",
              author: "Amit S., Bangalore",
              rating: 4,
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-[#800000]/10"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-[#800000]"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="text-[#800000] font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-[#800000]/5 p-8 rounded-xl border border-[#800000]/20">
        <h2 className="text-3xl font-bold text-[#800000] mb-4">
          Ready to Experience Rudraksha Benefits?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Browse our collection of authentic, priest-blessed Rudraksha beads
          with lifetime authenticity guarantee.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#800000] hover:bg-[#600000] text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
            Shop Rudraksha Collection
          </button>
          <button className="bg-white hover:bg-gray-50 text-[#800000] border border-[#800000] px-8 py-3 rounded-lg font-medium transition-colors shadow hover:shadow-md">
            Consult Our Priest
          </button>
        </div>
      </div>

      {/* Modal for Mukhi Details */}
      {showModal && selectedMukhi && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 relative"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={selectedMukhi.image}
                alt={selectedMukhi.name}
                className="w-full h-full object-cover"
                width={800}  // Set appropriate width
                height={800} // Set appropriate height
                priority={false} // Set to true if this is above the fold
              />
            </div>
              <div>
                <h3 className="text-2xl font-bold text-[#800000] mb-2">
                  {selectedMukhi.name} Rudraksha
                </h3>
                <div className="h-1 w-20 bg-[#800000]/30 mb-4"></div>
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-[#800000] mr-3">
                    {selectedMukhi.price}
                  </span>
                  {selectedMukhi.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {selectedMukhi.originalPrice}
                    </span>
                  )}
                  {selectedMukhi.discount && (
                    <span className="text-sm bg-[#800000]/10 text-[#800000] px-2 py-1 rounded ml-2">
                      {selectedMukhi.discount}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-4">{selectedMukhi.benefits}</p>
                <div className="bg-[#800000]/5 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-[#800000] mb-2">
                    Recommended For:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 pl-2">
                    <li>Spiritual growth and meditation enhancement</li>
                    <li>Health and wellness benefits specific to this mukhi</li>
                    <li>
                      Protection from negative energies and planetary influences
                    </li>
                    <li>Specific chakra activation and balancing</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-[#800000] hover:bg-[#600000] text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center">
                    <FaShoppingCart className="mr-2" /> Add to Cart
                  </button>
                  <button
                    onClick={() => toggleWishlist(selectedMukhi.id)}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium flex items-center justify-center ${
                      wishlist.includes(selectedMukhi.id)
                        ? "bg-[#800000] text-white"
                        : "bg-white text-[#800000] border border-[#800000]"
                    }`}
                  >
                    <FaHeart className="mr-2" />{" "}
                    {wishlist.includes(selectedMukhi.id)
                      ? "In Wishlist"
                      : "Add to Wishlist"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default RudrakshaComponent;
