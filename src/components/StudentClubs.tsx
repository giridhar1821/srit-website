

const clubs = [
  {
    title: "AWS Cloud Club",
    description:
      "Hands-on cloud computing, AWS certifications, hackathons and workshops.",
    image: "/images/clubs/aws.png",
  },
  {
    title: "Shutter Bugs",
    description:
      "Photography, videography and creative media production.",
    image: "/images/clubs/shutterbugs.png",
  },
  {
    title: "Toastmasters",
    description:
      "Public speaking, communication and leadership development.",
    image: "/images/clubs/toastmasters.png",
  },
  {
    title: "NCC",
    description:
      "Discipline, leadership and national service activities.",
    image: "/images/clubs/ncc.png",
  },
  {
    title: "NSS",
    description:
      "Community service, blood donation and social awareness drives.",
    image: "/images/clubs/nss.png",
  },
  {
    title: "Rotaract",
    description:
      "Leadership, networking and community impact projects.",
    image: "/images/clubs/rotaract.png",
  },
];
const StudentClubs: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold">
            Student <span className="text-orange-500">Clubs</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Explore technical, cultural and service-oriented clubs that help
            students develop leadership, creativity and professional skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => {

            return (
              <div
                key={index}
                className="group bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-gray-200 dark:border-neutral-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
  <img
    src={club.image}
    alt={club.title}
    className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
  />
</div>

                <h3 className="font-bold text-xl mb-3 text-center dark:text-white">
                  {club.title}
                </h3>
<p className="text-center text-gray-600 dark:text-gray-400 leading-relaxed">
  {club.description}
</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudentClubs;