export interface StarsGithub {
  stars: number;
  urlRepository: string;
}

interface Props {
  github: string;
  repository: string;
}

const getGitHubStars = async (
  { github, repository }: Props,
  _req: Request,
  _ctx: unknown
): Promise<StarsGithub> => {
  // deno-lint-ignore no-explicit-any
  const response: any = await fetch(
    `https://api.github.com/repos/${github}/${repository}`
  ).then((res) => res.json());

  return {
    stars: response.stargazers_count,
    urlRepository: response.html_url,
  };
};

export default getGitHubStars;
