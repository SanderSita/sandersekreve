import Swal from "sweetalert2";

export default function ProjectCard({ project }) {
  return (
    <div
      onClick={() => showPopup(project)}
      className="w-full flex flex-col cursor-pointer text-white rounded-sm border border-1 border-[#252625] group hover:border-white duration-200"
    >
      <img
        alt="project"
        className="w-full object-cover rounded-sm h-[300px] lg:h-[180px]"
        src={project.imgPath}
      />
      <div className="p-3">
        <h2 className="text-2xl">{project.name}</h2>
        <button
          onClick={() => showPopup(project)}
          className="w-full py-2 mt-3 rounded-sm border border-1 border-[#252625] text-gray-400 cursor-pointer hover:text-white hover:border-white group-hover:border-white group-hover:text-white duration-200"
        >
          Details
        </button>
      </div>
    </div>
  );
}

function showPopup(project) {
  const htmlTech = project.technologies
    .map(
      (technology) =>
        `<p class="text-gray-400 border border-1 px-2 rounded-md border-[#252625]">${technology}</p>`
    )
    .join("");

  Swal.fire({
    html: `
        <div class=" w-full flex flex-col gap-4">
            <img class="w-full" src="${project.imgPath}"/>
            <div class="flex w-full flex-wrap gap-2 p-2 border-t border-b border-1 border-[#252625]">
                ${htmlTech}
            </div>
            <p class="text-white text-lg text-left">${project.description}</p>
            <a href="${project.url}" target="_blank" class="p-3 px-5 bg-gray-200 font-bold text-black text-center">Naar website</a>
        </div>
        `,
    showCloseButton: false,
    showConfirmButton: false,
  });
}
