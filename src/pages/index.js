const Contact = () => {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="https://images.unsplash.com/photo-1646418962742-c71939412cea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">“Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
          <div className="text-slate-700 dark:text-slate-500">Staff Engineer, Algolia</div>
          <div className="probando">holaaaaa</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Contact;