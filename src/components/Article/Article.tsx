import IArticle  from "../../Interfaces/IArticle"

const Article = ({title, text, tags, image, alt} : IArticle) => {
    return (
        <div className="news-card">
            <h3 className="text-xl text-stone-900 font-bold">{title}</h3>
            <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
                {
                    tags.map(tag => <span key={tag} className="bg-gray-100 dark:bg-stone-300 px-4 py-1 rounded-full text-xs uppercase hover:scale-110 hover:bg-gradient-to-r hover:from-stone-700">{tag}</span>)
                }
            </div>
            <div className="grid gap-1">
                {
                    text.map((content, index) => <p key={index} className="dark:bg-[#A64D79]">{content}</p>)
                }
            </div>
            {image && <img className="sm:p-4 rounded-xl" src={image}/>}
            {image && alt && <span className="sr-only">{alt}</span>}
        </div>
    )
}


export default Article
