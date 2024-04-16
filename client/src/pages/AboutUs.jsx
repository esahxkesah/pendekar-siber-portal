import { Accordion, Carousel } from "flowbite-react";

export default function AboutUs() {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center bg-blue-800 py-3 rounded">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-8">
        <Carousel slideInterval={5000}>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>
      <div className="frame rounded-lg shadow-md p-8">
        <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title>What is Flowbite?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Is there a Figma file available?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                  has a design equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the
                  <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Figma design system
                  </a>
                  based on the utility classes from Tailwind CSS and components from Flowbite.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                  Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                  components, whereas Tailwind UI offers sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                  technical reason stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>
                    <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
            {/* Additional Accordion */}
            <Accordion.Panel>
              <Accordion.Title>What is Cyberbullying?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Cyberbullying refers to the use of electronic devices such as computers, smartphones, tablets, and social
                  media platforms to harass, intimidate, or threaten others. It can take many forms, including sending
                  hurtful messages, spreading rumors, or sharing embarrassing photos or videos.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Cyberbullying can have serious consequences for the victims, including emotional distress, depression, and
                  even suicidal thoughts. It's important to recognize the signs of cyberbullying and take steps to prevent
                  and address it.
                </p>
                {/* Inserted Carousel Component */}
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-8">
                  <Carousel slideInterval={5000}>
                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                  </Carousel>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            {/* Additional Accordion */}
            <Accordion.Panel>
              <Accordion.Title>How to Prevent Cyberbullying?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Preventing cyberbullying requires a combination of education, awareness, and proactive measures. Here are
                  some tips to help prevent cyberbullying:
                </p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>Be mindful of what you post online and how it may affect others.</li>
                  <li>Think before you click, and avoid sharing hurtful or negative content.</li>
                  <li>Report cyberbullying to the appropriate authorities or platforms.</li>
                  <li>Support victims of cyberbullying and offer them help and resources.</li>
                </ul>
                <p className="text-gray-500 dark:text-gray-400">
                  By working together and promoting kindness and respect online, we can help create a safer and more positive
                  digital environment for everyone.
                </p>
                {/* Inserted Carousel Component */}
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-8">
                  <Carousel slideInterval={5000}>
                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                  </Carousel>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            {/* Banner in the Last Two Accordions */}
            <Accordion.Panel>
              <Accordion.Title>Get Help</Accordion.Title>
              <Accordion.Content>
                <div className="flex justify-center">
                  <img
                    src="https://via.placeholder.com/600x200"
                    alt="Get Help Banner"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center mt-4 text-gray-500 dark:text-gray-400">
                  If you or someone you know is experiencing cyberbullying, don't hesitate to reach out for help. There are
                  resources and support available to assist you through this difficult time.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
