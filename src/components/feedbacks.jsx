import React from 'react';

const Testimonials = () => {
  const feedbacks = [
    {
      title: 'Very easy this was to integrate',
      content: 'If you care for your time, I hands down would go with this.',
      author: 'Bonnie Green',
      role: 'Developer at Open AI',
      avatar: 'karen-nelson.png',
    },
    {
      title: 'Solid foundation for any project',
      content:
        'Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!',
      author: 'Roberta Casas',
      role: 'Lead designer at Dropbox',
      avatar: 'roberta-casas.png',
    },
    {
      title: 'Mindblowing workflow',
      content:
        'Aesthetically, the well-designed components are beautiful and will undoubtedly level up your next application.',
      author: 'Jese Leos',
      role: 'Software Engineer at Facebook',
      avatar: 'jese-leos.png',
    },
    {
      title: 'Efficient Collaborating',
      content:
        'You have many examples that can be used to create a fast prototype for your team.',
      author: 'Joseph McFall',
      role: 'CTO at Google',
      avatar: 'joseph-mcfall.png',
    },
  ];

  return (
    <div name='feedbacks' className='w-full md:h-screen text-gray-300 bg-[#1e1b4b]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-400'>
          Feedbacks
        </p>
        <p className='py-6'>// Feedbacks</p>
      </div>
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-[#1e1b4b] ">
      {feedbacks.map((feedback, index) => (
        <figure
          key={index}
          className={`flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e  dark:border-gray-700 ${
            index === 2
              ? 'md:rounded-es-lg md:border-b-0 md:border-e'
              : index === 3
              ? 'rounded-b-lg md:rounded-se-lg'
              : ''
          }`}
        >
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {feedback.title}
            </h3>
            <p className="my-4">{feedback.content}</p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-9 h-9"
              src={`https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/${feedback.avatar}`}
              alt="profile picture"
            />
            
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>{feedback.author}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {feedback.role}
              </div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Testimonials;
