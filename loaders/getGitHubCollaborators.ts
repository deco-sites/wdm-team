export interface CollaboratorsGithub {
  stars: number;
  urlRepository: string;
}

interface Props {
  owner: string;
  repository: string;
}

const getGitHubCollaborators = async (
  { owner, repository }: Props,
  _req: Request,
  _ctx: unknown,
): Promise<CollaboratorsGithub> => {
  // deno-lint-ignore no-explicit-any
  const response: any = await fetch(
    `https://api.github.com/repos/${owner}/${repository}/collaborators`,
  ).then((res) => res.json());

  return {
    stars: response.stargazers_count,
    urlRepository: response.html_url,
  };
};

export default getGitHubCollaborators;
