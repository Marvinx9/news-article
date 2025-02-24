import IArticle from "../../Interfaces/IArticle";

const Article = ({ title, text, tags, image, alt }: IArticle) => {
  return (
    <div className="news-card">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
        {tags.map((tag) => (
          <span
            key={tag}
            className="dark:text-gray-200 bg-gray-200 dark:bg-[#252836] px-4 py-1 rounded-full text-xs uppercase
            hover:scale-110 transition-all duration-300 ease-in-out 
            hover:bg-gradient-to-r dark:hover:from-[#3b82f6] dark:hover:to-[#1e293b] hover:to-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-2 text-gray-800 dark:text-gray-200">
        {text.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
      {image && <img className="sm:p-4 rounded-xl" src={image} />}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
};

export default Article;
