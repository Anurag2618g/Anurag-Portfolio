import React from "react";

const ProjectCard = ({ imgUrl, title, tags, description }) => {
  return (
    <div className="h-full bg-white rounded-2xl overflow-hidden shadow-md mx-2">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-72 md:h-80 object-fit"
      />

      <div className="px-4 py-5 gap-2">
        <h3 className="text-medium font-bold line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </h3>
        <div className="text-sm text-gray-600 leading-5 mt-2">
          {description}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-secondary bg-orange-100 px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
