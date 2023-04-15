import Image from "next/image";

const ProjectItem = ({ project }: any) => {
  // console.log(project);

  const imgSrc = project.cover.file?.url || project.cover.external.url;
  const title = project.properties.Name.title[0].plain_text;
  const description = project.properties["요약"].rich_text[0].plain_text;
  const github = project.properties.Github.url;
  const tags = project.properties.Tags.multi_select;
  const startDate = project.properties["프로젝트 기간"].date.start;
  const endDate = project.properties["프로젝트 기간"].date.end;
  const calcultedPeriod = () => {
    return Math.ceil(
      // @ts-ignore
      (new Date(endDate) - new Date(startDate)) / 1000 / 60 / 60 / 60
    );
  };

  return (
    <div className="project-card">
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          alt="프로젝트 커버"
          fill
          quality={100}
          priority
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <p className="my-1">
          작업기간: {startDate} ~ {endDate} ({calcultedPeriod()}일)
        </p>
        <a href={github}>Github</a>

        <div className="flex items-start mt-2">
          {tags.map((tag: any) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-emerald-600"
              key={tag.id}
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
