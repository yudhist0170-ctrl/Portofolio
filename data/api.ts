import { projects as fallbackProjects, type Project } from "./projects";
import { skills as fallbackSkills } from "./skills";

type ApiProject = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
};

const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:4000";

export async function getPortfolioProjects(): Promise<{
  projects: Project[];
  usingFallback: boolean;
}> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000)
    });

    if (!response.ok) throw new Error("API projects request failed");

    const apiProjects = (await response.json()) as ApiProject[];

    return {
      projects: apiProjects.map((project) => ({
        name: project.title,
        description: project.description,
        tools: project.technologies,
        ...(project.url === undefined ? {} : { link: project.url })
      })),
      usingFallback: false
    };
  } catch {
    return { projects: fallbackProjects, usingFallback: true };
  }
}

export async function getPortfolioSkills(): Promise<{
  skills: string[];
  usingFallback: boolean;
}> {
  try {
    const response = await fetch(`${API_BASE_URL}/skills`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000)
    });

    if (!response.ok) throw new Error("API skills request failed");

    return {
      skills: (await response.json()) as string[],
      usingFallback: false
    };
  } catch {
    return { skills: fallbackSkills, usingFallback: true };
  }
}
