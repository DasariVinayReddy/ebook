import { Accordio } from "./Accordio";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Why should I use CodeBook?",
      answer:
        "I do not have enough context to provide a specific recommendation about using CodeBook.CodeBook is not a widely recognized term, and without more details about what it refers to, I cannot give a meaningful answer as to why you should or should not use it. Could you please provide more information about what CodeBook is and in what context you are considering using it? With additional context, I would be happy to analyze the potential benefits or drawbacks to help you make an informed decision.",
    },
    {
      id: 2,
      question: "Can I access my eBook on mobile?",
      answer:
        "Some of the most popular eBook platforms that support mobile access include.Amazon Kindle,Apple Books ,Google Play Books ,Kobo,Nook (Barnes & Noble) .",
    },
    {
      id: 3,
      question: "Do you offer refunds?",
      answer: "No",
    },
    {
      id: 4,
      question: "Do you support Internation payments?",
      answer: "Yes",
    },
  ];

  return (
    <section className="items-center justify-between mx-auto max-w-screen-xl px-4 py-2 pt-4 my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-[red] text-center font-semibold dark:text-[blue] mb-3 underline underline-offset-8">
        Question in mind?
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordio key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};
