import { DATABASE_ID, NOTION_API_KEY } from "../config";
import ProjectItem from "../components/projects/ProjectItem";

export default function Projects({ projects }: any) {
  return (
    <section className="px-5 py-24 mb-10 ">
      <h1 className="text-4xl text-center font-bold sm:6xl">
        총 프로젝트:
        <span className="pl-4 text-pink-500">{projects.length}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-6 py-10 w-full">
        {projects.map((project: any) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     accept: 'application/json',
  //     'Notion-Version': '2022-06-28',
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.stringify({page_size: 100})
  // };

  // fetch('https://api.notion.com/v1/databases/database_id/query', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  const { Client } = require("@notionhq/client");
  const notion = new Client({ auth: NOTION_API_KEY });

  const response: any = await (async () => {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
    });
    return response;
  })();

  const projects = response.results;

  return {
    props: { projects },
  };
}
